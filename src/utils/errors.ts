import { AxiosError } from "axios";
import { toast } from "sonner";
import type { FieldValues, UseFormReturn } from "react-hook-form";

export type Form<T extends FieldValues = FieldValues> = UseFormReturn<
  T,
  unknown,
  T
>;

export const DEFAULT_MESSAGE =
  "Aconteceu um erro desconhecido! Entre em contato com o suporte!";

export interface ErrorData {
  nonFieldError?: string | null;
  fieldErrors?: Record<string, unknown>;
}

const parseErrorResponse = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  status: number,
  defaultMessage: string = DEFAULT_MESSAGE
) => {
  if (!data) {
    return { nonFieldError: defaultMessage };
  }
  if (typeof data === "string") {
    return { nonFieldError: defaultMessage };
  }
  if (data.detail && typeof data.detail === "string") {
    return { nonFieldError: String(data.detail) };
  }
  if (
    data.detail &&
    typeof Array.isArray(data.detail) &&
    data.detail.length > 0 &&
    typeof data.detail[0] === "string"
  ) {
    return { nonFieldError: String(data.detail[0]) };
  }
  if (status === 400) {
    if (data.detail && Object.keys(data).length === 1) {
      return { fieldErrors: data.detail };
    }
    return { fieldErrors: data };
  }
  return { nonFieldError: defaultMessage };
};

const parseAxiosError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: AxiosError<any>,
  defaultMessage: string = DEFAULT_MESSAGE
) => {
  const { response } = error;
  return parseErrorResponse(
    response?.data,
    response?.status || 500,
    defaultMessage
  );
};

export const parseActionError = (
  error: unknown,
  defaultMessage: string = DEFAULT_MESSAGE
): ErrorData => {
  if (!error) {
    return { nonFieldError: defaultMessage };
  }
  if (error instanceof AxiosError) {
    return parseAxiosError(error, defaultMessage);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((error as any).message) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return { nonFieldError: String((error as any).message) };
  }
  if (typeof error === "object") {
    return parseErrorResponse(error, 400, defaultMessage);
  }
  return { nonFieldError: defaultMessage };
};

const getObjectError = (errorValue: unknown) => {
  if (typeof errorValue === "string") {
    return errorValue;
  } else if (Array.isArray(errorValue) && typeof errorValue[0] === "string") {
    return errorValue[0];
  }
  return undefined;
};

const applyFormSubErrors = (
  parentPath: string | null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: Form<any>,
  fieldErrors: Record<string, unknown>
) => {
  for (const field of Object.keys(fieldErrors)) {
    const errorValue = fieldErrors[field];

    if (typeof errorValue === "object" && !Array.isArray(errorValue)) {
      const path = parentPath ? `${parentPath}.${field}` : field;
      applyFormSubErrors(path, form, errorValue as Record<string, unknown>);
    } else {
      const errorMessage = getObjectError(errorValue);
      const path = parentPath ? `${parentPath}.${field}` : field;
      form.setError(path, { message: errorMessage });
    }
  }
};

export const applyFormErrors = (
  error: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: Form<any>,
  defaultMessage: string = DEFAULT_MESSAGE
) => {
  const { nonFieldError, fieldErrors } = parseActionError(
    error,
    defaultMessage
  );
  if (fieldErrors) {
    applyFormSubErrors(null, form, fieldErrors);
  }

  if (nonFieldError) {
    toast.error(nonFieldError);
  }
};

export const applyNonFormErrors = (
  error: unknown,
  defaultMessage: string = DEFAULT_MESSAGE
) => {
  const { nonFieldError } = parseActionError(error, defaultMessage);
  if (nonFieldError) {
    toast.error(nonFieldError);
  }
};

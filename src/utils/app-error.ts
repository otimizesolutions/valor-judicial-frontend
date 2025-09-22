import { load } from "cheerio";

import { env } from "@/env";

// Utility to check if a string is HTML
function isHtml(text: string): boolean {
  const html = load(text);
  return html("*").length > 0;
}

// Utility to extract title from HTML
function extractTitle(html: string): string | null {
  const $ = load(html);
  return $("title").text() || null;
}

// Utility to extract a meaningful message from nested JSON objects or arrays
function extractMessageFromJson(obj: unknown): string {
  const genericError = "Não foi possível determinar o erro";

  if (typeof obj === "string") return obj;
  if (Array.isArray(obj)) return extractMessageFromJson(obj[0] ?? genericError);
  if (!obj || typeof obj !== "object") return genericError;

  try {
    for (const key in obj) {
      const value = (obj as Record<string, unknown>)[key];
      if (key === "detail" || key === "message" || key === "error") {
        return extractMessageFromJson(value);
      }
      if (typeof value === "object") {
        return extractMessageFromJson(value);
      }
    }

    const rawString = JSON.stringify(obj);
    if (!rawString || rawString === "{}") return genericError;

    const cleanedMessage = rawString.replace(/.*:|[{}[\]",]/g, "").trim();
    return cleanedMessage.length > 0 ? cleanedMessage : genericError;
  } catch (error) {
    console.error(
      "Failed to extract message from JSON",
      env.NEXT_PUBLIC_NODE_ENV === "development" ? error : null
    );
    return genericError;
  }
}

export class AppError {
  message: string;

  constructor(message: unknown) {
    if (typeof message !== "string") {
      const extractedMessage = extractMessageFromJson(message);

      this.message = `Ocorreu um erro. ${
        extractedMessage || "Contate nossa equipe de suporte"
      }`;
      return;
    }

    if (isHtml(message)) {
      const extractedTitle = extractTitle(message);

      this.message = `Ocorreu um erro. ${
        extractedTitle || "Contate nossa equipe de suporte"
      }`;
      return;
    }

    this.message = message;
  }
}

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { UsersList } from "./components/users-list";

export default function AuthenticatedPage() {
  return (
    <>
      Aqui só usuário autenticado.
      <ErrorBoundary fallback={<>Aconteceu um Erro buscando usuários!</>}>
        <Suspense fallback={<>Carregando os usuários</>}>
          {/* <UsersList /> */}
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

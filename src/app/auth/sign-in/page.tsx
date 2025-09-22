import { LoginForm } from "./components/login-form";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] w-full ">
      <div className="w-full max-w-sm">
        <h1 className="font-bold text-lg mb-10">Entrar</h1>

        <LoginForm />
      </div>
    </div>
  );
}

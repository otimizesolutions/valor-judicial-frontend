import { LoginForm } from "./components/login-form";
import Image  from "next/image"
import Logo from "@public/auth-logo.svg"

export default function SignInPage() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <Image src={Logo} alt="Ícone da Valor Judicial"/>
        <div className="flex flex-col items-center justify-center flex-1 border">
          <div className="w-full max-w-sm">
            <h1 className="font-semibold font-poppins text-gray-900 text-3xl">Bem-vindo de volta</h1>
            <p className="mb-8 mt-2 text-gray-500">Entre com suas credenciais para acessar.</p>
            <LoginForm />
          </div>
        </div>
        <p>© Valor Judicial 2025</p>

      </div>
      <div className="bg-[url('/auth/dobson-bg.png')] bg-no-repeat bg-cover min-h-screen border"></div>
    </div>
  );
}

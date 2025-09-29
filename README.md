<p align="center">
    <img src="./public/logo.png" alt="Valor Judicial" />
</p>

# Valor Judicial

## Executando

1. Clonar o repositório:

```bash
git clone https://github.com/otimizesolutions/valor-judicial-frontend.git
```

2. Criar os arquivos `.env` necessários:

```bash
cd valor-judicial-frontend
cp env.local.example env.local
```

3. Executando

Para executar a aplicação, com todos os componentes, em ambiente de desenvolvimento, executar:

```bash
docker compose up --build
```


4. Comandos para desenvolvimento

```bash
# Rodar o projeto sem o docker (Apenas para debug)
npm run dev
```

## Acessando a aplicação

A aplicação pode ser acessada em `http://localhost:3000`.

## Variáveis de ambiente

> A coluna Obrigatório só indica que uma variável é requerida pra executar a aplicação ou se pode ser deixada em branco. Assim, no caso de uma execução para testes, algumas delas podem ser ignoradas. Para o correto funcionamento da aplicação, todas são necessárias.


| Variável | Tipo | Obrigatório? | Valor Padrão | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| `NEXTAUTH_SECRET` | String | Sim | - | Chave secreta usada pelo NextAuth para criptografar sessões e tokens JWT. **É crucial para a segurança**. |
| `NEXT_PUBLIC_NODE_ENV` | String | Não | `development` | Define o ambiente em que a aplicação está rodando (por exemplo, `development`, `production`). Variáveis com `NEXT_PUBLIC_` são visíveis no navegador. |
| `NEXT_PUBLIC_API_BASE_URL` | String | Sim | - | O URL da sua API de backend. Como tem o prefixo `NEXT_PUBLIC_`, ela é acessível tanto no servidor quanto no cliente. |
| `NEXTAUTH_URL` | String | Não | `http://localhost:3000` | O URL principal da sua aplicação. É usado pelo NextAuth para redirecionamentos e callbacks. Em ambientes como Vercel, costuma ser preenchido automaticamente. |


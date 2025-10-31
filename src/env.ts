import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NEXTAUTH_URL: z.url(),
    NEXTAUTH_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_NODE_ENV: z
      .enum(['development', 'production'])
      .default('development'),
    NEXT_PUBLIC_API_BASE_URL: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,

    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
})

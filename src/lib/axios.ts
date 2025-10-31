import axios from 'axios'
import { getSession } from 'next-auth/react'

import { env } from '@/env'

function ApiClient() {
  const defaultOptions = {
    baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  }

  const instance = axios.create(defaultOptions)

  instance.interceptors.request.use(async (request) => {
    const session = await getSession()

    if (session) {
      request.headers.Authorization = `Bearer ${session.access}`
    }

    return request
  })

  return instance
}

export const api = ApiClient()

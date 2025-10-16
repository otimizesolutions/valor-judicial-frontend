import { api } from '@/lib/axios'

export interface CreateCompanyRequest {
  company_name: string
  trade_name: string
  cnpj: string
  landline: string
  phone: string
  email: string
  site: string
  user_id?: number
  address: {
    postal_code: string
    street: string
    number: number
    complement: string
    neighborhood: string
    city: string
    state: string
  }
}

export async function createCompany(data: CreateCompanyRequest) {
  const response = await api.post('companies/', data)

  // TODO Tentar colocar um toast, igual o que temos no formulário de login.

  return response
}

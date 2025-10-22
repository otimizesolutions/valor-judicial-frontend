import { api } from '@/lib/axios'

export interface UpdateCompanyRequest {
  company_name?: string
  trade_name?: string
  cnpj?: string
  landline?: string
  phone?: string
  email?: string
  site?: string
  user_id?: number
  address?: {
    postal_code?: string
    street?: string
    number?: number
    complement?: string
    neighborhood?: string
    city?: string
    state?: string
  }
}

export async function updateCompany(companyId: number, data: UpdateCompanyRequest) {
  const response = await api.patch(`companies/${companyId}/`, data)

  return response
}

import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { fetchCompanies } from '@/http/companies/fetch-companies'
import { api } from '@/lib/axios'

export function fetchAll() {
  const query = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const response = await fetchCompanies()

      return response.data.results
    },
  })

  return query
}

export function useCompanyById(companyId?: number | undefined) {
  const query = useSuspenseQuery({
    queryKey: ['companies', companyId],
    queryFn: async () => {
      if (!companyId) {
        return null
      }
      const response = await api.get(`companies/${companyId}`)

      return response.data
    },
  })

  return query
}

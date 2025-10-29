// src/hooks/companies/useSaveCompanyMutation.ts

import type { useForm } from 'react-hook-form'
import type { CreateCompanyRequest } from '@/schemas/companies' // Seu tipo de dados
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { createCompany } from '@/http/companies/create-company'
import { updateCompany } from '@/http/companies/update-company'
import { applyFormErrors } from '@/utils/errors'

type MutationData = CreateCompanyRequest

// Tipagem do Form (Ajuste 'any' se souber o tipo exato do seu Form)
type FormInstance = ReturnType<typeof useForm<MutationData>>

export function useSaveCompanyMutation(companyId: number | null, form: FormInstance) {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation<unknown, unknown, MutationData>({

    mutationFn: (data) => {
      if (!companyId) {
        return createCompany(data)
      }

      return updateCompany(companyId, data)
    },

    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] })

      if (companyId) {
        queryClient.invalidateQueries({ queryKey: ['companies', companyId] })
        toast.success('Empresa atualizada com sucesso!')
        router.push('/companies')

        return
      }

      toast.success('Empresa criada com sucesso!')
      router.push('/companies')
    },

    onError: (error: any) => {
      applyFormErrors(error, form)

      // Exemplo de tratamento de erro específico da API
      const apiError = error?.response?.data

      // Se não houver erros específicos de campo, exibe um toast genérico
      if (!apiError?.fieldErrors) {
        toast.error('Erro ao salvar empresa. Verifique os dados.')
      }
    },
  })
}

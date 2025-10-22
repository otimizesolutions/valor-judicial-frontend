// src/hooks/companies/useSaveCompanyMutation.ts

import type { useForm } from 'react-hook-form'
import type { CreateCompanyRequest } from '@/schemas/companies' // Seu tipo de dados
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createCompany } from '@/http/companies/create-company'
import { updateCompany } from '@/http/companies/update-company'
import { applyFormErrors } from '@/utils/errors'

// Defina o tipo de dados que a mutação vai receber
// O data é o objeto completo do formulário
type MutationData = CreateCompanyRequest

// Tipagem do Form (Ajuste 'any' se souber o tipo exato do seu Form)
type FormInstance = ReturnType<typeof useForm<MutationData>>

export function useSaveCompanyMutation(companyId: number | null,
  // Passamos a instância completa do useForm para aplicar erros
  form: FormInstance) {
  const queryClient = useQueryClient()

  // Você pode injetar hooks de navegação ou busca se necessário (como no seu exemplo)
  // const navigate = useNavigate();

  return useMutation<unknown, unknown, MutationData>({

    mutationFn: (data) => {
      console.log('rodei ', data)
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
        // await navigate('/dashboard/companies'); // Exemplo de navegação
        return
      }

      toast.success('Empresa criada com sucesso!')
      // await navigate('/dashboard/companies'); // Exemplo de navegação
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

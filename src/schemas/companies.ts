import { z } from 'zod'

const AddressSchema = z.object({
  postal_code: z.string()
    .min(8, 'O CEP deve ter pelo menos 8 dígitos.')
    .max(9, 'O CEP deve ter no máximo 9 dígitos.')
    .regex(/^\d{5}-?\d{3}$/, 'CEP inválido.'),

  street: z.string().min(3, 'A rua é obrigatória.'),

  number: z.coerce.number()
    .int('O número deve ser um número inteiro.')
    .positive('O número deve ser positivo.'),

  complement: z.string().optional(),

  neighborhood: z.string().min(1, 'O bairro é obrigatório.'),

  city: z.string().max(64, 'A cidade é obrigatória.'),

  state: z.string().max(64, 'O estado deve ter 2 letras (UF).'),
})

// --- Schema Principal da Requisição ---
export const CreateCompanySchema = z.object({
  company_name: z.string().min(3, 'O nome da empresa é obrigatório.'),
  trade_name: z.string().min(3, 'O nome fantasia é obrigatório.'),
  cnpj: z.string()
    .min(14, 'CNPJ deve ter 14 dígitos.')
    .max(18, 'CNPJ não pode exceder 18 caracteres (incluindo pontuação).')
    .regex(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/, 'CNPJ inválido. Use o formato XX.XXX.XXX/XXXX-XX'),
  landline: z.string().optional(),
  phone: z.string().min(8, 'O telefone é obrigatório.'),
  email: z.email('Formato de e-mail inválido.'),
  site: z.url('A URL do site é inválida.').or(z.literal('')).optional(),
  user_id: z.number().int('O ID do usuário deve ser um número inteiro.').nullable().optional(),
  address: AddressSchema,
})

export type CreateCompanyRequest = z.infer<typeof CreateCompanySchema>

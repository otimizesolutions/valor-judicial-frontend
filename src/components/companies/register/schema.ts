// src/schemas/createCompanySchema.ts
import { z } from 'zod'

// --- Schema do Endereço (Objeto Aninhado) ---
const AddressSchema = z.object({
  // Validação de formato (ex: 5 dígitos + hífen + 3 dígitos)
  postal_code: z.string()
    .min(8, 'O CEP deve ter pelo menos 8 dígitos.')
    .max(9, 'O CEP deve ter no máximo 9 dígitos.')
    .regex(/^\d{5}-?\d{3}$/, 'CEP inválido. Use o formato XXXXX-XXX ou XXXXXXXX.'),

  street: z.string().min(3, 'A rua é obrigatória.'),

  // O campo 'number' é tipado como 'number', mas Zod é estrito.
  // Usamos 'coerce.number()' para forçar a conversão de string (de um input) para número.
  number: z.coerce.number()
    .int('O número deve ser um número inteiro.')
    .positive('O número deve ser positivo.'),

  complement: z.string().optional(),

  neighborhood: z.string().min(1, 'O bairro é obrigatório.'),

  city: z.string().min(1, 'A cidade é obrigatória.'),

  state: z.string().length(2, 'O estado deve ter 2 letras (UF).'),
})

// --- Schema Principal da Requisição ---
export const CreateCompanySchema = z.object({
  company_name: z.string().min(3, 'O nome da empresa é obrigatório.'),

  trade_name: z.string().min(3, 'O nome fantasia é obrigatório.'),

  // Validação de formato para CNPJ
  cnpj: z.string()
    .min(14, 'CNPJ deve ter 14 dígitos.')
    .max(18, 'CNPJ não pode exceder 18 caracteres (incluindo pontuação).')
    .regex(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/, 'CNPJ inválido. Use o formato XX.XXX.XXX/XXXX-XX ou apenas dígitos.'),

  // Telefone Fixo (landline)
  landline: z.string().optional(),

  // Celular (phone)
  phone: z.string().min(8, 'O telefone é obrigatório.'),

  email: z.email('Formato de e-mail inválido.'),

  // Valida se é uma URL válida. Se for opcional, use .or(z.literal('')) para permitir campo vazio
  site: z.url('A URL do site é inválida.').or(z.literal('')).optional(),

  // Opcional: user_id
  user_id: z.number().int('O ID do usuário deve ser um número inteiro.').optional(),

  // Objeto de Endereço Aninhado
  address: AddressSchema,
})

// Tipo derivado do Zod, que garante que a tipagem corresponda ao schema validado
export type CreateCompanyRequest = z.infer<typeof CreateCompanySchema>

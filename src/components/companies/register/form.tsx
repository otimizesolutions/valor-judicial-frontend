// src/components/CadastroEmpresaForm.tsx
'use client'
import type { SubmitHandler } from 'react-hook-form'
import type { CreateCompanyRequest } from '@/components/companies/register/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, Plus, Save, X } from 'lucide-react' // Ícones
import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { CreateCompanySchema } from '@/components/companies/register/schema'
import { Button } from '@/components/ui/button'
// Assumindo que você tem esses componentes de UI:
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { createCompany } from '@/http/companies/create-company'

// Lista de estados e cidades simplificada para o Select
const mockEstados = [{ value: 'GO', label: 'Goiás' }, { value: 'SP', label: 'São Paulo' }]
const mockCidades = [{ value: 'Goiânia', label: 'Goiânia' }, { value: 'Campinas', label: 'Campinas' }]

export function Form() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CreateCompanyRequest>({
    resolver: zodResolver(CreateCompanySchema),
    // defaultValues: {
    //   socios: [],
    //   responsaveis: [{ nome: 'Tales Gomes de Souza' }], // Valor inicial da imagem
    // },
  })

  // Gerenciamento de arrays dinâmicos (para sócios e responsáveis)
  // const { fields: sociosFields, append: appendSocio } = useFieldArray({
  //   control,
  //   name: 'socios',
  // })

  // const { fields: responsaveisFields, append: appendResponsavel } = useFieldArray({
  //   control,
  //   name: 'responsaveis',
  // })

  async function onSubmit(data) {
    console.log('Dados submetidos:', data)
    const response = await createCompany(data)
    console.log('deu certo ', response)
    // Lógica de API aqui
    // await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 border rounded-lg bg-white">
      {/* --- IDENTIFICAÇÃO BÁSICA --- */}
      <div className="space-y-4">
        <h2 className="subtitle-form">Identificação básica</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Razão Social */}
          <div>
            <Label htmlFor="trade_name">Razão social</Label>
            <Input {...register('trade_name')} placeholder="-" />
            {errors.trade_name && <p className="text-red-500 text-xs mt-1">{errors.trade_name.message}</p>}
          </div>

          {/* Nome fantasia */}
          <div>
            <Label htmlFor="company_name">Nome fantasia</Label>
            <Input {...register('company_name')} placeholder="-" />
            {errors.company_name && <p className="text-red-500 text-xs mt-1">{errors.company_name.message}</p>}
          </div>

          {/* CNPJ */}
          <div className="flex items-center">
            <div className="flex-grow">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input {...register('cnpj')} placeholder="XX.XXX.XXX/XXXX-XX" />
              {errors.cnpj && <p className="text-red-500 text-xs mt-1">{errors.cnpj.message}</p>}
            </div>
            {/* <Button className="h-10 ml-2">
              <Plus className="h-4 w-4" />
              Adicionar
            </Button> */}
          </div>
        </div>
      </div>

      <Separator />

      {/* --- ENDEREÇO E CONTATOS --- */}
      <div className="space-y-4">
        <h2 className="subtitle-form">Endereço e contatos</h2>

        {/* Linha 1: CEP, Logradouro, Número, Complemento, Bairro */}
        <div className="grid grid-cols-5 gap-4">
          {/* CEP */}
          <div>
            <Label htmlFor="address.postal_code">CEP</Label>
            <Input
              id="address.postal_code"
              {...register('address.postal_code')}
              placeholder="XXXXX-XXX"
            />
            {errors.address?.postal_code && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.postal_code.message}
              </p>
            )}
          </div>

          {/* Rua / Logradouro */}
          <div>
            <Label htmlFor="address.street">Rua</Label>
            <Input
              id="address.street"
              {...register('address.street')}
              placeholder="-"
            />
            {errors.address?.street && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.street.message}
              </p>
            )}
          </div>

          {/* Número */}
          <div>
            <Label htmlFor="address.number">Número</Label>
            <Input
              id="address.number"
              type="number" // Garante que o input colete números (usando coerce.number() no Zod)
              {...register('address.number')}
              placeholder="123"
            />
            {errors.address?.number && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.number.message}
              </p>
            )}
          </div>

          {/* Complemento */}
          <div>
            <Label htmlFor="address.complement">Complemento</Label>
            <Input
              id="address.complement"
              {...register('address.complement')}
              placeholder="Apto/Sala (Opcional)"
            />
            {errors.address?.complement && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.complement.message}
              </p>
            )}
          </div>

          {/* Bairro */}
          <div>
            <Label htmlFor="address.neighborhood">Bairro</Label>
            <Input
              id="address.neighborhood"
              {...register('address.neighborhood')}
              placeholder="Centro"
            />
            {errors.address?.neighborhood && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.neighborhood.message}
              </p>
            )}
          </div>
        </div>

        {/* Linha 2: Estado, Cidade */}
        <div className="grid grid-cols-2 gap-4">

          {/* Estado (Usando Controller para Select) */}
          <Controller
            name="address.state"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  {mockEstados.map(e => <SelectItem key={e.value} value={e.value}>{e.label}</SelectItem>)}
                </SelectContent>
              </Select>
            )}
          />

          {/* Cidade (Usando Controller para Select) */}
          <Controller
            name="address.city"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Cidade" />
                </SelectTrigger>
                <SelectContent>
                  {mockCidades.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                </SelectContent>
              </Select>
            )}
          />

        </div>
      </div>

      <Separator />

      {/* --- CONTATO --- */}
      <div className="space-y-4">
        <h2 className="subtitle-form">Contato</h2>
        <div className="grid grid-cols-4 gap-4">

          {/* Telefone Fixo (landline) */}
          <div>
            <Label htmlFor="landline">Telefone Fixo</Label>
            <Input
              id="landline"
              {...register('landline')}
              placeholder="(XX) XXXX-XXXX"
            />
            {errors.landline && (
              <p className="text-red-500 text-xs mt-1">
                {errors.landline.message}
              </p>
            )}
          </div>

          {/* Celular (phone) */}
          <div>
            <Label htmlFor="phone">Celular</Label>
            <Input
              id="phone"
              {...register('phone')}
              placeholder="(XX) 9XXXX-XXXX"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* E-mail */}
          <div>
            <Label htmlFor="email">E-mail de Contato</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="contato@empresa.com.br"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Site */}
          <div>
            <Label htmlFor="site">Site</Label>
            <Input
              id="site"
              type="url"
              {...register('site')}
              placeholder="https://www.site.com.br (Opcional)"
            />
            {errors.site && (
              <p className="text-red-500 text-xs mt-1">
                {errors.site.message}
              </p>
            )}
          </div>
        </div>
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <Separator />

      {/* --- DADOS SOCIETÁRIOS (SÓCIOS) --- */}
      {/* <div className="space-y-4">
        <h2 className="subtitle-form">Dados societários</h2>

        {sociosFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-4 gap-4 items-end">
            <Input {...register(`socios.${index}.nome`)} placeholder="Nome" />
            <Input {...register(`socios.${index}.cpf`)} placeholder="CPF" />
            <Input type="number" {...register(`socios.${index}.participacao`, { valueAsNumber: true })} placeholder="Participação societária" />

            <div className="col-span-1 flex justify-end gap-2">
              <Button type="button" className="h-10">
                <Save className="h-4 w-4" />
                {' '}
                Salvar
              </Button>
              <Button type="button" variant="ghost" className="h-10">
                <Plus className="h-4 w-4" />
                {' '}
                Adicionar
              </Button>
            </div>
          </div>
        ))}

        {sociosFields.length === 0 && (
          <div className="flex justify-end">
            <Button type="button" variant="ghost" onClick={() => appendSocio({ nome: '', cpf: '', participacao: undefined })}>
              <Plus className="h-4 w-4" />
              {' '}
              Adicionar Sócio
            </Button>
          </div>
        )}
      </div>

      <Separator /> */}

      {/* --- RESPONSÁVEIS PELO PROCESSO --- */}
      {/* <div className="space-y-4">
        <h2 className="subtitle-form">Responsáveis pelo processo</h2>

        {responsaveisFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-2 gap-4 items-end">
            <div className="flex gap-4">
              <Input {...register(`responsaveis.${index}.nome`)} placeholder="Nome" />

              <Controller
                name={`responsaveis.${index}.nome` as `responsaveis.${number}.nome`}
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tales Gomes de Souza">Tales Gomes de Souza</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button type="button" variant="ghost" onClick={() => appendResponsavel({ nome: '' })}>
                <Plus className="h-4 w-4" />
                {' '}
                Adicionar novo responsável
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Separator /> */}

      {/* --- BOTÕES FINAIS --- */}
      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="outline">
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting} variant="secondary">
          {isSubmitting ? 'Salvando...' : 'Salvar alterações'}
        </Button>
      </div>
    </form>
  )
}

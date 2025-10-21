'use client'
import type { CreateCompanyRequest } from '@/components/companies/register/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { CreateCompanySchema } from '@/components/companies/register/schema'
import { InputError } from '@/components/shared/inputs/input-error'
import { InputMask } from '@/components/shared/inputs/input-mask'
import { Button } from '@/components/ui/button'
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
import { applyFormErrors } from '@/utils/errors'

const mockEstados = [{ value: 'GO', label: 'Goiás' }, { value: 'SP', label: 'São Paulo' }]
const mockCidades = [{ value: 'Goiânia', label: 'Goiânia' }, { value: 'Campinas', label: 'Campinas' }]

export function Form() {
  const form = useForm<CreateCompanyRequest>({
    resolver: zodResolver(CreateCompanySchema),
    // defaultValues: { ... },
    // 
  })
  const errors = form.formState.errors

  async function onSubmit(data) {
    try {
      await createCompany(data)
      toast.success('Empresa criada com sucesso')
    }
    catch (error) {
      applyFormErrors(error, form)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 border rounded-lg bg-white">
      {/* --- IDENTIFICAÇÃO BÁSICA --- */}
      <div className="space-y-4">
        <h2 className="subtitle-form">Identificação básica</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Razão Social */}
          <div>
            <Label htmlFor="trade_name">Razão social</Label>
            <Input {...form.register('trade_name')} placeholder="-" />
            <InputError message={errors.trade_name?.message} />
          </div>

          {/* Nome fantasia */}
          <div>
            <Label htmlFor="company_name">Nome fantasia</Label>
            <Input {...form.register('company_name')} placeholder="-" />
            <InputError message={errors.company_name?.message} />
          </div>

          {/* CNPJ */}
          <div>
            <Label htmlFor="cnpj">CNPJ</Label>
            <Controller
              name="cnpj"
              control={form.control}
              render={({ field }) => (
                <InputMask
                  maskFormat="##.###.###/####-##"
                  value={field.value}
                  onChange={field.onChange}
                  name={field.name}
                />
              )}
            />
            {errors.cnpj && <InputError message={errors.cnpj.message} />}
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
            <Controller
              name="address.postal_code"
              control={form.control}
              render={({ field }) => (
                <InputMask
                  maskFormat="#####-###"
                  value={field.value}
                  onChange={field.onChange}
                  name={field.name}
                />
              )}
            />
            {errors.address?.postal_code && <InputError message={errors.address.postal_code.message} />}
          </div>

          {/* Rua / Logradouro */}
          <div>
            <Label htmlFor="address.street">Rua</Label>
            <Input
              id="address.street"
              {...form.register('address.street')}
              placeholder="-"
            />
            {errors.address?.street && <InputError message={errors.address.street.message} />}
          </div>

          {/* Número */}
          <div>
            <Label htmlFor="address.number">Número</Label>
            <Input
              id="address.number"
              type="number"
              {...form.register('address.number')}
              placeholder="123"
            />
            <InputError message={errors.address?.number?.message} />
          </div>

          {/* Complemento */}
          <div>
            <Label htmlFor="address.complement">Complemento</Label>
            <Input
              id="address.complement"
              {...form.register('address.complement')}
              placeholder="Apto/Sala (Opcional)"
            />
            <InputError message={errors.address?.complement?.message} />
          </div>

          {/* Bairro */}
          <div>
            <Label htmlFor="address.neighborhood">Bairro</Label>
            <Input
              id="address.neighborhood"
              {...form.register('address.neighborhood')}
              placeholder="Centro"
            />
            <InputError message={errors.address?.neighborhood?.message} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">

          {/* Estado (Usando Controller para Select) */}
          <Controller
            name="address.state"
            control={form.control}
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
            control={form.control}
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
            <Controller
              name="landline"
              control={form.control}
              render={({ field }) => (
                <InputMask
                  maskFormat="(##)####-####"
                  value={field.value}
                  onChange={field.onChange}
                  name={field.name}
                />
              )}
            />
            <InputError message={errors.landline?.message} />
          </div>

          {/* Celular (phone) */}
          <div>
            <Label htmlFor="phone">Celular</Label>
            <Controller
              name="phone"
              control={form.control}
              render={({ field }) => (
                <InputMask
                  maskFormat="(##)#####-####"
                  value={field.value}
                  onChange={field.onChange}
                  name={field.name}
                />
              )}
            />
            <InputError message={errors.phone?.message} />
          </div>

          {/* E-mail */}
          <div>
            <Label htmlFor="email">E-mail de Contato</Label>
            <Input
              id="email"
              type="email"
              {...form.register('email')}
              placeholder="contato@empresa.com.br"
            />
            <InputError message={errors.email?.message} />
          </div>

          {/* Site */}
          <div>
            <Label htmlFor="site">Site</Label>
            <Input
              id="site"
              type="url"
              {...form.register('site')}
              placeholder="https://www.site.com.br"
            />
            <InputError message={errors.site?.message} />
          </div>
        </div>
      </div>

      <Separator />

      {/* --- BOTÕES FINAIS --- */}
      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="outline">
          Cancelar
        </Button>
        <Button type="submit" disabled={form.formState.isSubmitting} variant="secondary">
          {form.formState.isSubmitting ? 'Salvando...' : 'Salvar alterações'}
        </Button>
      </div>
    </form>
  )
}

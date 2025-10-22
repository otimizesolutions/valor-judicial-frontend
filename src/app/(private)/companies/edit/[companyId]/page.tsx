import { Form } from '@/components/companies/form'

interface CompanyEditProps {
  params: {
    companyId: string
  }
}

export default function CompanyEdit({ params }: CompanyEditProps) {
  const companyId = Number(params.companyId)

  return (
    <div>
      <h1>
        Edit Company
      </h1>
      <Form companyId={companyId} />
    </div>
  )
}

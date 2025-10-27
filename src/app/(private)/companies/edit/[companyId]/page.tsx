import { Header } from '@/components/companies/edit/header'
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
      <Header />
      <Form companyId={companyId} />
    </div>
  )
}

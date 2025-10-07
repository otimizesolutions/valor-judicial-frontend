import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";



export function TableObjects(){
  const dataJson = [
    {
      "name": "Lumina Tecnologia Ltda",
      "cnpj": "12.345.678/0001-90",
      "fantasy": "Lumina Tech",
      "area": "Serviços",
      "state": "Goiás",
      "city": "Goiânia"
    },
    {
      "name": "Alfa Logística e Transportes S/A",
      "cnpj": "98.765.432/0001-11",
      "fantasy": "Alfa Log",
      "area": "Transporte",
      "state": "São Paulo",
      "city": "Campinas"
    },
    {
      "name": "Horizonte Construções Ltda",
      "cnpj": "45.109.287/0001-55",
      "fantasy": "Horizonte Obras",
      "area": "Construção",
      "state": "Minas Gerais",
      "city": "Belo Horizonte"
    },
    {
      "name": "Sabor do Campo Alimentos Eireli",
      "cnpj": "23.456.789/0001-44",
      "fantasy": "Sabor Campo",
      "area": "Alimentação",
      "state": "Paraná",
      "city": "Curitiba"
    },
    {
      "name": "Ecolife Produtos Naturais Ltda",
      "cnpj": "76.543.210/0001-33",
      "fantasy": "Ecolife Store",
      "area": "Varejo",
      "state": "Rio de Janeiro",
      "city": "Niterói"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
    {
      "name": "Ecolife Produtos Naturais Ltda",
      "cnpj": "76.543.210/0001-33",
      "fantasy": "Ecolife Store",
      "area": "Varejo",
      "state": "Rio de Janeiro",
      "city": "Niterói"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
    {
      "name": "Ecolife Produtos Naturais Ltda",
      "cnpj": "76.543.210/0001-33",
      "fantasy": "Ecolife Store",
      "area": "Varejo",
      "state": "Rio de Janeiro",
      "city": "Niterói"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
    {
      "name": "Ecolife Produtos Naturais Ltda",
      "cnpj": "76.543.210/0001-33",
      "fantasy": "Ecolife Store",
      "area": "Varejo",
      "state": "Rio de Janeiro",
      "city": "Niterói"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
    {
      "name": "Ecolife Produtos Naturais Ltda",
      "cnpj": "76.543.210/0001-33",
      "fantasy": "Ecolife Store",
      "area": "Varejo",
      "state": "Rio de Janeiro",
      "city": "Niterói"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
    {
      "name": "Ecolife Produtos Naturais Ltda",
      "cnpj": "76.543.210/0001-33",
      "fantasy": "Ecolife Store",
      "area": "Varejo",
      "state": "Rio de Janeiro",
      "city": "Niterói"
    },
    {
      "name": "Impacto Marketing Digital S/A",
      "cnpj": "54.321.098/0001-22",
      "fantasy": "Impacto Digital",
      "area": "Publicidade",
      "state": "Bahia",
      "city": "Salvador"
    },
    {
      "name": "Sol Nascente Energia Solar Ltda",
      "cnpj": "11.223.344/0001-77",
      "fantasy": "Sol Nascente",
      "area": "Energia",
      "state": "Ceará",
      "city": "Fortaleza"
    },
    {
      "name": "Mundo Geek Games Ltda",
      "cnpj": "00.112.233/0001-66",
      "fantasy": "Geek World",
      "area": "Entretenimento",
      "state": "Rio Grande do Sul",
      "city": "Porto Alegre"
    },
  ]

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="pl-6">Empresas</TableHead>
          <TableHead>Nome fantasia</TableHead>
          <TableHead>Setor de Atuação</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="pr-6">Cidade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          dataJson.map((company)=>{
            return (
              <TableRow key={company.cnpj} className="odd:bg-gray-50/20 p-7">
                <TableCell className="flex flex-col pl-6">
                  <p className="font-semibold text-gray-700">{company.name}</p>
                  <p>CNPJ: {company.cnpj}</p>
                </TableCell>
                <TableCell>{company.fantasy}</TableCell>
                <TableCell>{company.area}</TableCell>
                <TableCell>{company.state}</TableCell>
                <TableCell className="pr-6">{company.city}</TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}
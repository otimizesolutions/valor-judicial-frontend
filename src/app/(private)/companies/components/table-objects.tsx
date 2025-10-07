"use client"

import { Button } from "@/components/ui/button";
import { 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell, 
  Table 
} from "@/components/ui/table";

import { 
  getPaginationRowModel, 
  getCoreRowModel, 
  useReactTable, 
  ColumnDef,
  flexRender
} from "@tanstack/react-table";
import { useMemo } from "react";




// export function TableObjects(){
//   const dataJson = [
//     {
//       "name": "Lumina Tecnologia Ltda",
//       "cnpj": "12.345.678/0001-90",
//       "fantasy": "Lumina Tech",
//       "area": "Serviços",
//       "state": "Goiás",
//       "city": "Goiânia"
//     },
//     {
//       "name": "Alfa Logística e Transportes S/A",
//       "cnpj": "98.765.432/0001-11",
//       "fantasy": "Alfa Log",
//       "area": "Transporte",
//       "state": "São Paulo",
//       "city": "Campinas"
//     },
//     {
//       "name": "Horizonte Construções Ltda",
//       "cnpj": "45.109.287/0001-55",
//       "fantasy": "Horizonte Obras",
//       "area": "Construção",
//       "state": "Minas Gerais",
//       "city": "Belo Horizonte"
//     },
//     {
//       "name": "Sabor do Campo Alimentos Eireli",
//       "cnpj": "23.456.789/0001-44",
//       "fantasy": "Sabor Campo",
//       "area": "Alimentação",
//       "state": "Paraná",
//       "city": "Curitiba"
//     },
//     {
//       "name": "Ecolife Produtos Naturais Ltda",
//       "cnpj": "76.543.210/0001-33",
//       "fantasy": "Ecolife Store",
//       "area": "Varejo",
//       "state": "Rio de Janeiro",
//       "city": "Niterói"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//     {
//       "name": "Ecolife Produtos Naturais Ltda",
//       "cnpj": "76.543.210/0001-33",
//       "fantasy": "Ecolife Store",
//       "area": "Varejo",
//       "state": "Rio de Janeiro",
//       "city": "Niterói"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//     {
//       "name": "Ecolife Produtos Naturais Ltda",
//       "cnpj": "76.543.210/0001-33",
//       "fantasy": "Ecolife Store",
//       "area": "Varejo",
//       "state": "Rio de Janeiro",
//       "city": "Niterói"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//     {
//       "name": "Ecolife Produtos Naturais Ltda",
//       "cnpj": "76.543.210/0001-33",
//       "fantasy": "Ecolife Store",
//       "area": "Varejo",
//       "state": "Rio de Janeiro",
//       "city": "Niterói"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//     {
//       "name": "Ecolife Produtos Naturais Ltda",
//       "cnpj": "76.543.210/0001-33",
//       "fantasy": "Ecolife Store",
//       "area": "Varejo",
//       "state": "Rio de Janeiro",
//       "city": "Niterói"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//     {
//       "name": "Ecolife Produtos Naturais Ltda",
//       "cnpj": "76.543.210/0001-33",
//       "fantasy": "Ecolife Store",
//       "area": "Varejo",
//       "state": "Rio de Janeiro",
//       "city": "Niterói"
//     },
//     {
//       "name": "Impacto Marketing Digital S/A",
//       "cnpj": "54.321.098/0001-22",
//       "fantasy": "Impacto Digital",
//       "area": "Publicidade",
//       "state": "Bahia",
//       "city": "Salvador"
//     },
//     {
//       "name": "Sol Nascente Energia Solar Ltda",
//       "cnpj": "11.223.344/0001-77",
//       "fantasy": "Sol Nascente",
//       "area": "Energia",
//       "state": "Ceará",
//       "city": "Fortaleza"
//     },
//     {
//       "name": "Mundo Geek Games Ltda",
//       "cnpj": "00.112.233/0001-66",
//       "fantasy": "Geek World",
//       "area": "Entretenimento",
//       "state": "Rio Grande do Sul",
//       "city": "Porto Alegre"
//     },
//   ]



//   const columns = []

//   const table = useReactTable({
//     data: dataJson,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),

//     initialState: {
//       pagination: {
//         pageSize: 10,
//         pageIndex: 0
//       }
//     }
//   })

//   return (
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="pl-6">Empresas</TableHead>
//           <TableHead>Nome fantasia</TableHead>
//           <TableHead>Setor de Atuação</TableHead>
//           <TableHead>Estado</TableHead>
//           <TableHead className="pr-6">Cidade</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {
//           dataJson.map((company)=>{
//             return (
//               <TableRow key={company.cnpj} className="odd:bg-gray-50/20 p-7">
//                 <TableCell className="flex flex-col pl-6">
//                   <p className="font-semibold text-gray-700">{company.name}</p>
//                   <p>CNPJ: {company.cnpj}</p>
//                 </TableCell>
//                 <TableCell>{company.fantasy}</TableCell>
//                 <TableCell>{company.area}</TableCell>
//                 <TableCell>{company.state}</TableCell>
//                 <TableCell className="pr-6">{company.city}</TableCell>
//               </TableRow>
//             )
//           })
//         }
//       </TableBody>
//     </Table>
//   )
// }

// Adicione as importações necessárias
// Supondo que você use o `useReactTable` e componentes Shadcn UI/similares


// --- 1. Definindo a Tipagem e Dados ---
type Company = {
  name: string;
  cnpj: string;
  fantasy: string;
  area: string;
  state: string;
  city: string;
};

// Seus dados (mantidos no componente para simplicidade)
const dataJson: Company[] = [
  // ... seus 35+ objetos de empresa aqui ...
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
  { "name": "Lumina Tecnologia Ltda", "cnpj": "12.345.678/0001-90", "fantasy": "Lumina Tech", "area": "Serviços", "state": "Goiás", "city": "Goiânia" },
  { "name": "Alfa Logística e Transportes S/A", "cnpj": "98.765.432/0001-11", "fantasy": "Alfa Log", "area": "Transporte", "state": "São Paulo", "city": "Campinas" },
  // ... (dados omitidos por brevidade) ...
  { "name": "Mundo Geek Games Ltda", "cnpj": "00.112.233/0001-66", "fantasy": "Geek World", "area": "Entretenimento", "state": "Rio Grande do Sul", "city": "Porto Alegre" },
];


export function TableObjects() {
  
  // 2. Definição das Colunas (Adaptadas para seu JSON)
  const columns = useMemo<ColumnDef<Company>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Empresas",
        cell: ({ row }) => (
          <div className="flex flex-col pl-6">
            <p className="font-semibold text-gray-700">{row.original.name}</p>
            <p>CNPJ: {row.original.cnpj}</p>
          </div>
        ),
      },
      { accessorKey: "fantasy", header: "Nome fantasia" },
      { accessorKey: "area", header: "Setor de Atuação" },
      { accessorKey: "state", header: "Estado" },
      { accessorKey: "city", header: "Cidade" },
    ],
    []
  );

  // 3. Inicialização do React Table
  const table = useReactTable({
    data: dataJson,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // Habilita a paginação

    // Configuração de 10 itens por página
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      }
    }
  });

  // --- Renderização do Componente ---
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          
          {/* Cabeçalho da Tabela - Usando a lógica do React Table */}
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          
          {/* Corpo da Tabela - Usando a lógica de paginação do React Table */}
          <TableBody>
            {/* table.getRowModel().rows retorna APENAS as 10 linhas da página atual */}
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="odd:bg-gray-50/20">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Nenhuma empresa encontrada.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* 4. Controles de Paginação (Next e Previous) */}
      <div className="flex items-center justify-between py-4">
        
        {/* Status da Paginação: Página X de Y */}
        <div className="text-sm text-muted-foreground">
          Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </div>

        <div className="space-x-2">
          {/* Botão ANTERIOR */}
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          
          {/* Botão PRÓXIMO */}
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}
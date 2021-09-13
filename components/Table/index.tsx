import { ReactNode, useMemo } from 'react';

import { useTable } from 'react-table';
import { Ingredient } from 'typings/Ingredient';

import { Container } from './styles';

interface TableProps {
  data: Ingredient[]
}

function Table({ data }: TableProps) {

  const columns = useMemo(() => {
    return [
      {
        Header: 'Quantidade',
        accessor: 'quantity',
      },
      {
        Header: 'Unidade',
        accessor: 'unit',
      },
      {
        Header: 'Ingrediente',
        accessor: 'name',
      },
      {
        Header: 'ID',
        accessor: 'id',
        show: false
      }
    ]
  }, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, initialState: { hiddenColumns: ['id'] } });

  return (
    <Container {...getTableProps()}>
     <thead>
       {headerGroups.map((headerGroup, index) => (
         <tr key={index} {...headerGroup.getHeaderGroupProps()}>
           {headerGroup.headers.map((column, index) => (
             <th key={index} {...column.getHeaderProps()}>
               {column.render('Header')}
             </th>
           ))}
         </tr>
       ))}
     </thead>
     <tbody {...getTableBodyProps()}>
       {rows.map((row, index) => {
         prepareRow(row)
         return (
           <tr key={index} {...row.getRowProps()}>
             {row.cells.map((cell) => {
               return (
                 <td key={cell} {...cell.getCellProps()}>
                   {cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
   </Container>
  );
};

export default Table;

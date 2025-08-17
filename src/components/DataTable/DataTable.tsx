import React, { useState } from 'react';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T>({ data, columns, loading, selectable, onRowSelect }: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const toggleRow = (row: T) => {
    let updated: T[] = [];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter(r => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  if (loading) return <div>Loading...</div>;
  if (!data.length) return <div>No data available</div>;

  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th></th>}
          {columns.map(col => (
            <th key={col.key} className="px-4 py-2 text-left border-b">{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b">
            {selectable && (
              <td className="px-4">
                <input type="checkbox" checked={selectedRows.includes(row)} onChange={() => toggleRow(row)} />
              </td>
            )}
            {columns.map(col => (
              <td key={col.key} className="px-4 py-2">{String(row[col.dataIndex])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
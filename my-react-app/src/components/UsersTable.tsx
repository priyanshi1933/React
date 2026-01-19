import React, { useEffect, useState, type FormEvent } from 'react'
import './UsersTable.css'
import { type FilterFn } from '@tanstack/react-table';
import { createColumnHelper, flexRender, getCoreRowModel, type ColumnFiltersState, type SortingState, useReactTable, getFilteredRowModel, getPaginationRowModel, getSortedRowModel } from '@tanstack/react-table';
export type User = {
    id: number;
    name: string;
    age: number;
}
const ageRangeFilterFn: FilterFn<User> = (row, columnId, filterValue) => {
    if (!filterValue) return true;
    const [min, max] = filterValue.split('-').map(Number);
    const rowValue = row.getValue<number>(columnId);
    return rowValue >= min && rowValue <= max;
};
const columnHelper = createColumnHelper<User>();
const columns = [
    columnHelper.accessor('id', {
        header: () => 'ID',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
        header: () => 'Name',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
        filterFn: ageRangeFilterFn,
        cell: (info) => info.getValue(),
    }),
]
const UsersTable = () => {
    const [users, setUsers] = useState<User[]>([])
    const [sorting, setSorting] = useState<SortingState>([])
    const [ageFilter, setAgeFilter] = useState<string>("")
    const [globalFilter, setGlobalFilter] = useState("");
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const table = useReactTable({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            sorting,
            globalFilter,
            columnFilters,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        onColumnFiltersChange: setColumnFilters,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: { pageSize: 5 }
        }
    })
    useEffect(() => {
        const url = `http://localhost:3004/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(Array.isArray(data) ? data : []);
            })
            .catch(err => console.error("Search failed:", err));
    }, []);
    useEffect(() => {
        table.getColumn('age')?.setFilterValue(ageFilter);
    }, [ageFilter, table])
    return (
        <div>
            <h1 className='mt-5'>React table with Pagination, Filter, Searching and Sorting</h1>
            <hr />
            <div className='search-bar mt-5' style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                {/* Search input updates globalFilter state */}
                <input
                    type='text'
                    placeholder='Search all ...'
                    value={globalFilter ?? ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
                <select
                    value={(table.getColumn('age')?.getFilterValue() as string) ?? ""}
                    onChange={(e) => table.getColumn('age')?.setFilterValue(e.target.value)}
                >
                    <option value="">All Ages</option>
                    <option value="16-20">16 to 20</option>
                    <option value="21-25">21 to 25</option>
                    <option value="26-30">26 to 30</option>
                </select>
            </div>
            <table className='users-table mt-5'>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} >
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className='users-table-cell'>
                                    <div {...{
                                        className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                                        onClick: header.column.getToggleSortingHandler(),
                                    }}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{ asc: ' ⋀', desc: ' ⋁' }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className='users-table-cell'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px', alignItems: 'center' }} className='mt-5'>
                <button
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => table.previousPage()}
                >Previous</button><span>
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
                <button
                    disabled={!table.getCanNextPage()}
                    onClick={() => table.nextPage()}
                >Next</button>
            </div>
        </div>
    )
}
export default UsersTable
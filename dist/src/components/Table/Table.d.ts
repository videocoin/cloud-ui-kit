import { ReactNode } from 'react';
export interface Field {
    name: string;
    label: string;
    colspan?: number;
}
export interface TableProps<T> {
    fields: Field[];
    data: T[];
    renderRow: (item: T) => ReactNode;
}
export declare const Table: <T extends object>({ fields, data, renderRow, }: TableProps<T>) => JSX.Element;

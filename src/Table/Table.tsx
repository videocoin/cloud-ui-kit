import React, { ReactNode } from 'react';
import css from './Table.module.scss';
import Typography from '../Typography/Typography';

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

const Table = <T extends object>({
  fields,
  data,
  renderRow,
}: TableProps<T>) => {
  const renderHead = () =>
    fields.map(({ name, label, colspan = 1 }: Field) => (
      <th key={name} colSpan={colspan}>
        <Typography type="smallBody">{label}</Typography>
      </th>
    ));

  const renderTable = () => data.map(renderRow);
  return (
    <table className={css.root}>
      <thead>
        <tr>{renderHead()}</tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
};

export default Table;

import React, { ReactNode } from 'react';
import css from './Table.module.scss';
import { map } from 'lodash/fp';
import { Typography } from '../..';

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

export const Table = <T extends object>({
  fields,
  data,
  renderRow,
}: TableProps<T>) => {
  const renderHead = () =>
    map(({ name, label, colspan = 1 }) => (
      <th key={name} colSpan={colspan}>
        <Typography type="smallBodyAlt">{label}</Typography>
      </th>
    ))(fields);

  const renderTable = () => map(renderRow, data);
  return (
    <table className={css.root}>
      <thead>
        <tr>{renderHead()}</tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
};

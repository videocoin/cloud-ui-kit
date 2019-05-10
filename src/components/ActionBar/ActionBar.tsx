import React, { ReactNode } from 'react';
import css from './ActionBar.module.scss';

export interface ActionBarProps {
  children: ReactNode;
}

export const ActionBar = ({ children }: ActionBarProps) => {
  return <div className={css.actionBar}>{children}</div>;
};

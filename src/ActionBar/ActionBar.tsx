import React, { ReactNode } from 'react';
import css from './ActionBar.module.scss';

export interface ActionBarProps {
  children: ReactNode;
}

const ActionBar = ({ children }: ActionBarProps) => {
  return <div className={css.actionBar}>{children}</div>;
};

export default ActionBar;

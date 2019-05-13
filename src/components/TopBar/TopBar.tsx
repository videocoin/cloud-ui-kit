import React, { ReactNode } from 'react';
import css from './TopBar.module.scss';

interface TopBarProps {
  children: ReactNode;
}

export const TopBar = ({ children }: TopBarProps) => {
  return <div className={css.bar}>{children}</div>;
};

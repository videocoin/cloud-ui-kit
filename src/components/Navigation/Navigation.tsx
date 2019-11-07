import React, { ReactNode } from 'react';
import cn from 'classnames';
import css from './Navigation.module.scss';
import { NavLink } from './NavLink';
import { Logo } from '../Logo/Logo';
import { Typography } from '../Typography/Typography';

interface NavigationProps {
  children: ReactNode;
  expanded?: boolean;
}

export const Navigation = ({ children, expanded }: NavigationProps) => {
  return (
    <div className={cn(css.nav, expanded && css.expand)}>
      <div className={css.head}>
        <Logo width={48} height={48} type="colorWhite" short />
        <Typography type="body">Videocoin Network</Typography>
      </div>
      <div className={css.links}>{children}</div>
    </div>
  );
};

Navigation.NavLink = NavLink;

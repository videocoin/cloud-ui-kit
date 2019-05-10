import React from 'react';
import cn from 'classnames';
import { Link } from '@reach/router';
import { Icon, IconName } from '../Icon/Icon';
import css from './Navigation.module.scss';
import { Typography } from '../Typography/Typography';

export interface NavItemProps {
  children?: never;
  icon: IconName;
  active?: boolean;
  to: string;
  label: string;
}

export const NavLink = ({ icon, active = false, to, label }: NavItemProps) => {
  const classes = cn({
    [css.item]: true,
    [css.active]: active,
  });
  return (
    <Link to={to} className={classes}>
      <Icon name={icon} width={28} height={28} />
      <Typography type="bodyAlt">{label}</Typography>
    </Link>
  );
};

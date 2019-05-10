import React, { ReactNode } from 'react';
import css from './FieldAction.module.scss';
import cn from 'classnames';
import { Icon, IconName } from '../Icon/Icon';

export interface FieldActionProps {
  color: 'orange' | 'violet' | 'pink' | 'green' | 'grey' | 'white';
  icon: IconName;
  children?: ReactNode;
  className?: string;
}

export const FieldAction = ({
  color,
  icon,
  children,
  className,
}: FieldActionProps) => {
  return (
    <>
      <div className={cn(css.action, css[color], className)}>
        <Icon name={icon} width={24} height={24} />
      </div>
      {children && (
        <div className={css.tooltip}>
          <span>{children}</span>
        </div>
      )}
    </>
  );
};

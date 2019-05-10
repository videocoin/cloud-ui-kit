import React, { ReactNode } from 'react';
import css from './FieldAction.module.scss';
import cn from 'classnames';
import Icon, { IconName } from '../Icon/Icon';

export interface FieldActionProps {
  color: 'orange' | 'violet' | 'pink' | 'green' | 'grey' | 'white';
  icon: IconName;
  children?: ReactNode;
}

const FieldAction = ({ color, icon, children }: FieldActionProps) => {
  return (
    <>
      <div className={cn(css.action, css[color])}>
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

export default FieldAction;

import React from 'react';
import css from './Modal.module.scss';
import { ReactNode } from 'react';

export interface ModalProps {
  header?: () => ReactNode;
  children: ReactNode;
}

export const Modal = ({ header, children }: ModalProps) => {
  return (
    <div className={css.modal}>
      <div className={css.header}>{header && header()}</div>
      <div className={css.body}>{children}</div>
    </div>
  );
};

import React, { ReactNode, SyntheticEvent } from 'react';
import css from './Overlay.module.scss';

export interface OverlayProps {
  children: ReactNode;
  onClick: () => void;
}

export const Overlay = ({ children, onClick }: OverlayProps) => {
  const handleInnerClick = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div className={css.overlay} onClick={onClick}>
      <div onClick={handleInnerClick}>{children}</div>
    </div>
  );
};

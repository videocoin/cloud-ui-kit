import React, { ReactNode, SyntheticEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './Overlay.module.scss';

export interface OverlayProps {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}

const Overlay = ({ active, children, onClick }: OverlayProps) => {
  const handleInnerClick = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <CSSTransition
      unmountOnExit
      in={active}
      classNames={{
        enter: css.enter,
        enterActive: css.enterActive,
        exit: css.leave,
        exitActive: css.leaveActive,
      }}
      timeout={100}
    >
      <div className={css.overlay} onClick={onClick}>
        <div onClick={handleInnerClick}>{children}</div>
      </div>
    </CSSTransition>
  );
};

export default Overlay;

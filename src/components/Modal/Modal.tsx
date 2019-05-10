import React from 'react';
import css from './Modal.module.scss';
import { ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import { Overlay } from '../Overlay/Overlay';

export interface ModalProps {
  header?: () => ReactNode;
  children: ReactNode;
  close: () => void;
  isOpen: boolean;
  shouldOverlayClose?: boolean;
  hideCloseButton?: boolean;
}

export const Modal = ({
  isOpen,
  close,
  header,
  children,
  shouldOverlayClose = true,
  hideCloseButton = true,
}: ModalProps) => {
  const handleClickOverlay = () => {
    if (shouldOverlayClose) {
      close();
    }
  };
  return (
    <Overlay active={isOpen} onClick={handleClickOverlay}>
      <div className={css.modal}>
        {!hideCloseButton && (
          <button className={css.close} type="button" onClick={close}>
            <Icon name="remove" width={20} height={20} />
          </button>
        )}
        <div className={css.header}>{header && header()}</div>
        <div className={css.body}>{children}</div>
      </div>
    </Overlay>
  );
};

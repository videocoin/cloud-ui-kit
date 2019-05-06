import React from 'react';
import css from './Modal.module.scss';
import { ReactNode } from 'react';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import Overlay from '../Overlay/Overlay';

export interface ModalProps {
  header?: ReactNode;
  children: ReactNode;
  close: () => void;
  isOpen: boolean;
  shouldOverlayClose?: boolean;
}

const Modal = ({
  isOpen,
  close,
  header,
  children,
  shouldOverlayClose = true,
}: ModalProps) => {
  const handleClickOverlay = () => {
    if (shouldOverlayClose) {
      close();
    }
  };
  return (
    <Overlay active={isOpen} onClick={handleClickOverlay}>
      <div className={css.modal}>
        <button className={css.close} type="button" onClick={close}>
          <Icon name="close" width={20} height={20} />
        </button>
        {header && (
          <div className={css.header}>
            <Typography type="subtitle">{header}</Typography>
          </div>
        )}
        <div className={css.body}>{children}</div>
      </div>
    </Overlay>
  );
};

export default Modal;

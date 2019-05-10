import { ReactNode } from 'react';
export interface ModalProps {
    header?: () => ReactNode;
    children: ReactNode;
    close: () => void;
    isOpen: boolean;
    shouldOverlayClose?: boolean;
    hideCloseButton?: boolean;
}
declare const Modal: ({ isOpen, close, header, children, shouldOverlayClose, hideCloseButton, }: ModalProps) => JSX.Element;
export default Modal;

import { ReactNode } from 'react';
export interface ModalProps {
    header?: () => ReactNode;
    children: ReactNode;
    close: () => void;
    isOpen: boolean;
    shouldOverlayClose?: boolean;
    hideCloseButton?: boolean;
}
export declare const Modal: ({ isOpen, close, header, children, shouldOverlayClose, hideCloseButton, }: ModalProps) => JSX.Element;

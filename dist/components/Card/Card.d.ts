import { ReactNode } from 'react';
export interface CardProps {
    children: ReactNode;
}
declare const Card: ({ children }: CardProps) => JSX.Element;
export default Card;

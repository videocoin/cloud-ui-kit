import React, { ReactNode } from 'react';
import css from './Card.module.scss';

export interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className={css.card}>{children}</div>
);

export default Card;

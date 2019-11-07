import React from 'react';
import cn from 'classnames';
import css from './SingleSelector.module.scss';
import { Typography } from '../Typography/Typography';
import { Indicator } from '../Indicator/Indicator';

export interface SingleSelectorProps {
  selected: boolean;
  label: string;
  onClick: () => void;
  children?: never;
}

export const SingleSelector = ({
  selected,
  label,
  onClick,
}: SingleSelectorProps) => {
  const classes = cn({
    [css.root]: true,
    [css.selected]: selected,
  });
  return (
    <div className={classes} onClick={onClick}>
      {selected && (
        <div className={css.indicator}>
          <Indicator />
        </div>
      )}
      <Typography type={selected ? 'body' : 'bodyThin'}>{label}</Typography>
    </div>
  );
};

SingleSelector.defaultProps = {};

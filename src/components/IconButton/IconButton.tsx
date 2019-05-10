import React from 'react';
import { Button, ButtonProps } from '../Button/Button';
import { IconName } from '../Icon/Icon';

export interface IconButtonProps {
  icon: IconName;
}

export const IconButton = (props: IconButtonProps & ButtonProps) => (
  <Button {...props} />
);

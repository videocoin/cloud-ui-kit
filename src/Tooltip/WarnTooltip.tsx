import React from 'react';
import Tooltip from './Tooltip';
import Icon from '../Icon/Icon';

export interface WarnTooltip {
  text: string;
  id: string;
  place?: string;
}

export const WarnTooltip = ({ text, place = 'top', ...props }: WarnTooltip) => (
  <Tooltip type="warning" place={place} {...props}>
    <Icon width={20} height={20} name="incomplete" />
    {text}
  </Tooltip>
);

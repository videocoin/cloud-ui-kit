import React from 'react';
import Tooltip from './Tooltip';
import Icon from '../Icon/Icon';

export interface WarnTooltip {
  text: string;
  id: string;
}

export const WarnTooltip = ({ text, id }: WarnTooltip) => (
  <Tooltip id={id} type="warning">
    <Icon width={20} height={20} name="incomplete" />
    {text}
  </Tooltip>
);

import React, { ReactNode } from 'react';
import ReactTooltip from 'react-tooltip';
import './styles.scss';

export interface TooltipProps {
  id: string;
  type: 'warning';
  children: ReactNode;
}

const Tooltip = ({ id, type, children }: TooltipProps) => {
  return (
    <ReactTooltip className="tooltip" id={id} type={type} effect="solid">
      <div>{children}</div>
    </ReactTooltip>
  );
};

export default Tooltip;

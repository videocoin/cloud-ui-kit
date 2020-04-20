import React, { ReactNode } from 'react';
import ReactTooltip from 'react-tooltip';
import './styles.scss';

export interface TooltipProps {
  id: string;
  type: 'warning';
  children: ReactNode;
  place: any;
}

const Tooltip = ({ children, ...props }: TooltipProps) => {
  return (
    <ReactTooltip className="tooltip" effect="solid" {...props}>
      <div>{children}</div>
    </ReactTooltip>
  );
};

export default Tooltip;

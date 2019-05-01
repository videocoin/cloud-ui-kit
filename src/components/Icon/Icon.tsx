import * as React from 'react';
import './symbols.svg';
import { ReactComponent as EmptyIcon } from './icons/empty.svg';

const ICONS: { [name: string]: React.FC<React.SVGProps<SVGElement>> } = {
  empty: EmptyIcon,
};

interface Icon {
  name: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<Icon> = ({ width, height, name }) => {
  const Comp = ICONS[name];
  return <Comp {...width && { width }} {...height && { height }} />;
};

export default Icon;

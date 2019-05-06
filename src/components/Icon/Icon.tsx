import React, { FC, SVGProps } from 'react';
import { ReactComponent as warn } from './icons/warn.svg';
import { ReactComponent as close } from './icons/close.svg';

const ICONS: { [name: string]: FC<SVGProps<SVGElement>> } = {
  warn,
  close,
};

export interface IconProps {
  name: string;
  width?: number;
  height?: number;
}

const Icon = ({ width, height, name }: IconProps) => {
  const Comp = ICONS[name];
  return <Comp {...width && { width }} {...height && { height }} />;
};

export default Icon;

import React, { FC, SVGProps } from 'react';
import { ReactComponent as black } from './logos/black.svg';
import { ReactComponent as blacks } from './logos/blackS.svg';
import { ReactComponent as colorBlack } from './logos/colorBlack.svg';
import { ReactComponent as colorBlacks } from './logos/colorBlackS.svg';
import { ReactComponent as colorWhite } from './logos/colorWhite.svg';
import { ReactComponent as colorWhites } from './logos/colorWhiteS.svg';
import { ReactComponent as white } from './logos/white.svg';
import { ReactComponent as whites } from './logos/whiteS.svg';

const LOGOS: { [name: string]: FC<SVGProps<SVGSVGElement>> } = {
  black,
  blacks,
  colorBlack,
  colorBlacks,
  colorWhite,
  colorWhites,
  white,
  whites,
};

export type LogoType = 'black' | 'white' | 'colorBlack' | 'colorWhite';

export interface LogoProps {
  type?: LogoType;
  short?: boolean;
  width?: number;
  height?: number;
}

const Logo = ({ type, short, width, height }: LogoProps) => {
  const Comp = LOGOS[`${type}${short ? 's' : ''}`];
  return <Comp {...width && { width }} {...height && { height }} />;
};

Logo.defaultProps = {
  type: 'colorBlack',
  short: false,
};

export default Logo;

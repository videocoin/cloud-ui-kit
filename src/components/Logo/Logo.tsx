import * as React from 'react';
import { ReactComponent as black } from './logos/black.svg';
import { ReactComponent as blacks } from './logos/blackS.svg';
import { ReactComponent as colorBlack } from './logos/colorBlack.svg';
import { ReactComponent as colorBlacks } from './logos/colorBlackS.svg';
import { ReactComponent as colorWhite } from './logos/colorWhite.svg';
import { ReactComponent as colorWhites } from './logos/colorWhiteS.svg';
import { ReactComponent as white } from './logos/white.svg';
import { ReactComponent as whites } from './logos/whiteS.svg';

const LOGOS: { [name: string]: React.FC<React.SVGProps<SVGElement>> } = {
  black,
  blacks,
  colorBlack,
  colorBlacks,
  colorWhite,
  colorWhites,
  white,
  whites,
};

type LogoType = 'black' | 'white' | 'colorBlack' | 'colorWhite';

interface Logo {
  type?: LogoType;
  short?: boolean;
  width?: number;
  height?: number;
}

const Logo: React.FC<Logo> = ({ type, short, width, height }) => {
  const Comp = LOGOS[`${type}${short ? 's' : ''}`];
  return <Comp {...width && { width }} {...height && { height }} />;
};

Logo.defaultProps = {
  type: 'colorBlack',
  short: false,
};

export default Logo;

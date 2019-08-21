import React, { FC, SVGProps } from 'react';
import { ReactComponent as account } from './icons/account.svg';
import { ReactComponent as add } from './icons/add.svg';
import { ReactComponent as archive } from './icons/archive.svg';
import { ReactComponent as arrowDown } from './icons/arrowDown.svg';
import { ReactComponent as arrowLeft } from './icons/arrowLeft.svg';
import { ReactComponent as arrowRight } from './icons/arrowRight.svg';
import { ReactComponent as arrowUp } from './icons/arrowUp.svg';
import { ReactComponent as awaitingInput } from './icons/awaitingInput.svg';
import { ReactComponent as back } from './icons/back.svg';
import { ReactComponent as copy } from './icons/copy.svg';
import { ReactComponent as deleteIcon } from './icons/delete.svg';
import { ReactComponent as deposit } from './icons/deposit.svg';
import { ReactComponent as expandMenu } from './icons/expandMenu.svg';
import { ReactComponent as incomplete } from './icons/incomplete.svg';
import { ReactComponent as info } from './icons/info.svg';
import { ReactComponent as livestreamManager } from './icons/livestreamManager.svg';
import { ReactComponent as networkVisualizer } from './icons/networkVisualizer.svg';
import { ReactComponent as offline } from './icons/offline.svg';
import { ReactComponent as payment } from './icons/payment.svg';
import { ReactComponent as pipelines } from './icons/pipelines.svg';
import { ReactComponent as preparing } from './icons/preparing.svg';
import { ReactComponent as placeholderSm } from './icons/placeholderSm.svg';
import { ReactComponent as placeholderXs } from './icons/placeholderXs.svg';
import { ReactComponent as remove } from './icons/remove.svg';
import { ReactComponent as streaming } from './icons/streaming.svg';
import { ReactComponent as VIDToken } from './icons/VIDToken.svg';
import { ReactComponent as videoCoinWallet } from './icons/videoCoinWallet.svg';
import { ReactComponent as withdrawal } from './icons/withdrawal.svg';

const ICONS: { [name: string]: FC<SVGProps<SVGElement>> } = {
  account,
  add,
  archive,
  arrowDown,
  arrowLeft,
  arrowRight,
  arrowUp,
  awaitingInput,
  back,
  copy,
  delete: deleteIcon,
  deposit,
  expandMenu,
  incomplete,
  info,
  livestreamManager,
  networkVisualizer,
  offline,
  payment,
  pipelines,
  preparing,
  placeholderSm,
  placeholderXs,
  remove,
  streaming,
  VIDToken,
  videoCoinWallet,
  withdrawal,
};

export type IconName =
  | 'account'
  | 'add'
  | 'archive'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'awaitingInput'
  | 'back'
  | 'copy'
  | 'delete'
  | 'deposit'
  | 'expandMenu'
  | 'failed'
  | 'incomplete'
  | 'info'
  | 'livestreamManager'
  | 'networkVisualizer'
  | 'offline'
  | 'payment'
  | 'pipelines'
  | 'preparing'
  | 'placeholderSm'
  | 'placeholderXs'
  | 'remove'
  | 'retractMenu'
  | 'streaming'
  | 'VIDToken'
  | 'VIDTokenWhite'
  | 'videoCoinWallet'
  | 'withdrawal';

export interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  children?: never;
  color?: string;
}

export const Icon = ({ width, height, name, color = '#EEE3FF' }: IconProps) => {
  const Comp = ICONS[name];
  return (
    <Comp fill={color} {...width && { width }} {...height && { height }} />
  );
};

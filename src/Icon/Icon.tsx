import React, { FC, SVGProps } from 'react';
import { ReactComponent as account } from './icons/account.svg';
import { ReactComponent as add } from './icons/add.svg';
import { ReactComponent as android } from './icons/android.svg';
import { ReactComponent as apple } from './icons/apple.svg';
import { ReactComponent as archive } from './icons/archive.svg';
import { ReactComponent as arrowDown } from './icons/arrowDown.svg';
import { ReactComponent as arrowLeft } from './icons/arrowLeft.svg';
import { ReactComponent as arrowRight } from './icons/arrowRight.svg';
import { ReactComponent as arrowUp } from './icons/arrowUp.svg';
import { ReactComponent as awaitingInput } from './icons/awaitingInput.svg';
import { ReactComponent as aws } from './icons/aws.svg';
import { ReactComponent as back } from './icons/back.svg';
import { ReactComponent as billing } from './icons/billing.svg';
import { ReactComponent as block } from './icons/block.svg';
import { ReactComponent as copy } from './icons/copy.svg';
import { ReactComponent as dashboard } from './icons/dashboard.svg';
import { ReactComponent as deleteIcon } from './icons/delete.svg';
import { ReactComponent as deposit } from './icons/deposit.svg';
import { ReactComponent as dockerHub } from './icons/dockerHub.svg';
import { ReactComponent as earnings } from './icons/earnings.svg';
import { ReactComponent as email } from './icons/email.svg';
import { ReactComponent as expandMenu } from './icons/expandMenu.svg';
import { ReactComponent as gc } from './icons/gc.svg';
import { ReactComponent as github } from './icons/github.svg';
import { ReactComponent as incomplete } from './icons/incomplete.svg';
import { ReactComponent as info } from './icons/info.svg';
import { ReactComponent as linux } from './icons/linux.svg';
import { ReactComponent as livestream } from './icons/livestream.svg';
import { ReactComponent as livestreamManager } from './icons/livestreamManager.svg';
import { ReactComponent as networkVisualizer } from './icons/networkVisualizer.svg';
import { ReactComponent as offline } from './icons/offline.svg';
import { ReactComponent as payment } from './icons/payment.svg';
import { ReactComponent as pipelines } from './icons/pipelines.svg';
import { ReactComponent as preparing } from './icons/preparing.svg';
import { ReactComponent as placeholderSm } from './icons/placeholderSm.svg';
import { ReactComponent as placeholderXs } from './icons/placeholderXs.svg';
import { ReactComponent as remove } from './icons/remove.svg';
import { ReactComponent as search } from './icons/search.svg';
import { ReactComponent as stream } from './icons/stream.svg';
import { ReactComponent as singleStream } from './icons/singleStream.svg';
import { ReactComponent as streaming } from './icons/streaming.svg';
import { ReactComponent as transaction } from './icons/transaction.svg';
import { ReactComponent as transactions } from './icons/transactions.svg';
import { ReactComponent as trash } from './icons/trash.svg';
import { ReactComponent as VIDToken } from './icons/VIDToken.svg';
import { ReactComponent as videoCoinWallet } from './icons/videoCoinWallet.svg';
import { ReactComponent as videoPlay } from './icons/videoPlay.svg';
import { ReactComponent as windows } from './icons/windows.svg';
import { ReactComponent as withdrawal } from './icons/withdrawal.svg';
import { ReactComponent as web } from './icons/web.svg';
import { ReactComponent as workers } from './icons/workers.svg';
import { ReactComponent as workers2 } from './icons/workers2.svg';

const ICONS: { [name: string]: FC<SVGProps<SVGSVGElement>> } = {
  account,
  add,
  android,
  apple,
  archive,
  arrowDown,
  arrowLeft,
  arrowRight,
  arrowUp,
  awaitingInput,
  aws,
  back,
  billing,
  block,
  copy,
  dashboard,
  delete: deleteIcon,
  deposit,
  dockerHub,
  earnings,
  email,
  expandMenu,
  gc,
  github,
  incomplete,
  info,
  linux,
  livestream,
  livestreamManager,
  networkVisualizer,
  offline,
  payment,
  pipelines,
  preparing,
  placeholderSm,
  placeholderXs,
  remove,
  search,
  stream,
  singleStream,
  streaming,
  transaction,
  transactions,
  trash,
  VIDToken,
  videoCoinWallet,
  videoPlay,
  web,
  windows,
  withdrawal,
  workers,
  workers2,
};

export type IconName =
  | 'account'
  | 'add'
  | 'android'
  | 'apple'
  | 'archive'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'awaitingInput'
  | 'aws'
  | 'back'
  | 'billing'
  | 'block'
  | 'copy'
  | 'dashboard'
  | 'delete'
  | 'deposit'
  | 'dockerHub'
  | 'earnings'
  | 'email'
  | 'expandMenu'
  | 'gc'
  | 'github'
  | 'failed'
  | 'incomplete'
  | 'info'
  | 'linux'
  | 'livestream'
  | 'livestreamManager'
  | 'networkVisualizer'
  | 'offline'
  | 'payment'
  | 'pipelines'
  | 'preparing'
  | 'placeholderSm'
  | 'placeholderXs'
  | 'remove'
  | 'search'
  | 'stream'
  | 'singleStream'
  | 'retractMenu'
  | 'streaming'
  | 'transaction'
  | 'transactions'
  | 'trash'
  | 'VIDToken'
  | 'VIDTokenWhite'
  | 'videoCoinWallet'
  | 'videoPlay'
  | 'web'
  | 'windows'
  | 'withdrawal'
  | 'workers'
  | 'workers2';

export interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  children?: never;
  color?: string;
}

const Icon = ({ width, height, name, color = '#EEE3FF' }: IconProps) => {
  const Comp = ICONS[name];
  return (
    <Comp fill={color} {...(width && { width })} {...(height && { height })} />
  );
};

export default Icon;

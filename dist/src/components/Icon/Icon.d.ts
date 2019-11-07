/// <reference types="react" />
export declare type IconName = 'account' | 'add' | 'archive' | 'arrowDown' | 'arrowLeft' | 'arrowRight' | 'arrowUp' | 'awaitingInput' | 'back' | 'block' | 'copy' | 'dashboard' | 'delete' | 'deposit' | 'expandMenu' | 'failed' | 'incomplete' | 'info' | 'livestreamManager' | 'networkVisualizer' | 'offline' | 'payment' | 'pipelines' | 'preparing' | 'placeholderSm' | 'placeholderXs' | 'remove' | 'search' | 'stream' | 'retractMenu' | 'streaming' | 'transaction' | 'transactions' | 'VIDToken' | 'VIDTokenWhite' | 'videoCoinWallet' | 'withdrawal';
export interface IconProps {
    name: IconName;
    width?: number;
    height?: number;
    children?: never;
    color?: string;
}
export declare const Icon: ({ width, height, name, color }: IconProps) => JSX.Element;

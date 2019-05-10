export declare type IconName = 'account' | 'add' | 'archive' | 'arrowDown' | 'arrowUp' | 'awaitingInput' | 'back' | 'copy' | 'delete' | 'deposit' | 'expandMenu' | 'failed' | 'incomplete' | 'livestreamManager' | 'networkVisualizer' | 'offline' | 'payment' | 'preparing' | 'placeholderSm' | 'placeholderXs' | 'remove' | 'retractMenu' | 'streaming' | 'VIDToken' | 'VIDTokenWhite' | 'videoCoinWallet' | 'withdrawal';
export interface IconProps {
    name: IconName;
    width?: number;
    height?: number;
    children?: never;
    color?: string;
}
export declare const Icon: ({ width, height, name, color }: IconProps) => JSX.Element;

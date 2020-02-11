export declare type IconName = 'account' | 'add' | 'apple' | 'archive' | 'arrowDown' | 'arrowLeft' | 'arrowRight' | 'arrowUp' | 'awaitingInput' | 'aws' | 'back' | 'block' | 'copy' | 'dashboard' | 'delete' | 'deposit' | 'expandMenu' | 'gc' | 'failed' | 'incomplete' | 'info' | 'linux' | 'livestreamManager' | 'networkVisualizer' | 'offline' | 'payment' | 'pipelines' | 'preparing' | 'placeholderSm' | 'placeholderXs' | 'remove' | 'search' | 'stream' | 'retractMenu' | 'streaming' | 'transaction' | 'transactions' | 'trash' | 'VIDToken' | 'VIDTokenWhite' | 'videoCoinWallet' | 'videoPlay' | 'windows' | 'withdrawal' | 'workers' | 'workers2';
export interface IconProps {
    name: IconName;
    width?: number;
    height?: number;
    children?: never;
    color?: string;
}
export declare const Icon: ({ width, height, name, color }: IconProps) => JSX.Element;

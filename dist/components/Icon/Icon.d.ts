/// <reference types="react" />
export declare type IconName = 'warn' | 'close';
export interface IconProps {
    name: IconName;
    width?: number;
    height?: number;
    children?: never;
}
declare const Icon: ({ width, height, name }: IconProps) => JSX.Element;
export default Icon;

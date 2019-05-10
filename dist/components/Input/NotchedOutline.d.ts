/// <reference types="react" />
export interface NotchedOutlineProps {
    notched: boolean;
    labelWidth: number;
    filled: boolean;
    error: boolean;
    children?: never;
}
declare const NotchedOutline: ({ notched, labelWidth, filled, error, }: NotchedOutlineProps) => JSX.Element;
export default NotchedOutline;

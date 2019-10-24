export declare type LogoType = 'black' | 'white' | 'colorBlack' | 'colorWhite';
export interface LogoProps {
    type?: LogoType;
    short?: boolean;
    width?: number;
    height?: number;
}
export declare const Logo: {
    ({ type, short, width, height }: LogoProps): JSX.Element;
    defaultProps: {
        type: string;
        short: boolean;
    };
};

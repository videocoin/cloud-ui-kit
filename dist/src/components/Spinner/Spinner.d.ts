/// <reference types="react" />
export interface SpinnerProps {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'fixed' | 'inline';
}
export declare const Spinner: {
    ({ type, size }: SpinnerProps): JSX.Element;
    defaultProps: {
        size: string;
    };
};

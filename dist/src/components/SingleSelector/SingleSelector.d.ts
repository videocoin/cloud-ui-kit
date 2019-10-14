export interface SingleSelectorProps {
    selected: boolean;
    label: string;
    onClick: () => void;
    children?: never;
}
export declare const SingleSelector: {
    ({ selected, label, onClick, }: SingleSelectorProps): JSX.Element;
    defaultProps: {};
};

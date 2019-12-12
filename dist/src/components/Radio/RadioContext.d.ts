import { ChangeEvent } from 'react';
export interface RadioContextInterface {
    defaultSelected: string;
    selected: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}
export declare const RadioContext: import("react").Context<Partial<RadioContextInterface>>;
export declare const RadioContextProvider: import("react").Provider<Partial<RadioContextInterface>>;

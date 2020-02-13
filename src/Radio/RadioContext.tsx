import { ChangeEvent, createContext } from 'react';

export interface RadioContextInterface {
  defaultSelected: string;
  selected: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const RadioContext = createContext<Partial<RadioContextInterface>>({});
export const RadioContextProvider = RadioContext.Provider;

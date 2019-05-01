import * as React from 'react';

export interface RadioContextInterface {
  defaultSelected: string;
  selected: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const RadioContext = React.createContext<Partial<RadioContextInterface>>(
  {},
);
export const RadioContextProvider = RadioContext.Provider;

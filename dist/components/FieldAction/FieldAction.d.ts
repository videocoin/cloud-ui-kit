import { ReactNode } from 'react';
import { IconName } from '../Icon/Icon';
export interface FieldActionProps {
    color: 'orange' | 'violet' | 'pink' | 'green' | 'grey' | 'white';
    icon: IconName;
    children?: ReactNode;
}
declare const FieldAction: ({ color, icon, children }: FieldActionProps) => JSX.Element;
export default FieldAction;

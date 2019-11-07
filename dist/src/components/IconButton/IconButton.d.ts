import { ButtonProps } from '../Button/Button';
import { IconName } from '../Icon/Icon';
export interface IconButtonProps {
    icon: IconName;
}
export declare const IconButton: (props: IconButtonProps & ButtonProps) => JSX.Element;

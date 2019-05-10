/// <reference types="react" />
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Checkbox from './components/Checkbox/Checkbox';
import FieldAction from './components/FieldAction/FieldAction';
import Grid from './components/Grid/Grid';
import Icon from './components/Icon/Icon';
import Input from './components/Input/Input';
import Logo from './components/Logo/Logo';
import Modal from './components/Modal/Modal';
import Radio from './components/Radio/Radio';
import Typography from './components/Typography/Typography';
export { Button, Card, Checkbox, FieldAction, Grid, Icon, Input, Logo, Modal, Radio, Typography, };
declare const _default: {
    Button: {
        ({ theme, size, type, href, isBlock, ...props }: import("./components/Button/Button").ButtonProps): JSX.Element;
        defaultProps: {
            theme: string;
            size: string;
            type: string;
            href: string;
            disabled: boolean;
        };
    };
    Card: ({ children }: import("./components/Card/Card").CardProps) => JSX.Element;
    Checkbox: ({ checked, onChange, children, ...props }: import("./components/Checkbox/Checkbox").CheckboxProps) => JSX.Element;
    FieldAction: ({ color, icon, children }: import("./components/FieldAction/FieldAction").FieldActionProps) => JSX.Element;
    Grid: {
        ({ container, item, zeroMinWidth, spacing, direction, wrap, alignItems, alignContent, justify, xs, sm, md, lg, xl, children, }: import("./components/Grid/Grid").GridProps): JSX.Element;
        propTypes: {};
        defaultProps: {
            alignContent: string;
            alignItems: string;
            component: string;
            container: boolean;
            direction: string;
            item: boolean;
            justify: string;
            lg: boolean;
            md: boolean;
            sm: boolean;
            spacing: number;
            wrap: string;
            xl: boolean;
            xs: boolean;
            zeroMinWidth: boolean;
        };
    };
    Icon: ({ width, height, name }: import("./components/Icon/Icon").IconProps) => JSX.Element;
    Input: {
        ({ label, disabled, onFocus, onBlur, value, error, postfix, ...props }: import("./components/Input/Input").InputProps): JSX.Element;
        defaultProps: {
            disabled: boolean;
            error: boolean;
        };
    };
    Logo: {
        ({ type, short, width, height }: import("./components/Logo/Logo").LogoProps): JSX.Element;
        defaultProps: {
            type: string;
            short: boolean;
        };
    };
    Modal: ({ isOpen, close, header, children, shouldOverlayClose, hideCloseButton, }: import("./components/Modal/Modal").ModalProps) => JSX.Element;
    Radio: {
        ({ defaultSelected, name, onChange, disabled, children, direction, }: import("./components/Radio/Radio").RadioGroupProps): JSX.Element;
        defaultProps: {
            direction: string;
            disabled: boolean;
        };
        RadioBtn: ({ value, children, disabled }: import("./components/Radio/RadioBtn").RadioBtnProps) => JSX.Element;
    };
    Typography: {
        ({ tagName: Comp, type, theme, className, ...props }: import("./components/Typography/Typography").TypographyProps): JSX.Element;
        defaultProps: {
            tagName: string;
            type: string;
            theme: string;
        };
    };
};
export default _default;

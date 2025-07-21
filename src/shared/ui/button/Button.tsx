import classNames from "classnames";
import css from "./button.module.scss";
import { ButtonHTMLAttributes, FC, HTMLAttributes, MouseEvent, ReactNode } from "react";

type ButtonProps = {
    buttonTitle?: string;
    buttonText: ReactNode;
    onClick?: (() => void) | ((e: MouseEvent<HTMLButtonElement>) => void);
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    className?: string;
    style?: HTMLAttributes<HTMLButtonElement>["style"];
    type?: "button" | "submit";
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
    buttonTitle,
    buttonText,
    onClick,
    onMouseEnter,
    onMouseLeave,
    className,
    style,
    type = "button",
    ...props
}) => {
    return (
        <button
            className={classNames(css.button, className)}
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            type={type}
            title={buttonTitle}
            {...props}
        >
            {buttonText}
        </button>
    );
};

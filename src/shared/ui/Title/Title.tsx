import { CSSProperties } from 'react';
import css from './title.module.scss';
import classnames from 'classnames';

type Props = {
    title: string
    className?: string;
    children?: React.ReactNode;
    fontSize?: CSSProperties['fontSize'];
    textAlign?: CSSProperties['textAlign'];
}

export const Title = ({ title, className, children, fontSize, textAlign }: Props) => {
    return (
        <div className={classnames(css.root, className)} style={{ textAlign }}>
            <div className={css.title} style={{ fontSize }}>
                {title}
            </div>
            {children}
        </div>
    )
}
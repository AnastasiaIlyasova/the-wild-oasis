import css from './textBlock.module.scss';

type Props = {
    text: string
    className?: string;
}

export const TextBlock = ({ text, className }: Props) => {
    return (
        <div className={className}>
            <div className={css.text}>
                {text}
            </div>
        </div>
    )
}
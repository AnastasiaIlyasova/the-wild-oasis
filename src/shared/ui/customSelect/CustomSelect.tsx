import {useState, useRef, useEffect, FC, Dispatch, SetStateAction} from "react";
import styles from "./customSelect.module.scss";

type CustomSelectProps = {
    options: string[];
    placeholder: string;
    onChange: Dispatch<SetStateAction<string>>;
}

export const CustomSelect:FC<CustomSelectProps> = ({ options, placeholder, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(placeholder);
    const selectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleOpen = () => setIsOpen((prev) => !prev);

    const onSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);

        if (onChange) {
            onChange(option);
        }
    };

    return (
        <div ref={selectRef} className={styles.custom_select}>
            <div
                className={`${styles.select_selected} ${isOpen ? styles.active : ""}`}
                onClick={toggleOpen}
            >
                {selected}
            </div>

            {isOpen && (
                <div className={styles.select_items}>
                    {options.map((option, idx) => (
                        <div
                            key={idx}
                            className={`${styles.option} ${selected === option ? styles.selected : ""}`}
                            onClick={() => onSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
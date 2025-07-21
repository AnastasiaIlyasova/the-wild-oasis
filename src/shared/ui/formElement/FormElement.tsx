import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { Button } from "../button"
import { CustomSelect } from "../customSelect"
import css from "./formElement.module.scss"

type FormElementProps = {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    options: string[];
    placeholderSelect: string;
    placeholderTextArea: string;
    onChangeSelect: Dispatch<SetStateAction<string>>;
    onChangeTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    additionalComments: string;
    buttonText: string;
    error?: string;
}

export const FormElement = ({ onSubmit, options, placeholderSelect, placeholderTextArea, onChangeSelect, onChangeTextArea, additionalComments, buttonText, error }: FormElementProps) => {
    return (
        <form className={css.form} onSubmit={onSubmit}>
            <div>
                <p>How many guests?</p>

                <CustomSelect options={options} placeholder={placeholderSelect} onChange={onChangeSelect}/>
            </div>

            <div>
                <p>Anything we should know about your stay?</p>

                <textarea
                    value={additionalComments}
                    onChange={onChangeTextArea}
                    className={css.textarea_custom}
                    placeholder={placeholderTextArea}
                />
            </div>

             <div className={css.form__actions}>
                <Button type='submit' buttonText={buttonText} className={css.button__submit}/>

                {error &&  (
                    <div className={css.error}>
                        {error}
                    </div>
                )}
            </div>
        </form>
    )
}
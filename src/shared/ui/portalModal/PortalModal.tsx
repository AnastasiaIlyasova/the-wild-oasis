import {ReactNode, useEffect} from 'react';
import css from './portalModal.module.scss'
import { createPortal } from 'react-dom'
import {CloseIcon} from "../../icons";

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
};

const modalRoot = document.getElementById('modal-root');

export default function Modal({ children, onClose }: ModalProps) {
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot?.appendChild(el);

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleEsc);
        return () => {
            modalRoot?.removeChild(el);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [el, onClose]);

    return createPortal(
        <div className={css.modal__backdrop} onClick={onClose}>
            <div className={css.modal__content} onClick={(e) => e.stopPropagation()}>
                <div onClick={onClose} className={css.close__icon}>
                    <CloseIcon/>
                </div>
                {children}
            </div>
        </div>,
        el
    );
}

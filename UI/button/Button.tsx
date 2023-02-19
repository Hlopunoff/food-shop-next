import {FC} from 'react';

import s from './button.module.scss';

interface IButtonProps {
    text: string;
    type: "product" | "article";
}

export const Button:FC<IButtonProps> = ({text, type}) => {
    let btnClassName = `${s['btn']} `;

    switch (type) {
        case "product":
            btnClassName += s["btn_product"];
            break;
        case "article":
            btnClassName += s["btn_article"];
            break;
        default:
            break;
    }

    return (
        <button
        className={btnClassName}
        >
            {text}
        </button>
    );
};
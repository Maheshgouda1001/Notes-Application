import { on } from "events";
import React from "react";
import { ReactNode } from "react";
import { MouseEventHandler } from "react";

const Button = ({className,onClick,children}:{className?:string;onClick:MouseEventHandler<HTMLButtonElement>, children:ReactNode}) => {
    return (
        <button className={`btn px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 block place-self-center ${className}`}
        onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
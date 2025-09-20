import { ReactNode } from "react";

const Card = ({children}:{children:ReactNode}) => {
    return (
        <div className="card p-8 shadow-md rounded-lg bg-white w-fit">
            {children}
        </div>
    );
};

export default Card;
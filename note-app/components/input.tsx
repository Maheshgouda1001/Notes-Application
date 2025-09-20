import { ChangeEventHandler } from "react";

const Input = ({
    name,
    type = "text",
    placeholder = "Enter text",
    onChange,
    value,
    className
}:{name: string;
    type?: string;
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
    className:string;
}) => {
  return <input className={`border-2 border-gray-300 rounded-md pl-1 ${className}`} 
  type={type} value={value} name={name}
  onChange={onChange} placeholder={placeholder}/>;
}

export default Input;
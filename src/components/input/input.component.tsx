import React, { useRef } from 'react';
import './input.component.scss';

interface IInputProps {
    placeholder?: string;
    onSubmit: (todo: string) => void;
}

const Input = ({ placeholder = 'Enter todo here', onSubmit }: IInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if (inputRef.current !== null) {
            onSubmit(inputRef.current.value);
            inputRef.current.value = '';
        }
    }

    return (<div className={'input-component'}>
        <input ref={inputRef} placeholder={placeholder}/>
        <button onClick={handleClick}>Submit</button>
    </div>);
}

export default Input;

import React from 'react';
import './input.component.scss';

const Input = () => {
    return (<div className={'input-component'}>
        <input placeholder={'Enter todo here'}/>
        <button>Submit</button>
    </div>);
}

export default Input;

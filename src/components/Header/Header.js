import React from "react";
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { incValue, decValue, setValue } from '../../redux/counterSlice';
import { setInput } from '../../redux/inputSlice';

export default function Header() {
    const counter = useSelector(state => state.counter.value);
    const input = useSelector(state => state.input.value);
    const dispatch = useDispatch();

    const handleNumberChange = (evt) => {
        dispatch(setInput(evt.target.value));
    }

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            dispatch(setValue(Number(input)));
            dispatch(setInput(''));
        }
    }

    const handlePlusBtn = () => {
        dispatch(incValue());
    }

    const handleMinusBtn = () => {
        dispatch(decValue());
    }

    return (
        <div className="header">
            <h1 className="header__title">Header</h1>
            <div className="header__fields">                
                <input 
                    type="Number" 
                    value={input}
                    className="header__input" 
                    placeholder="Please input header value" 
                    onChange={handleNumberChange}
                    onKeyDown={handleKeyDown}
                />
                <button type="Button" className="header__button" onClick={handlePlusBtn}>+</button>
                <p className="header__value">{counter}</p>
                <button type="Button" className="header__button" onClick={handleMinusBtn}>-</button>
            </div>
        </div>
    )
}
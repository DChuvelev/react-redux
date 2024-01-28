import React from "react";
import './Header.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec, set } from '../../redux/counterSlice';

export default function Header() {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const [ number, setNumber ] = useState(0);

    const handleNumberChange = (evt) => {
        setNumber(evt.target.value);
    }

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            dispatch(set(Number(number)));
            setNumber("");
        }
    }

    const handlePlusBtn = () => {
        dispatch(inc());
    }

    const handleMinusBtn = () => {
        dispatch(dec());
    }

    return (
        <div className="header">
            <h1 className="header__title">Header</h1>
            <div className="header__fields">                
                <input 
                    type="Number" 
                    value={number}
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
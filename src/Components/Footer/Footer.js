import React from 'react';
import {useDispatch} from "react-redux";

import css from './Footer.module.css'
import {setPage} from "../../store/slice";

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.footer}>
            <button className={css.btn} onClick={() => dispatch(setPage({data: 'prev'}))}>previous Page</button>
            <button className={css.btn} onClick={() => dispatch(setPage({data: 'first'}))}> go to start</button>
            <button className={css.btn} onClick={() => dispatch(setPage({data: 'next'}))}> next Page</button>
        </div>
    );
};

export {Footer};
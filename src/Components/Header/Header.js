import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {changeTheme, setGenre, setPage} from "../../store/slice";
import css from './Header.module.css'

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.header}>
            <div className={css.userBlock}>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="user" className={css.userImage}/>
                <span>User name: 2123312</span>
            </div>
            <div className={css.linksBlock}>
                <NavLink to='/movie'
                         onClick={() => {
                             dispatch(setGenre({data: ''}))
                             dispatch(setPage({data: 'first'}))
                         }} className={css.linkForPage}>
                    MOVIE
                </NavLink>
            </div>
            <div className={css.btnBlock}>
                <button className={css.btn} onClick={() => dispatch(changeTheme())}>change theme</button>
            </div>
        </div>
    );
};

export {Header};
import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, GenreBadge, Header} from "../Components";
import css from './MoviesPage.module.css'
import {useSelector} from "react-redux";

const MoviesPage = () => {
    const {theme} = useSelector(state => state.pages)
    return (
        <div>
            <Header/>
            <div className={theme ? css.mainContentDark : css.mainContentWhite}>
                <GenreBadge/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export {MoviesPage};
import React from 'react';
import {Footer, GenreBadge, Header} from "../Components";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <GenreBadge/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MoviesPage};
import React from 'react';
import {Header} from "../Components";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};
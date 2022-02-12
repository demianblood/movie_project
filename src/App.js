import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MovieInfo, MoviesList, MoviesListCard} from "./Components";
import {MoviesPage, NotFoundPage} from "./Pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MoviesPage/>}>
                    <Route index element={<MoviesList/>}/>
                    <Route path='movie' element={<MoviesList/>}>
                        <Route path=':id' element={<MoviesListCard/>}/>
                    </Route>
                    <Route path='movie/:id/info/' element={<MovieInfo/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>

                </Route>

            </Routes>
        </div>
    );
};

export {App};
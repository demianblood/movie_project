import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MoviesList.module.css'
import {getAllMovies} from "../../store/slice";
import {MoviesListCard} from "../MovieListCard/MoviesListCard";


const MoviesList = () => {
    const {movies} = useSelector(state => state.movies);
    const {page} = useSelector(state => state.pages);
    const {genre} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(page));
    }, [page, genre]);


    return (
        <div>
            <div className={css.page}>
                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>

            <Outlet/>
        </div>
    );
};

export {MoviesList};
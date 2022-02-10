import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import css from './MoviesList.module.css'
import {getAllMovies, setPage} from "../../store/slice";
import {MoviesListCard} from "../MovieListCard/MoviesListCard";


const MoviesList = () => {
    const {movies, page} = useSelector(state => state.movies);
    const {handleSubmit, register} = useForm()
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllMovies(page));
    }, [page]);


    return (
        <div>
            <div>
                <button onClick={() => dispatch(setPage({data: 'prev'}))}>previous Page</button>
                <button onClick={() => dispatch(setPage({data: 'next'}))}> next Page</button>
                <button onClick={() => dispatch(setPage({data: 'first'}))}> go to start</button>
            </div>
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
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieById} from "../../store/slice";
import baseImageURL from "../../urls/baseUrls/baseImageURL";
import css from './MovieInfo.module.css'

const MovieInfo = () => {
    const {movie} = useSelector(state => state.movies);
    const {original_title, poster_path, overview, production_companies, genres} = movie
    const [img, setImg] = useState('');

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieById({id}));
        setImg(baseImageURL + 'w500' + poster_path)
    }, [poster_path])
    return (
        <div>
            <div className={css.movieBox}>
                <img src={img} alt={original_title}/>
                <div>
                    <h4>{original_title}</h4>
                    <p>{overview}</p>
                    <ul>
                        Companies:
                        {production_companies?.map(comp => <li key={comp.id}>{comp.name}</li>)}
                    </ul>
                    <div>
                        Genres:
                        {genres?.map(genre => <li key={genre.id}>{genre.name}</li>)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export {MovieInfo};
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieById} from "../../store/slice";
import baseImageURL from "../../urls/baseUrls/baseImageURL";
import css from './MovieInfo.module.css'

const MovieInfo = () => {
    const {movie} = useSelector(state => state.movies);
    const {theme} = useSelector(state => state.pages);
    const {original_title, poster_path, overview, production_companies, genres,budge,status} = movie;

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
                <div><img src={img} alt={original_title} className={css.image}/></div>
                <div className={css.movieInformationBox}>
                    <h1 className={theme ? css.darkTheme : css.whiteTheme}>{original_title}</h1>
                    <h5 className={theme ? css.darkTheme : css.whiteTheme}>{status}</h5>
                    <div className={css.someProductInfo}>
                        <div className={theme ? css.darkTheme : css.whiteTheme}>
                            Companies:
                            {production_companies?.map(comp => <li key={comp.id}>{comp.name}. Country:{comp.origin_country}</li>)}
                        </div>
                        <div className={theme ? css.darkTheme : css.whiteTheme}>
                            Genres:
                            {genres?.map(genre => <li key={genre.id}>{genre.name}</li>)}
                        </div>
                    </div>
                    <p className={theme ? css.darkTheme : css.whiteTheme}>
                        <h4>About movie:</h4>
                        {overview}
                        <span>{budge}</span>
                    </p>

                </div>
            </div>

        </div>
    );
};

export {MovieInfo};
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './MovieListCard.module.css'
import baseImageURL from "../../urls/baseUrls/baseImageURL";


const MoviesListCard = ({movie}) => {
    const {id, backdrop_path, title, release_date, vote_average, overview} = movie;
    const {theme} = useSelector(state => state.pages)
    const [img, setImg] = useState('');

    useEffect(() => {
        setImg(baseImageURL + 'w500' + backdrop_path);
    }, [])
    return (
        <div>
            <div className={css.movie}>
                <div>
                    <img src={img} alt={title} className={css.image}/>
                </div>
                <div className={css.box}>
                    <div className={css.boxInfo}>
                        <div className={(theme ? css.infoColorDarkTheme : css.info)}>
                            <h3>{title}</h3>
                            <div className={css.padding}>Release data :{release_date}</div>
                            <div className={css.padding}>Rating :{vote_average}</div>
                        </div>
                        <Link to={`/movie/${id}/info`} className={css.linkBox}>
                            <button className={css.btn}>Get more information</button>
                        </Link>
                    </div>

                    <div className={(theme ? css.infoColorDarkTheme : css.info)}>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export {MoviesListCard};
import React, {useEffect, useState} from 'react';

import css from './MovieListCard.module.css'
import baseImageURL from "../../urls/baseUrls/baseImageURL";
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {id, backdrop_path, title, release_date, vote_average} = movie
    const [img, setImg] = useState('');

    useEffect(() => {
        setImg(baseImageURL + 'w500' + backdrop_path)
    }, [])
    return (
        <div>
            <div className={css.movie}>
                <div>
                    <img src={img} alt={title}/>
                </div>
                <div className={css.box}>
                    <div className={css.info}>
                        <h3>{title}</h3>
                        <div>Release data :{release_date}</div>
                        <div>Rating :{vote_average}</div>
                    </div>
                    <div>
                        <h4>Get more information</h4>
                        <Link to={`/movie/${id}/info`}>
                            <button>Go to info page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export {MoviesListCard};
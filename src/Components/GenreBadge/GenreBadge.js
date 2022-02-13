import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllGenres, setGenre} from "../../store/slice";
import css from './GenreBarge.module.css'

const GenreBadge = () => {
    const {allGenres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, []);

    return (
        <div className={css.genreBox}>
            {
                allGenres.map(genre =>
                    <button key={genre.id}
                            onClick={() => {
                                dispatch(setGenre({data: genre.id.toString()}))
                            }}
                            className={css.btnLink}>{genre.name}</button>)
            }
        </div>
    );
};

export {GenreBadge};
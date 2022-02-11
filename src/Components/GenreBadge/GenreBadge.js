import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres, setGenre, setPage} from "../../store/slice";

const GenreBadge = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [])
    return (
        <div>
            {
                genres.map(genre =>
                    <button key={genre.id}
                            onClick={() => {
                                dispatch(setGenre({data: genre.id.toString()}))
                                dispatch(setPage({data: 1}))
                            }}>{genre.name}</button>)
            }
        </div>
    );
};

export {GenreBadge};
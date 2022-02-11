import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setGenre, setPage} from "../../store/slice";

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <NavLink to='/movie'
                     onClick={() => {
                         dispatch(setGenre({data: ''}))
                         dispatch(setPage({data: 'first'}))
                     }}>
                MOVIE
            </NavLink>
        </div>
    );
};

export {Header};
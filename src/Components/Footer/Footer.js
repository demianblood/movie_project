import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Footer.module.css'
import {setPage} from "../../store/slice";

const Footer = () => {
    const {page, totalPages} = useSelector(state => state.pages);
    const dispatch = useDispatch();
    const linkPage = [];
    return (
        <div>
            {
                linkPage.map((link, index) => <span key={index} className={page == link ? css.thisPage : css.page}
                                                    onClick={() => dispatch(setPage({
                                                        data: link,
                                                        type: 'clickPage'
                                                    }))}>{link}</span>)}
        </div>
    );
};

export {Footer};
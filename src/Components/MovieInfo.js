import React, {useRef} from 'react';
import {useParams} from "react-router-dom";

const MovieInfo = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            MovieInfo

        </div>
    );
};

export {MovieInfo};
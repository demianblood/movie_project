import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to='/movie'>To main page</NavLink>

        </div>
    );
};

export {Header};
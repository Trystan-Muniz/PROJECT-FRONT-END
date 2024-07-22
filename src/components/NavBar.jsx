import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <h1>GameFo</h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/games/addgames">Add Games</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
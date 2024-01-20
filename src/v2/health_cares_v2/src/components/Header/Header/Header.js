import React, { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import { UserContext } from '../../Home/UserContext';

const Header = () => {
    const user_id = useContext(UserContext);
    console.log("Header " + user_id);
    return (
        <>
            <NavBar></NavBar>
        </>
    );
};

export default Header;
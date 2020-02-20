import React, { useContext } from 'react';
import { SharkContext } from '../SharkContext/SharkContext';

const Nav = (props) => {
    const [sharks, setSharks] = useContext(SharkContext);

    return (
        <div>
            <nav>
                <h3>Tanner</h3>
                <h1>SHARKS</h1>
                <p><a href="#">List of Sharks: {sharks.length}</a></p>
            </nav>
        </div>
    )
}

export default Nav
import React, { useState, useContext } from 'react';
import Shark from '../Shark/Shark';
import {SharkContext} from  '../SharkContext/SharkContext';

const SharkList = () => {
    const [sharks, setSharks] = useContext(SharkContext)
    return (
        <div>
            {sharks.map((shark,id) => (
                <Shark shark={shark} key={id}/>
            ))}
        </div>
    );
}

export default SharkList
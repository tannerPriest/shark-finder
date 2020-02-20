import React, {useState, createContext} from 'react';

export const SharkContext = createContext();

export const SharkProvider = (props) => {
    const [sharks, setSharks] = useState([
        {
            species: "Great White Shark",
            color: "Grey and White",
            fav_food: "Seals"
        },
        {
            species: "Mako Shark",
            color: "Blue and White",
            fav_food: "Tuna"
        },
        {
            species: "Great Hammerhead Shark",
            color: "Brown and White",
            fav_food: "Rays"
        },
        {
            species: "Tiger Shark",
            color: "Brown, White, and Black Strips",
            fav_food: "Sea Turtles"
        }
    ]);
    return(
        <SharkContext.Provider value={[sharks, setSharks]}>
            {props.children}
        </SharkContext.Provider>
    )
}


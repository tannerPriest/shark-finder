import React from "react";
import SharkList from "../Shark_List/Shark_list"

const Shark = ({ shark }) => (
    <div>
        <h3>{shark.species}</h3>
        <p>Color: {shark.color}</p>
        <p>Favorite Food: {shark.fav_food}</p>
    </div>
)

export default Shark;
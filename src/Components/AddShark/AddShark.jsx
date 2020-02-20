import React, {useState} from 'react';
import { useContext } from 'react';
import { SharkContext } from '../SharkContext/SharkContext';

 const AddShark = (props) => {
    const [species, setSpecies] = useState('');
    const [color, setColor] = useState('');
    const [fav_food, setFood] = useState('');
    const [sharks, setSharks] = useContext(SharkContext)

    const newSpecies = (e) => {
        setSpecies(e.target.value);
    }
    const newColor = (e) => {
        setColor(e.target.value);
    }
    const newFood = (e) => {
        setFood(e.target.value);
    }
    const addShark = (e) => {
        e.preventDefault();
        setSharks(prevSharks => [...prevSharks, {species: species, color: color, fav_food: fav_food}])
        setSpecies('');
        setColor('');
        setFood('');
    }
    return(
        <form onSubmit={addShark}>
            <input type="text" name="species"  placeholder="Species" value={species} onChange={newSpecies}/>
            <input type="text" name="color" placeholder="Color" value={color} onChange={newColor}/>
            <input type="text" name="fav_food" placeholder="Favorite Food" value={fav_food} onChange={newFood}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddShark;
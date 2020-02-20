import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import SharkList from "./Components/Shark_List/Shark_list";
import AddShark from "./Components/AddShark/AddShark"
import { SharkProvider } from './Components/SharkContext/SharkContext';

function App() {
  return (
    <SharkProvider>
      <div className="App">
        <Nav />
        <SharkList />
        <AddShark />
      </div>
    </SharkProvider>
  );
}

export default App;

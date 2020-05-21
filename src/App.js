import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
    "Buenos Aires,ar",
    "Mexico,mex",
    "Bogota,col",
    "Lima,pe"
]

function App() {
    return (
        <div className="App">
            <LocationList cities={cities} />
        </div>
    );
}

export default App;

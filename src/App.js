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

    const handleSelectedLocation = city => {
        console.log("->", city)
    }

    return (
        <div className="App">
            <LocationList cities={cities} onSelectedLocation={handleSelectedLocation} />
        </div>
    );
}

export default App;

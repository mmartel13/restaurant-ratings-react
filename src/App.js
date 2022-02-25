import { Rating } from '@mui/material';
import React from 'react';
import './App.css';
import Restaurants from './components/Restaurants';
import BasicRating from './components/Ratings'

function App() {
  return (
    <div>
    <h1>Restaurants</h1>
    <Restaurants/>
    </div>
  );
}

export default App;

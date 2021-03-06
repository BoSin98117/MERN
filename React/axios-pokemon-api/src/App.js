import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <ul>
        {
          pokemon.map((pokemonObj, index)=>{
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;

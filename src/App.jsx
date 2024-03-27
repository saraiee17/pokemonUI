import { useState,useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        setPokemon(data.results)
      })
      .catch((error) => console.log(error));
    },[]);

  return (
    <>
    <p>POKEMON</p>
    {pokemon.map((poke,index) => (
       <Card poke={poke} index={index} key={index}/>
      ))}
    </>
  )
}

export default App

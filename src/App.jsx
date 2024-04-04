import { useState,useEffect, createContext } from 'react'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
import { Grid, Button } from '@mui/material';

function App() {
  const [pokemon, setPokemon] = useState([])
  const SquadContext = createContext();

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
    <Nav/>
    <div className='cardHolder'>
    <Grid container spacing={2} justifyContent="center">
    {pokemon.map((poke,index) => (
      <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
       <Card poke={poke} index={index} key={index}/>
       </Grid>
      ))}
      </Grid>
      </div>
    </>
  )
}

export default App

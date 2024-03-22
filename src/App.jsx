import { useState,useEffect } from 'react'
import './App.css'
import { Card, CardContent, Typography } from '@mui/material';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemon(data.results)
      })
      .catch((error) => console.log(error));
    },[]);

  return (
    <>
    <p>POKEMON</p>
    {pokemon.map((poke) => (
        <Card key={poke.name}>
          <CardContent>
            <Typography variant="h5" component="div">
              {poke.name}
            </Typography>
            <Typography variant="body2">
              This is a Material-UI Card component.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default App

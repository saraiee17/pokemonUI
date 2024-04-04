import { useState,useEffect, useContext} from 'react'
import { SquadContext } from './contexts/SquadContext'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
import { Grid, Button } from '@mui/material';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [image,setImage]=useState('');
  const [index,setIndex]= useState('');
  const [squad, setSquad] = useState([]);


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.results);
        const pokemonData = data.results;
        setPokemon(data.results)
        const pokemonImages = pokemonData.map((poke, index) => {
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
          return imageUrl;
        });
        setImage(pokemonImages);
      })
      .catch((error) => console.log(error));
    },[]);


  return (
    <>
       <SquadContext.Provider value={{squad,image}}>
    <Nav/>
    <div className='cardHolder'>
    <Grid container spacing={2} justifyContent="center">
    {pokemon.map((poke,index) => ( 
      <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
       <Card poke={poke} index={index} key={index} image={image[index]}/>
       </Grid>
      ))}
      </Grid>
      </div>
      </SquadContext.Provider>
    </>
  )
}

export default App;

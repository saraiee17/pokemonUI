import {React,useState, useEffect} from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function MyCard(props) {
    const { poke,index } = props;
    const [image,setImage]=useState('');
    useEffect(() => {
        fetch( `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`)
          .then((response) => {
            setImage(response.url);
          })
          .catch((error) => console.log(error));
        },[]);
  return (
    <Card>
      <CardContent>
        <img src={image}/>
        <Typography variant="h5" component="div">
          {poke.name}
        </Typography>
        <Typography variant="body2">
          This is a Material-UI Card component.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;

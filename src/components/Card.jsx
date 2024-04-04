import {React,useState, useEffect, useContext} from 'react';
import { Card, CardContent, Typography, Button} from '@mui/material';
import {SquadContext} from '../contexts/SquadContext';

function MyCard(props) {
    const { poke,index,image } = props;
    // const [image,setImage]=useState('');

    const {squad} = useContext(SquadContext);

    
    // useEffect(() => {
    //     fetch( `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`)
    //       .then((response) => {
    //         setImage(response.url);
    //       })
    //       .catch((error) => console.log(error));
    //     },[]);

  return (
 
    <Card className='card'>
      <CardContent style={{ textAlign: 'center' }}>
        <img src={image} />
        <Typography variant="h5" component="div">
          {poke.name}
        </Typography>
        <Typography variant="body2">
        {poke.types && poke.types.map((typeData,index) => (
       <p key={index}>{typeData.type.name}</p>
      ))}
      <Button variant="outlined" color="error" style={{ backgroundColor: '#ffcccc'  }}> Add to Squad</Button>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;

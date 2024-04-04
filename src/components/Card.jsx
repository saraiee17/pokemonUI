import {React,useState, useEffect, useContext} from 'react';
import { Card, CardContent, Typography, Button} from '@mui/material';
import {SquadContext} from '../contexts/SquadContext';

function MyCard(props) {
    const { poke,image,index } = props;
    // const [image,setImage]=useState('');

    const {squad, setSquad, images,pokemon,showSquad} = useContext(SquadContext);

    function addSquadMember(){
      if (squad.length < 6) {
        setSquad([...squad, poke]);
    } else {
        console.log('Your squad is full! You cannot add more members.');
    }
    }
    // useEffect(() => {
    //     fetch( `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`)
    //       .then((response) => {
    //         setImage(response.url);
    //       })
    //       .catch((error) => console.log(error));
    //     },[]);


    console.log(squad); 

  return (
 
    <Card className='card'>
      <CardContent style={{ textAlign: 'center' }}>
        <img src={images[index]} />
        <Typography variant="h5" component="div">
          {poke.name}
        </Typography>
        <Typography variant="body2">
        {poke.types && poke.types.map((typeData,index) => (
       <p key={index}>{typeData.type.name}</p>
      ))}
      <Button variant="outlined" color="error" style={{ backgroundColor: '#ffcccc'  }} onClick={addSquadMember}> Add to Squad</Button>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;

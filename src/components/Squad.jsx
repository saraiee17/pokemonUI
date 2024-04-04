import {  useContext } from 'react'
import {SquadContext} from '../contexts/SquadContext';
import {  Card, CardContent, Typography, Button} from '@mui/material';

function Squad() {
    const {squad,images,pokemon} = useContext(SquadContext);

    return (
        <>
            <p>My Squad</p>
            <p> {squad.length}/6</p>
            {squad.map((poke,index) => ( 
            <Card className='card'>
      <CardContent style={{ textAlign: 'center' }}>
        <img src={images[index]} />
        <Typography variant="h5" component="div">
          {poke.name}
        </Typography>
        <Typography variant="body2">
      <Button variant="outlined" color="error" style={{ backgroundColor: '#ffcccc'  }}> Remove </Button>
        </Typography>
      </CardContent>
    </Card>
     ))}
        </>
        )
}
export default Squad;
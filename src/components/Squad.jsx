import {  useContext } from 'react'
import {SquadContext} from '../contexts/SquadContext';
import {  Card, CardContent, Typography, Button} from '@mui/material';

function Squad() {
    const {squad,images,pokemon} = useContext(SquadContext);
    function extractUrl(url) {
        const parts = url.split('/');
        return parseInt(parts[parts.length - 2]);
    }

    return (
        <>
            <p>My Squad</p>
            <p> {squad.length}/6</p>
            {squad.map((poke,index) => ( 
            <Card className='card'>
      <CardContent style={{ textAlign: 'center' }}>
        <img src={images[[extractUrl(poke.url)]-1]} />
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
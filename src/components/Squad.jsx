import {  useContext } from 'react'
import {SquadContext} from '../contexts/SquadContext';
import {  Button} from '@mui/material';

function Squad() {
    const {squad} = useContext(SquadContext);

    return (
        <>
            <p>My Squad</p>
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
        </>
        )
}
export default Squad;
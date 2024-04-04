import {React,useState, useEffect,useContext} from 'react';
import {  Button} from '@mui/material';
import {SquadContext} from '../contexts/SquadContext';


function Nav() {
    const {squad,images,pokemon,setShowSquad, showSquad} = useContext(SquadContext);

    return (
        <>
            <div className='nav'>
                <p className='App'>POKEMON</p>
                {/* {squad.length>2? <Button>Battle</Button> :} */}
                {showSquad ? (
                    <>
                        <Button variant="outlined" color="error" style={{ backgroundColor: '#ffcccc' }} onClick={() => setShowSquad(false)}>Home</Button>
                        {squad.length > 1 && <Button variant="outlined" color="error">Battle</Button>}
                    </>
                ) : (
                    <>
                        <Button variant="outlined" color="error" style={{ backgroundColor: '#ffcccc' }} onClick={() => setShowSquad(true)}> My Squad</Button>
                    </>
                )}
            </div>
        </>
        )
}
export default Nav
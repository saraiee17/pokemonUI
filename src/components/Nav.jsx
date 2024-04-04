import {React,useState, useEffect} from 'react';
import {  Button} from '@mui/material';

function Nav() {

    return (
        <>
            <div className='nav'>
                <p className='App'>POKEMON</p>
                <Button variant="outlined" color="error" style={{ backgroundColor: '#ffcccc'  }}> My Squad</Button>
            </div>
        </>
        )
}
export default Nav
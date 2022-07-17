import React from 'react';
import '../Feeling/Feeling.css';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';


function Feeling({getSurvey}) {

    const dispatch = useDispatch();
    const history = useHistory();

    //variable for input
    const [feeling, setFeeling] = useState('');

    const submitFeed = (event) => {
        event.preventDefault();
        console.log('submitFeed');
        dispatch({
            type: 'ADD_',
            payload: {feeling}
        })
        history.push('/understanding');

        };
        

    return (
        <>

            <h1>How are you feeling today?</h1>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                {/* <TextField
                    label="Feeling"
                    variant="standard"
                    color="warning"
                    focused
                /> */}

                <input 
                value={feeling}
                type="number"
                onChange={(event) => setFeeling(event.target.value)} />



                <Button className="btn" onClick={submitFeed} variant="contained">Next</Button>

            </Box>



        </>
    )
}

export default Feeling;
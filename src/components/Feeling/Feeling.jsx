import React from 'react';
import '../Feeling/Feeling.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    //variable for input
    const [feeling, setFeeling] = useState(0);

    const submitFeed = (event) => {
        event.preventDefault();
        console.log('submitFeed');
        if(!feeling){
            alert('Must input value');
        } else {
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })
        history.push('/understanding');
        }
    };


    return (
        <div className="containter">

            <h1>How are you feeling today?</h1>

                <TextField
                    id="filled-number"
                    label="feeling"
                    type="number"
                    onChange={(event) => setFeeling(event.target.value)}
                    value={feeling}
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />

                {/* <input
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)} /> */}



                <Button className="btn" onClick={submitFeed} variant="contained">Next</Button>


        </div>
    )
}

export default Feeling;
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';

function Support({getSurvey}) {


    const dispatch = useDispatch();
    const history = useHistory();

    //variable for input
    const [support, setSupport] = useState('');

    const submitFeed = (event) => {
        event.preventDefault();
        console.log('submitFeed');

        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })
            history.push('/comments');
    };

    return (
        <>
            <h1>How well are you being supported?</h1>
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
                value={support}
                type="number"
                onChange={(event) => setSupport(event.target.value)} />


                <Button className="btn" onClick={submitFeed} variant="contained">Next</Button>

            </Box>
            
        </>
            )
}

            export default Support;
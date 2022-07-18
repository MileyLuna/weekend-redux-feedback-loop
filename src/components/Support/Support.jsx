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
        if(!support){
            alert('Must input value');
        } else {
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })
            history.push('/comments');
    }
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
                <TextField
                    id="filled-number"
                    label="Suport"
                    type="number"
                    onChange={(event) => setSupport(event.target.value)}
                    value={support}
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />

            {/* <input 
                value={support}
                type="number"
                onChange={(event) => setSupport(event.target.value)} />
            */}

                <Button className="btn" onClick={submitFeed} variant="contained">Next</Button>
                </Box>
            
        </>
            )
}

            export default Support;
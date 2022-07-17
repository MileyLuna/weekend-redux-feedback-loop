import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';

function Understanding () {

    const dispatch = useDispatch();
    const history = useHistory();

    //variable for input
    const [understanding, setUnderstanding] = useState(0);

    const submitFeed = (event) => {
        event.preventDefault();
        console.log('submitFeed');
        if(!understanding){
            alert('Must input value');
        }else {
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })
            history.push('/support');
    }
    };


    return(
        <>
        <h1>How well are you understanding the content?</h1>

                <TextField
                    id="filled-number"
                    label="Understanding"
                    type="number"
                    onChange={(event) => setUnderstanding(event.target.value)}
                    value={understanding}
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />

            {/* <input 
                value={understanding}
                type="number"
                onChange={(event) => setUnderstanding(event.target.value)} /> */}



                <Button className="btn" onClick={submitFeed}variant="contained">Next</Button>

            
        </>
    )
}

export default Understanding;
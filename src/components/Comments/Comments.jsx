import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';

function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();

    //variable for input
    const [comments, setComments] = useState('');

    const submitFeed = (event) => {
        event.preventDefault();
        console.log('submitFeed');
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })
            history.push('/review');
    };

    return(
        <>
        <h1>Any comments you want to leave?</h1>
        <p>*Optional*</p>
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
                    label="Comments"
                    type="text"
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />

                {/* <input 
                value={comments}
                type="text"
                onChange={(event) => setComments(event.target.value)} /> 
                */}


                <Button className="btn" onClick={submitFeed} variant="contained">Next</Button>

</Box>

        </>
    )
}

export default Comments;
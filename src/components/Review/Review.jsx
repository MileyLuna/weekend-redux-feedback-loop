import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';


function Review ({getSurvey}) {
    //const dispatch = useDispatch();
    const history = useHistory();

    const feeling = useSelector((store) => store.feeling);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comments = useSelector((store) => store.comments);

    const submitForreal = (event) => {
        event.preventDefault();
        console.log('clicked review');

        axios
            .post('/api/feedback',{
                feeling: feeling,
                understanding:understanding,
                support: support,
                comments: comments
            })
            // console.log(`feeling rating is: ${feeling}`)
            .then(response => {
            getSurvey();
            setFeeling('');

            }).catch(err => {
                console.log('error in client post:', err);
            });
            history.push('/sucess');
        };

// will have post/axios/dispatch

    return (
        <>
        <h1>Review Your Feedback</h1>

        //mapping goes here

        <Button className="btn" onClick={submitForreal} variant="contained">Next</Button>
        </>
    )
}

export default Review;
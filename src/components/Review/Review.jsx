import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


function Review({ getSurvey }) {
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
            .post('/feedback', {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments
            })
            // console.log(`feeling rating is: ${feeling}`)
            .then(response => {
                getSurvey();
                dispatchEvent({
                    type:'CLEAR',
                });

            }).catch(err => {
                console.log('error in client post:', err);
            });
        history.push('/sucess');
    };


    return (
        <div>
            <h1>Review Your Feedback</h1>


                <ul>
                    <li>Feelings: {feeling} </li>
                    <li>Understanding: {understanding}</li>
                    <li>Support: {support}</li>
                    <li>Comments: {comments} </li>
                </ul>
                <Button className="btn" onClick={submitForreal} variant="contained">Submit</Button>


        </div>
    )
}

export default Review;
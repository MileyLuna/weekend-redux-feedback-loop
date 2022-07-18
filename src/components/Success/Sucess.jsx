import '../Success/Sucess.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function Sucess () {
    const history = useHistory();

    const ending = () => {
        console.log('clicked ending');
        history.push('/');
    }

    return(


        <>

        <div className='feedback'>
            <h1>Feedback Submitted!</h1>
        </div>

        <br></br>
        <div className='thanks'>
            <h1> Thank You!</h1>
            <Button className="btn" onClick={ending} variant="contained">Leave New Feedback</Button>
        </div>


        </>
    )
}

export default Sucess;
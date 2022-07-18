import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';


function Home () {
    const history = useHistory();

    const startFeed = () => {
history.push('/feeling');
    }

    return(
        <>
                <Button className="btn" onClick={startFeed} variant="contained">Start Feedback</Button>

        </>
    )
}

export default Home;
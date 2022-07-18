import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';

import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Sucess from '../Success/Sucess';


function App() {
  const dispatch = useDispatch();

  const getSurvey = () => {
    axios
    .get('/feedback')
    .then(response => {
      dispatch ({ type: 'GET_SURVEYS', payload: response.data});
    }).catch (err => alert('error in client GET:', err))
  };


  return (
    <div className='App'>

      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <ul>
						<li className='nav'>
							<Link className='link' to='/'>
								Home
							</Link>
						</li>
						{/* <li className='nav'>
							<Link className='link' to='/feeling'>
								feeling
							</Link>
						</li>
						<li className='nav'>
							<Link className='link' to='/understanding'>
								understanding
							</Link>
						</li>
            <li className='nav'>
							<Link className='link' to='/support'>
								support
							</Link>
						</li>
            <li className='nav'>
							<Link className='link' to='/comments'>
								comment
							</Link>
						</li>
            <li className='nav'>
							<Link className='link' to='/review'>
								review
							</Link>
						</li>
            <li className='nav'>
							<Link className='link' to='/sucess'>
								sucess
							</Link>
						</li>*/}
					</ul> 


        
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/feeling'>
          <Feeling />
        </Route>

        <Route path='/understanding'>
          <Understanding />
        </Route>

        <Route path='/support'>
          <Support />
        </Route>

        <Route path='/comments'>
          <Comments />
        </Route>

        <Route path='/review'>
          <Review getSurvey={getSurvey}/>
        </Route>

        <Route path='/sucess'>
          <Sucess />
        </Route>


      </Router>
    </div>
  );
}

export default App;

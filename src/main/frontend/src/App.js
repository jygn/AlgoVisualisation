import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav';

// components
import Home from './Home';
import AlgoPage from './pages/AlgoPage';

function App() {

  return ( // Switch -> switch component (page)
    <Router>
      <AppNav/>
      <div className='flex-container'>
        <Home/>
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/api/algos-info'/> 
          <Route exacte path='/api/algos-info/:id' component={AlgoPage} />
        </Switch> 
      </div>
    </Router>
  )
  // :id is juste a placeholder, we can write :dewdwe
}
 
export default App;
import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

// components
import AppNav from './components/AppNav/AppNav';
import Home from './Home';
import AlgoPage from './pages/AlgoPage';
import AlgosTable from './AlgosTable/AlgosTable';
import AlgoForm from './components/AlgoForm/AlgoForm';

function App() {

  return ( // Switch -> switch component (page)
    <Router>
      <AppNav/>
      {/* <div className='flex-container'> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/api/home' component={Home} /> 
          <Route exact path='/api/algos-info' component={AlgosTable} />
          <Route exact path='/api/home/algos-info/:id' component={AlgoPage} />
          <Route exact path='/api/add-algo-info' component={AlgoForm} />
        </Switch> 
      {/* </div> */}
    </Router>

  )
  // :id is juste a placeholder, we can write :dewdwe
}
 
export default App;
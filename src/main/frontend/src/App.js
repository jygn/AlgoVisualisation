import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// components
import Home from './Home';
import AlgoPage from './pages/AlgoPage';

function App() {

  return ( // Switch -> switch component (page)
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/algos-info' component={Home} /> 
        <Route exact path='/api/algos-info/:id' component={AlgoPage} />
      </Switch> 
    </Router>
  )
  // :id is juste a placeholder, we can write :dewdwe
}
 
export default App;
import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// components
import Home from './Home';
import AlgoPage from './AlgoPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/algos-info' component={Home} />
        <Route path='/api/algos-info/:id' exact component={AlgoPage} />
      </Switch>
    </Router>
  )
}
 
export default App;
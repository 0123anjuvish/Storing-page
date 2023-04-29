import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home'
import Login from './components/login'

function App() {
  return (
    <div className="App">
      <Header />
    <Router>
    <Switch>
       <Route path ="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>,
    </div>
  );
}

export default App;

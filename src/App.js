import React from 'react';
import Home from './components'
import './App.css'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import {Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Route path="/"  exact strict component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contacts" component={Contact}/>
    </React.Fragment>
  );
}

export default App;

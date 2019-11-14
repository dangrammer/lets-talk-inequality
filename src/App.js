import React, {Component} from 'react';
import GenderGapFacts from './components/GenderGapFacts';
import AgeGapFacts from './components/AgeGapFacts';
import RacialGapFacts from './components/RacialGapFacts';
import {Route, Switch, NavLink, Redirect, withRouter} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
  return (
    <main className="App">
      <header>
        <h1 id="intro-heading">Now that we are part of the tech industry, we need to be aware of the problems it has, and start thinking of how to solve them</h1>
          <NavLink to={'/'}>Gender Gap facts</NavLink><br/>
          <NavLink to={'/agegapfacts'}>Age Gap facts</NavLink><br/>
          <NavLink to={'/racialgapfacts'}>Racial Gap facts</NavLink><br/>
      </header>
      <section>
        <p>Now that we know the problem. Let's be part of the solution </p>
        <img id='inequality-logo' src='https://www.equalitytrust.org.uk/sites/default/files/FI_logo.jpg' alt='inequality-logo'/>
      </section>
      <Switch>
        <Route exact path={'/'} component={GenderGapFacts}/>
        <Route exact path={'/agegapfacts'} component={AgeGapFacts}/>
        <Route exact path={'/racialgapfacts'} component={RacialGapFacts}/>
        <Redirect to='/'/>
      </Switch>
    </main>
  )}
}

export default withRouter(App);

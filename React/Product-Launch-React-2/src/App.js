import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
              <Navigation />
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/About' component={About} />
                  <Route exact path='/Services' component={Services} />
                  <Route exact path='/Contact' component={Contact} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;
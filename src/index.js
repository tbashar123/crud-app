import React from 'react';
import ReactDOM from 'react-dom';
import Campuses from './Campuses';
import  Students from './Students';
import CollegeCampus from './CollegeCampus.jpeg'
import { BrowserRouter as Router, Route, Link,  Switch  } from 'react-router-dom'
import './index.css';
import App from './App';

const routing = (
  <Router>
  <div>

  <ul id="nav">
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/Campuses/">Campuses</Link></li>

                 <li><Link to="/Students/">Students</Link></li>

               </ul>
               <Switch>
                  <Route exact path="/" component={App} />
                  <Route path="/Campuses" component={Campuses} />

                  <Route path="/Students" component={Students} />

                  <Route component={<h1>not found</h1>}/>
              </Switch>

              </div>
     </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

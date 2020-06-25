import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";  
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import New from './New';
import Threads from './Threads';
import Comments from './Commets';
import Ask from './Ask';
import Jobs from './Jobs';
import Show from './Show';
import Past from './Past';
import Submit from './Submit';
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light nav-color">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <b>Hacker News</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new">
              New
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/threads">
            Threads
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/past">
            Past
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/comments">
            Comments
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ask">
            Ask
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/show">
            Show
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">
            Jobs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/submit">
            Submit
            </Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={App} />
      <Route path="/new" component={New} />
      <Route path="/threads" component={Threads} />
      <Route path="/past" component={Past} />
      <Route path="/comments" component={Comments} />
      <Route path="/ask" component={Ask} />
      <Route path="/show" component={Show} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/submit" component={Submit} />
      
    </div>
  </Router>
);  
ReactDOM.render(
 routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

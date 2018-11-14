import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron} from 'reactstrap'

import Pomodoro from './components/Pomodoro';
import 'bootstrap/dist/css/bootstrap.css';

const Application = () => {
  return (
    <Fragment>
      <Jumbotron>
        <h1 className="display-3">Pomodoro Timer</h1>
        <Pomodoro />
      </Jumbotron>
    </Fragment>
  );
};

ReactDOM.render(
  <Application />,
  document.getElementById('app')
);

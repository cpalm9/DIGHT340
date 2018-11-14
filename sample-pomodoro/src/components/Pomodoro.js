import React, { Fragment } from 'react';
import {Button, ButtonGroup} from 'reactstrap'

import Timer from './Timer';

export default class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: true,
      workTimer: 2,
      restTimer: 2,
      workCompleted: 0,
      restCompleted: 0,
      completedPomodoro: 0,
      continueTimer: false
    };
  }
  handleClick = () => {
    if(this.state.work === true){
      this.setState({work: false})
    } else {
      this.setState({work: true})
    }
  }
  timerCompleted = (cont) => {
    if(this.state.work === true){
      this.setState((prevState) => ({
        workCompleted: prevState.workCompleted + .5,
        work: false,
        continueTimer: (cont ? true : false)
      }))
    } else {
      this.setState((prevState) => ({
        restCompleted: prevState.restCompleted + .5,
        work: true,
        continueTimer: (cont ? true : false)
      }))
    }
    if(((this.state.restCompleted + this.state.workCompleted)%1) === 0 ){
      this.setState((prevState) => ({
        completedPomodoro: prevState.completedPomodoro + 1
      }))
    }
  }

  render() {
    return (
      <React.Fragment>

        <h4>{this.state.work ? 'Work Timer' : 'Rest Timer'}</h4>
        <Button color="primary" onClick={this.handleClick}>Work</Button>&nbsp;&nbsp;
        <Button color="secondary" onClick={this.handleClick}>Rest</Button>

        {this.state.work && <Timer type={'work'} time={this.state.workTimer} timerCompleted={this.timerCompleted} continueTimer={this.state.continueTimer}/>}
        {!this.state.work && <Timer type={'rest'}time={this.state.restTimer} timerCompleted={this.timerCompleted} continueTimer={this.state.continueTimer}/>}

        <p>Completed Pomodoros: {this.state.completedPomodoro}</p>
      </React.Fragment>
    );
  }
};

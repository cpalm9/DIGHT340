import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'reactstrap'

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
      stopButtonClicked: false,
      continueTimer: props.continueTimer
    };
  }

  componentWillUnmount(){
    if(this.state.stopButtonClicked){
      this.stopTimer()
    } else {
      this.resetTimer()
    }
  }
  componentDidMount(){
    if(this.state.continueTimer){
      this.startTimer()
    }
  }

  format(seconds) {
    const min = Math.floor(seconds / 60);
    const leadingMin = (min < 10) ? '0' : '';

    const sec = Math.floor(seconds % 60);
    const leadingSec = (sec < 10) ? '0' : '';

    const formattedTime = `${leadingMin + min}:${leadingSec + sec}`;

    return formattedTime;
  }

  runTimer = () => {
    if (this.state.time !== 0) {
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));
    } else {
      if(!this.state.stopButtonClicked){
        this.props.timerCompleted(true);
      } else {
        this.props.timerCompleted(false);
      }
    }
  }

  startTimer = () => {
    this.interval = setInterval(this.runTimer, 1000);
    this.setState({stopButtonClicked: false, continueTimer: true})
  }

  stopTimer = () => {
      clearInterval(this.interval);
      this.setState({stopButtonClicked: true, continueTimer: false})
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      time: this.props.time,
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="display-5">{this.format(this.state.time)}</h3>
        <Button color="primary" onClick={this.startTimer} style={{marginRight: '10px'}}>Start</Button>
        <Button color="secondary" onClick={this.stopTimer} style={{marginRight: '10px'}}>Stop</Button>
        <Button color="primary" onClick={this.resetTimer}>Reset</Button>
      </React.Fragment>
    );
  }
}

Timer.propTypes = {
  time: PropTypes.number,
};

class Timer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      time: props.time,
    }
  }
  
  componentWillUnmount() {
    this.stopTimer()
  }

  formatTime = (time) => {
    var minutes = Math.floor((time) / 60);
    var seconds = time - (minutes * 60);
    seconds = Math.round(seconds * 100) / 100
    var result = (minutes < 10 ? "0" + minutes : minutes);
      result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
    return result;
  }
  

  runTimer = () => {
    if(this.state.time !== 0){
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }))
    }
    else {
      this.stopTimer()
    }
  }

  startTimer = () => {
    this.interval = setInterval(this.runTimer, 1000)
  }

  stopTimer = () => {
    clearInterval(this.interval)
  }

  resetTimer = () => {
    this.stopTimer()
    this.setState({time: this.props.time})
  }

  render() {
    return(
      <React.Fragment>
        <div className="time">{this.formatTime(this.state.time)}</div>
        <button className="btn-start" onClick={this.startTimer}>Start</button>
        <button className="btn-stop" onClick={this.stopTimer}>Stop</button>
        <button className="btn-reset" onClick={this.resetTimer}>Reset</button>
      </React.Fragment>
    );
  }
}

Timer.propTypes = {
  time: String
}
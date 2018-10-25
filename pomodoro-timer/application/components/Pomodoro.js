class Pomodoro extends React.Component {
  render(){
    return(
      <React.Fragment>
        <button className="btn-work">Work</button>
        <button className="btn-rest">Rest</button>

        <Timer time="25:00"/>
      </React.Fragment>
    );
  }
}

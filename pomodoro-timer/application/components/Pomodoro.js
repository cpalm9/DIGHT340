class Pomodoro extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      work: true,
    }
  }

  handleClick = () => {
    if(this.state.work === true){
      this.setState({work: false})
    } else {
      this.setState({work: true})
    }
  }

  render(){
    return(
      <React.Fragment>
        <button className="btn-work" onClick={this.handleClick}>Work</button>
        <button className="btn-rest" onClick={this.handleClick}>Rest</button>

        {/* {this.state.work ? (<Timer time={1500}/>) : (<Timer time={300}/>)} */}
        {this.state.work && <Timer time={1500}/>}
        {!this.state.work && <Timer time={300}/>}
      </React.Fragment>
    );
  }
}

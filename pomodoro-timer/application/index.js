const rootElement = document.querySelector('#application');

function Application() {
  return(
    <React.Fragment>
      <h1>Pomodoro Timer</h1>
      <Pomodoro />
    </React.Fragment>
  );
}

ReactDOM.render(<Application/>, rootElement);
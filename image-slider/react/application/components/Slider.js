class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <BackArrow/>
        <div className="wrapper-slides">
          <div className="slide muradin"></div>
          <div className="slide johanna"></div>
          <div className="slide artanis"></div>
          <div className="slide yellowstone"></div>
          <div className="slide gallatin"></div>
        </div>
        <ForwardArrow/>
      </div>
    );
  }
}
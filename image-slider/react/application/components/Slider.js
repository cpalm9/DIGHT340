class Slider extends React.Component {
  styles = {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    height: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }
  render() {
    return (
      <div className="slider">
        <Arrow direction={'backward'}/>
        <SlideWrapper/>
        <Arrow direction={'forward'}/>
      </div>
    );
  }
}
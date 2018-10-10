class Slider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      images: ['artanis', 'gallatin', 'johanna', 'muradin', 'yellowstone'],
      currentIndex: 0,
      translateValue: 0,
    }
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }
  
  prevSlide = () => {
    if(this.state.currentIndex === 0){
      return this.setState((prevState)=> (
        {
          currentIndex: this.state.images.length - 1,
          translateValue: prevState.translateValue - ((this.slideWidth()) * (this.state.images.length - 1))
        }
      ))
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth())
    }))
  }

  nextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1){
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - (this.slideWidth())
    }))
  }

  render() {
    const styles = {
      position: 'relative',
      width: '100%',
      margin: '0 auto',
      height: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }
    return (
      <div className="slider" style={styles}>
        <Arrow direction={'backward'} handleClick={this.prevSlide}/>
        <SlideWrapper translateValue={this.state.translateValue} images={this.state.images}/>
        <Arrow direction={'forward'} handleClick={this.nextSlide}/>
      </div>
    );
  }
}
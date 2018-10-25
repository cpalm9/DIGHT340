class Slider extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      images: this.shuffleImages(this.unShuffledImages),
      currentIndex: 0,
      translateValue: 0,
      autoplay: false,
      intervalId: null
    }
  }

  unShuffledImages = ['artanis', 'gallatin', 'johanna', 'muradin', 'yellowstone'];
  shuffleImages = (images) => {
    let i = images.length - 1;
    for (; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j]
      images[j] = temp
    }
    return images
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

  autoPlaySlides = () => {
    if(!this.state.autoplay){
      let id = setInterval(this.nextSlide, 2000);
      this.setState((prevState)=> ({
        autoplay: true,
        intervalId: id
      }))
    }
    else if(this.state.autoplay){
      clearInterval(this.state.intervalId)
      this.setState((prevState) => ({
        autoplay: false,
        intervalId: null
      }))
    }
  }

  handleKeyPress = (e) => {
    switch(e.keyCode){
      case 32: 
        this.autoPlaySlides()
        break;
      case 39:
        this.nextSlide()
        break;
      case 37:
        this.prevSlide()
        break;
      case 82:
        this.shuffleImages(this.state.images)
        this.forceUpdate()
        break;
      default:
        break;
    }
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
      <div className="slider" style={styles} onKeyUp={this.handleKeyPress} tabIndex='0'>
        <Arrow direction={'backward'} handleClick={this.prevSlide}/>
        <SlideWrapper translateValue={this.state.translateValue} images={this.state.images} currentIndex={this.state.currentIndex}/>
        <Pips length={this.state.images.length} index={this.state.currentIndex}/>
        <Arrow direction={'forward'} handleClick={this.nextSlide}/>
      </div>
    );
  }
}
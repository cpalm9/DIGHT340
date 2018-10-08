const Slide = ({image}) => {
  const styles = {
    display: 'inline-block',
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: `url("images/${image}.jpg")`,
    fontSize: '0'
  }
  
  return <div className='slide' style={styles}></div>
}

Slide.propTypes = {
  image: PropTypes.string,
}
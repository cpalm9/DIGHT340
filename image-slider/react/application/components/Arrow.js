const Arrow = ({direction}) => {
  let rotation = 0;
  const styles = {
    position: 'absolute',
    top: '50vh',
    display: 'block',
    borderStyle: 'solid',
    borderColor: '#dad6ca',
    borderWidth: '0 10px 10px 0',
    padding: '10px',
    cursor: 'pointer',
    zIndex: '20',
  }
  if(direction === 'backward'){
    rotation = '135deg'
    styles['transform'] = `rotate(${rotation})`
    styles['left'] = '1.5%'
  } else {
    rotation = '-45deg'
    styles['transform'] = `rotate(${rotation})`
    styles['right'] = '1.5%'
  }
  return(
    <div className={`arrow-${direction}`} style={styles}></div>
  );
}

Arrow.propTypes = {
  direction: PropTypes.string,
}
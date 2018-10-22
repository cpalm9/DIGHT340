const Pips = ({length, index, handleClick}) => {
  const containerStyles = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    zIndex: '15',
    width: '60%',
    paddingLeft: '0',
    marginLeft: '-30%',
    textAlign: 'center',
    listStyle: 'none'
  }
  var pips = []
  for(var x = 0; x < length; x++){
      pips.push(<Pip key={x} currentKey={x} currentIndex={index}/>)    
  }

  return (
    <div style={containerStyles}>
    <ol>
      {pips}
    </ol>
    </div>
  )
}
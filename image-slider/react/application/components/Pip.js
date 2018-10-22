const Pip = ({currentIndex, currentKey, handleClick}) => {
  let pipStyles = {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    margin: '1px',
    textIndent: '-999px',
    cursor: 'pointer',
    backgroundColor: '#000\9',
    backgroundColor: 'rgba(0,0,0,0)',
    border: '1px solid #fff',
    borderRadius: '10px'
  }
  let activePip = {
    width: '12px',
    height: '12px',
    margin: '0',
    backgroundColor: '#fff'
  }
  let finalStyles = null
  if(currentIndex === currentKey){
    finalStyles = {
      ...pipStyles,
      ...activePip,
    }
  }
  else {
    finalStyles = {
      ...pipStyles
    }
  }
  return (
    <li style={finalStyles}></li>
  )
}
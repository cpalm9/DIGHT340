class SlideWrapper extends React.Component {
  images = ['artanis', 'gallatin', 'johanna', 'muradin', 'yellowstone'];
  styles = {
    position: 'relative',
    height: '100%',
    width: '100%',
    transform: 'translateX(0)',
    transition: 'transform ease-out .45s'
  }
  render(){
    return(
      <div className="wrapper-slides">
        <Slide image={'artanis'}/>
      </div>
    );
  }
}
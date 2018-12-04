import React from 'react';
import PropTypes from 'prop-types';

const Gif = props => (
    <p className='gif-wrapper' style={{margin: '10px'}}>
        <img src={props.src} alt='' />
    </p>
)

Gif.proptypes = {
    src: PropTypes.string,
}


 
export default Gif;
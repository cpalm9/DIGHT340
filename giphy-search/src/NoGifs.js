import React from 'react';
import Typography from '@material-ui/core/Typography';

const NoGifs = () => (
    <div className='no-gifs' style={{margin: '100px'}}>
        <Typography component="h3" variant="h4" gutterBottom>
            Sorry, there are no GIFs that match your search.
        </Typography>
    </div>
);

export default NoGifs;
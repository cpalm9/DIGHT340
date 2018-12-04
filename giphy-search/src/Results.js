import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Gif from './Gif';
import NoGifs from './NoGifs';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });

const Results = props => {
    return (
    <Grid container spacing={16}>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
                {
                    (props.data.length)
                    ? props.data.map(gif => (
                        <Gif src={gif.images.fixed_height.url} key={gif.id} />
                    )) : <NoGifs />
                
                }
            </Grid>
        </Grid>
    </Grid>
)}

Results.proptypes = {
    data: PropTypes.array
}

export default withStyles(styles)(Results);
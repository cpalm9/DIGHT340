import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Results from './Results';
import SearchForm from './SearchForm';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      loading: true,
      getTrending: true,
      getRandom: false,
      getSearch: false
    };
  }

  componentDidMount() {
    if(this.state.getTrending){
      this.getTrending();
    }
  }

  handleTrendingChange = () => {
      this.setState({getTrending: true, getRandom: false, getSearch: false})
      this.getTrending();
  }

  handleSearchChange = () => {
      this.setState({getSearch: true, getTrending: false, getRandom: false})
      this.performSearch();
  }

  getTrending = async () => {

    try {
      const response = await axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g');
      const { data } = await response.data

      this.setState({
        gifs: data,
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  getRandom = async(limit = 0) => {
    try {
      const response = await axios.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=g');
      const data = await response.data.data;
      this.setState({
        gifs: data,
        loading: false,
        getRandom: true,
        getTrending: false,
        getSearch: false
      });
    } catch(error){
      console.error(error)
    }
  }

  performSearch = async (query = '', limit = 25) => {
    try {
      const response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=25&rating=g&q=${query}&limit=${limit}`);
      const { data } = await response.data

      this.setState({
        gifs: data,
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {

    return (
      <Fragment>
        <Typography component="h2" variant="h2" gutterBottom>
          Giphy Search!
        </Typography>
        <FormControlLabel
          control={
            <Button
              color='primary'
              variant="contained"
              onClick={this.handleTrendingChange}
              style={{marginLeft: '10px'}}
            >Get Trending</Button>
          }
        />
        <FormControlLabel
          control={
            <Button
              color="secondary"
              variant="contained"
              onClick={this.getRandom}
              style={{marginLeft: '10px'}}
            >Get Random Gif</Button>
          }
        />
        <FormControlLabel
          control={
            <Button
              color="secondary"
              variant="contained"
              onClick={this.handleSearchChange}
              style={{marginLeft: '10px'}}
            >Search</Button>
          }
        />
        {!this.state.getTrending && !this.state.getRandom ? <SearchForm onChange={this.performSearch}/> : ''}
        {
          (this.state.loading)
          ? <p className='loading'>Loading&hellip;</p>
          : <Results data={this.state.gifs} />
        }
      </Fragment>
    );
  }
}

export default App;

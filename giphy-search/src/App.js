import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Results from './Results';
import SearchForm from './SearchForm';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      loading: true,
      getTrending: false,
    };
  }

  componentDidMount() {
    if(this.state.getTrending){
      this.getTrending();
    } else {
      this.performSearch();
    }
  }

  handleCheckboxChange = () => {
    if(!this.state.getTrending){
      this.setState({getTrending: true})
      this.getTrending();
    } else {
      this.setState({getTrending: false})
      this.performSearch()
    }
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
    // console.log(this.state.gifs);

    const gifs = this.state.gifs.map(gif => {
      return <img key={gif.id} src={gif.images.fixed_width.url} alt={gif.title} />;
    });

    console.log(gifs);

    return (
      <Fragment>
        <Typography component="h2" variant="h2" gutterBottom>
          Giphy Search!
        </Typography>
        <FormControlLabel
          label="Get Top 25 Trending Gifs?"
          control={
            <Checkbox
              checked={this.state.getTrending}
              onChange={this.handleCheckboxChange}
            />
          }
          
        />
        {!this.state.getTrending ? <SearchForm onChange={this.performSearch}/> : ''}
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

import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const ranges = [
  {
    value: '5',
    label: '5',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '15',
    label: '15',
  },
  {
    value: '20',
    label: '20',
  },
  {
    value: '25',
    label: '25',
  },
];

export default class SearchForm extends Component {
  constructor(){
    super()
    this.state = {
      searchText: '',
      limit: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state.searchText, this.state.limit)
  }

  onSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }
  onRangeChange = (e) => {
    this.setState({
      limit: e.target.value
    })
  }
  render(){
    return(
      <form className="search-form" onSubmit={this.handleSubmit}>
          <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              margin="normal"
              variant="outlined"
              onChange={this.onSearchChange}
              value={this.state.searchText}
            />
        <br/>
        <TextField
          select
          variant="outlined"
          label="Limit Search To..."
          style={{width: '200px'}}
          value={this.state.limit}
          onChange={this.onRangeChange}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <br/>
        <Button variant="contained" type="submit" color="primary">
          Search
        </Button>
      </form>
    )
  }
}


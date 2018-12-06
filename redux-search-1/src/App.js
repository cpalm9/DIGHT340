import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect} from 'react-redux'

import Actions from './Actions'

const createMarkup = (rawInfo = null) => {
  return {
    __html: rawInfo,
  }
};

const App = ({cards, searchTerm, searchTermChanged}) => (
      <Fragment>
        <TextField
          id="input-with-icon-textfield"
          label="Search Card Names"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={e => searchTermChanged(e.target.value)}
          value={searchTerm}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Flavor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map(card => {
              return card.flavor ? 
                (
                  <TableRow key={card.id}>
                    <TableCell>{card.name}</TableCell>
                    <TableCell dangerouslySetInnerHTML={ createMarkup(card.flavor) }></TableCell>
                  </TableRow>
                ) : null;
            })}
          </TableBody>
        </Table>
      </Fragment>
  );

export default connect(store => store, Actions)(App);

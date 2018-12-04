import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'

import Actions from './Actions'

const createMarkup = (rawInfo = null) => {
  return {
    __html: rawInfo,
  }
};

const App = ({Cards, searchTerm, searchTermChanged}) => (
      <Fragment>
        <input 
          type='text'
          name='search'
          placeholder='Search Card Names'
          value={searchTerm} 
          onChange={e => searchTermChanged(e.target.value)}/>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Flavor</th>
            </tr>
          </thead>
          <tbody>
            {Cards.map(card => {
              return card.flavor ? 
                (
                  <tr key={card.id}>
                    <td>{card.name}</td>
                    <td dangerouslySetInnerHTML={ createMarkup(card.flavor) }></td>
                  </tr>
                ) : null;
            })}
          </tbody>
        </table>
      </Fragment>
  );

export default connect(store => store, Actions)(App);

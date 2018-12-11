import React, { Children, cloneElement, Component } from 'react';

import { Context } from './Provider';

export default class Consumer extends Component {
    render() {
        const { children } = this.props;
        return (
            <Context.Consumer>
                {({ allFilms, searchTerm, searchTermChanged }) => {
                    const films = searchTerm
                        ? allFilms.filter(film => film.opening_crawl.toLowerCase().includes(searchTerm.toLowerCase()))
                        : allFilms;

                    return Children.map(children, (child) => 
                        cloneElement(child, {
                            films,
                            searchTerm,
                            searchTermChanged,
                        })
                    );
                }}
            </Context.Consumer>
        );
    }
}

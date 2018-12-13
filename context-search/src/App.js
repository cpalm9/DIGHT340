import React from 'react';
import { Table, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const createMarkup = (rawData = null) => {
  return {
    __html: rawData
  }
}


const App = ({ films, searchTerm, searchTermChanged }) => {
  return (
    <>
    <Container> 
    <Form>
        <FormGroup>
          <Label for="search">Search...</Label>
          <Input style={{width: '500px'}} type="text" name="search" id="search" placeholder="enter search term here..." value={searchTerm} onChange={e => searchTermChanged(e.target.value)} />
        </FormGroup>
      </Form>
       <Table>
        <thead>
          <tr>
            <th>Film Title</th>
            <th>Film Opening Crawl</th>
          </tr>
        </thead>
        <tbody>
        {films.map(film => (
          <tr>
            <td>{film.title}</td>
            <td dangerouslySetInnerHTML={createMarkup(film.opening_crawl)}></td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
    </>
  )
}

export default App;

import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import Router from './Router'

const info = {
          columnNames: [['book_title', 'Title'], ['publisher', 'Publisher'], ['authors', 'Authors'], ['categories', 'Categories']],
          id_field: 'book_id',
          editEnabled: false,
          deleteEnabled: false,
          url: {
              selectURL: 'http://localhost:5000/book/book/fetch/all',
              updateURL: 'http://localhost:5000/book/delete',
              deleteURL: 'http://localhost:5000/book/book/delete',
    }
}


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <Router />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

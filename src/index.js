import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {data} from './book'
import SpecificBook from './Books'

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById('root'));
import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import WebApp from '@twa-dev/sdk'

WebApp.showAlert('Hey there!');



const books = [
  { id: 1, title: "To Kill a Mockingbird", emoji: "📚" },
  { id: 2, title: "1984", emoji: "📖" },
  { id: 3, title: "Pride and Prejudice", emoji: "📕" },
  { id: 4, title: "The Great Gatsby", emoji: "📘" },
  { id: 5, title: "Moby Dick", emoji: "📙" },
];

const BookComponent = ({ book, onAdd, count }) => (
  <div style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
    <h3>{book.emoji} {book.title}</h3>
    <button onClick={() => onAdd(book)}>Add</button>
    {count > 0 && <span style={{ marginLeft: '10px' }}>{count}</span>}
  </div>
);

const BookList = () => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [bookCounts, setBookCounts] = useState({});

  const handleAddBook = (book) => {
    setSelectedBooks([...selectedBooks, book]);
    setBookCounts(prevCounts => ({
      ...prevCounts,
      [book.id]: (prevCounts[book.id] || 0) + 1
    }));
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.map(book => (
        <BookComponent 
          key={book.id} 
          book={book} 
          onAdd={handleAddBook} 
          count={bookCounts[book.id] || 0}
        />
      ))}
      <h3>Selected Books: {selectedBooks.length}</h3>
    </div>
  );
};


// const showAlert = (message) => {
//   webApp.showAlert(message);
// };


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue !</h1>
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function LibraryManagement() {
  const [books, setBooks] = useState([
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);
  const [searchText, setSearchText] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const filteredBooks = books.filter(
    book =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddBook = () => {
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle('');
      setNewAuthor('');
    }
  };

  const handleRemoveBook = idx => {
    setBooks(books.filter((_, i) => i !== idx));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black', // Set all text color to black here
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        border: '2px solid black',
        background: 'white',
        padding: 24,
        maxWidth: 600,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          fontSize: 28,
          fontWeight: 'bold',
          margin: 0,
          marginBottom: 18,
          color: 'black'
        }}>Library Management</h2>
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className="custom-placeholder"
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '10px 8px',
            border: '1px solid #aaa',
            borderRadius: 2,
            fontSize: 16,
            color: 'black',
          }}
        />
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input
            type="text"
            placeholder="New book title"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            className="custom-placeholder"
            style={{
              flex: 1,
              padding: '10px 8px',
              border: '1px solid #aaa',
              borderRadius: 2,
              fontSize: 16,
              color: 'black',
            }}
          />
          <input
            type="text"
            placeholder="New book author"
            value={newAuthor}
            onChange={e => setNewAuthor(e.target.value)}
            className="custom-placeholder"
            style={{
              flex: 1,
              padding: '10px 8px',
              border: '1px solid #aaa',
              borderRadius: 2,
              fontSize: 16,
              color: 'black',
            }}
          />
          <button
            onClick={handleAddBook}
            style={{
              border: '1px solid #aaa',
              borderRadius: 2,
              background: '#f5f5f5',
              cursor: 'pointer',
              padding: '10px 18px',
              fontSize: 15,
              color: 'black'
            }}
          >
            Add Book
          </button>
        </div>
        {filteredBooks.map((book, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: 4,
            margin: '8px 0',
            padding: '12px 14px',
            fontSize: 17,
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
            color: 'black'
          }}>
            <span style={{ color: 'black' }}>
              <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>{book.title}</span> by {book.author}
            </span>
            <button
              style={{
                marginLeft: 'auto',
                border: '1px solid #aaa',
                borderRadius: 2,
                background: '#f5f5f5',
                cursor: 'pointer',
                padding: '7px 18px',
                fontSize: 15,
                color: 'black'
              }}
              onClick={() => handleRemoveBook(books.indexOf(book))}
            >
              Remove
            </button>
          </div>
        ))}
        <style>{`
          .custom-placeholder::placeholder {
            color: #bbb !important;
            opacity: 1;
          }
        `}</style>
      </div>
    </div>
  );
}

export default LibraryManagement;
import React from 'react'
import './BookList.css'
import { useState, useEffect } from 'react'
import { getBooks, createBook, updateBook, deleteBook} from '../../services/BookService'
import DisplayBooks from './DisplayBooksComponent';
import EditBookComponent from './EditBookComponent';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingBook, setEditingBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');


  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleDeleteClick = async (id) =>{
    await deleteBook(id);
    fetchBooks();
  }
  const handleSave = async (book) => {
    if (book.id) {
      await updateBook(book.id, book);
    } else {
      await createBook(book);
    }
    setEditingBook(null);
    fetchBooks();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchBooks = async () => {

    try {
      const req = await getBooks(currentPage, search);
      setBooks(req.results);
      setCount(req.count)
    } catch (error) {
      setError('Failed to fetch books.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = async () => {
    setCurrentPage(currentPage + 1);
    fetchBooks()
  }

  const handlePreviousPage = ()  => {
    setCurrentPage(currentPage - 1);
    fetchBooks()
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetchBooks();
  }, [currentPage, search]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xs-12 col-sm-12">
            <form className="lg float-left">
              <div className="input-group p-0">
                <input type="text" 
                 value={search}
                 onChange={handleSearchChange}
                className="form-control rounded-0" 
                placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-outline-primary rounded-0" 
                  onClick={handleSearchChange}
                  type="button">Search</button>
                </span>
              </div>
            </form>
          <DisplayBooks 
          books={books} 
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          setCurrentPage={setCurrentPage}
          count ={count}
          currentPage={currentPage}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
         />
        </div>
        <div className="col-lg-6 col-xs-12 col-sm-12">
            <EditBookComponent 
             book={editingBook} 
             onSave={handleSave} />
        </div>
      </div>
    </div>
  );
}

export default BookList

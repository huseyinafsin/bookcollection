import React from 'react'
import './BookList.css'
import { useState, useEffect } from 'react'
import { getBooks, createBook, updateBook, deleteBook} from '../../services/BookService'
import { toast } from "react-toastify";
import AWS from 'aws-sdk';
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
  
  const s3 = new AWS.S3();


  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION,
  });
  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleDeleteClick = async (book) =>{
     // Delete old image from S3
    const deleteParams = {
      Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
      Key: `uploads/${book.isbn}.jpg`,
    };
    await s3.deleteObject(deleteParams).promise();

   var deleteReult = await deleteBook(book.id);
   console.log('Book deleted successfully'+deleteReult);

    if (deleteReult.status === 204) {
      toast.success("Book deleted successfully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    fetchBooks();
  }
  const handleSave = async (book) => {
    if (book.id) {
      await handleUpdate(book);
  
    } else {
     await handleCreate(book);
    }
  
    setEditingBook(null);
    fetchBooks();

    async function handleUpdate() {    

      if (book.image) {
              // Delete old image from S3
              const deleteParams = {
                Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
                Key: `uploads/${book.isbn}.jpg`,
              };
              await s3.deleteObject(deleteParams).promise();
        // upload new image to S3
        const params = {
          Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
          Key: `uploads/${book.isbn}.jpg`,
          Body: book.image,
          ContentType: 'image/jpeg',
        };
        await s3.upload(params).promise();
      }
      delete book.image;
      
      var updateResult = await updateBook(book.id, book);
      if (updateResult.status === 200) {
        toast.success("Book updated successfully.");
      }
      else {
        toast.error("Failed to update book.");
      }
    }

    async function handleCreate() {
      const params = {
        Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
        Key: `uploads/${book.isbn}.jpg`, 
        Body: book.image,
        ContentType: 'image/jpeg',
        
      };
  
      await s3.upload(params).promise();
      delete book.image;
      var createResult = await createBook(book);
      if (createResult.status === 201) {
        toast.success("Book created successfully.");
      }
      else {
        toast.error("Failed to create book.");
      }
    }
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

  const earchChange = (e) => {
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
                 onChange={earchChange}
                className="form-control rounded-0" 
                placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-outline-primary rounded-0" 
                  onClick={earchChange}
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

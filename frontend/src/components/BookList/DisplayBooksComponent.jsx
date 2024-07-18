import { useState } from 'react';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function DisplayBooksComponent({
  books,
  count,
  onEditClick,
  onDeleteClick,
  currentPage,
  setCurrentPage,
  onNextPage,
  onPreviousPage
}) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const cdn_url = process.env.REACT_APP_CDN_URL || '';
  const handleNextPage = () => {
    onNextPage();
  };

  const handlePreviousPage = () => {
    onPreviousPage();
  };

  const onShowImage = (book) => {

    setModalImage(`${cdn_url}/uploads/${book.isbn}.jpg`); 
    setShowModal(true);
    console.log('CDN URL:', process.env.REACT_APP_CDN_URL);

  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  return (
    <div className="card table-card">
      <table className="table table-bordered table-condensed" id="bookTable">
        <thead>
          <tr>
            <td hidden={true}>Id</td>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Published Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.published_date}</td>
              <td className='w-25'>
                <button type="button" className="btn rounded-0" onClick={() => onShowImage(book)}>
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button type="button" className="btn rounded-0" onClick={() => onEditClick(book)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button type="button" className="btn rounded-0" onClick={() => onDeleteClick(book)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={2}>
            <span>Total Book: {count}</span>
          </td>
          <td colSpan={3}>
            <nav aria-label="Pagination">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={handlePreviousPage} tabIndex={currentPage === 1 ? "-1" : "0"} aria-disabled={currentPage === 1}>
                    Previous
                  </button>
                </li>
                {(() => {
                  const pages = [];
                  const totalPages = Math.ceil(count / 5);
                  for (let index = 0; index < totalPages; index++) {
                    if (index === currentPage - 1) {
                      pages.push(
                        <li className="page-item active" key={index}>
                          <button className="page-link">{currentPage}</button>
                        </li>
                      );
                    } else {
                      pages.push(
                        <li className="page-item" key={index}>
                          <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                            {index + 1}
                          </button>
                        </li>
                      );
                    }
                    if (index === 4 && totalPages > 5) {
                      pages.push(
                        <li className="page-item disabled" key="ellipsis">
                          <button className="page-link">...</button>
                        </li>
                      );
                      break;
                    }
                  }
                  return pages;
                })()}
                <li className={`page-item ${currentPage === Math.ceil(count / 5) ? 'disabled' : ''}`}>
                  <button
                    onClick={handleNextPage}
                    className="page-link"
                    tabIndex={currentPage === Math.ceil(count / 5) ? "-1" : "0"}
                    aria-disabled={currentPage === Math.ceil(count / 5)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </td>
        </tr>
        </tfoot>
      </table>

      {/* Modal component */}
      {showModal && (
         <div className="modal" style={{ display: 'block' }}>
         <div className="modal-dialog modal-dialog-centered">
           <div className="modal-content">
             <div className="modal-header">
               <button type="button" className="btn-close" onClick={closeModal}></button>
             </div>
             <div className="modal-body">
               <img src={modalImage} alt="Book" className="img-fluid" />
             </div>
           </div>
         </div>
       </div>
     )}
   </div>
  );
}

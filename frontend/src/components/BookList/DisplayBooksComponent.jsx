import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DisplayBooksComponent(
  { books,
    count,
    onEditClick,
    onDeleteClick,
    currentPage,
    setCurrentPage,
    onNextPage,
    onPreviousPage}) {

  const handleNextPage = () => {
    onNextPage();
  }

  const handlePreviousPage = () => {
    onPreviousPage();
  }


  return <div className="card table-card" >
    <table className="table table-bordered table-condensed" id="bookTable">
      <thead>
        <tr>
          <td hidden={true}>Id</td>
          <th >Title</th>
          <th >Author</th>
          <th >ISBN</th>
          <th >Published Date</th>
          <th >Actions</th>
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
              <button type="button" className="btn rounded-0" onClick={() => onEditClick(book)}>{<FontAwesomeIcon icon={faEye} />}</button>
              <button type="button" className="btn rounded-0" onClick={() => onEditClick(book)}>{<FontAwesomeIcon icon={faEdit} />}</button>
              <button type="button" className="btn rounded-0" onClick={() => onDeleteClick(book.id)}>{<FontAwesomeIcon icon={faTrash} />}</button>
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
  </div>

}
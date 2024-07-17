import React, { useState, useEffect } from "react";

export default function EditBookComponent({ book, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    published_date: ""
  });

  useEffect(() => {
    if (book) setFormData(book);
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleClearForm = () => {
    setFormData({
      title: "",
      author: "",
      isbn: "",
      pages: 0,
      published_date: new Date()

    });
  }

  return (
    <div className="card edit-card rounded-0 mt-0 w-100 h-100">
      <div className="card-header">
        <h5 className="card-title">Edit Book</h5>
      </div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>{" "}
            <input
              className="form-control"
              id="title"
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>{" "}
            <input
              className="form-control"
              id="author"
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>{" "}
            <input
              className="form-control"
              id="isbn"
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">Page Count</label>{" "}
            <input
              className="form-control"
              id="pages"
              type="number"
              name="pages"
              value={formData.pages}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="published">Published</label>{" "}
            <input
              className="form-control"
              id="published"
              type="date"
              name="published_date"
              value={formData.published_date}
              onChange={handleChange}
            />
          </div>
          <div className="panel-footer">
            <div className="row p-5">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-primary btn-block rounded-0 w-50"
                  id="saveButton"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-block rounded-0 w-50"
                  id="clearButton"
                  onClick={() => handleClearForm()}
                >
                  Clear Form
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
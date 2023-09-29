import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AddAnnouncement({ user }) {
  const [values, setValues] = useState({
    title: '',
    description: '',
    categories: '',
    email: user,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const navigate = useNavigate();

  const handlePostAnnouncement = (e) => {
    e.preventDefault();
    // post an announcement
    axios
      .post('http://localhost:3000/announcementsList', values)
      .then((response) => {
        navigate('/user/announcements');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login_main bg-light">
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="form-main">
          <h4 className="mb-4">Add Announcement</h4>
          <form onSubmit={handlePostAnnouncement}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Title"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                placeholder="Description"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="categories"
                placeholder="category"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary float-end">
              Post Announcement
            </button>
            <Link to="/user/announcements" className="btn btn-secondary">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAnnouncement;

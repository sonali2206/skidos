import { useEffect, useState } from 'react';
import axios from 'axios';

function AddComment({ announcementId, user, getAnnouncements }) {
  const [data, setData] = useState({});
  const [comment, setComment] = useState('');

  const currentDate = new Date();
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const postDate = `${date}/${month}/${year} - ${hours}:${minutes}`;

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/announcementsList/${announcementId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err, 'error'));
  }, []);

  const handleSubmitComment = () => {
    console.log(data, 'data');
    const postData = {
      ...data,
      comments: [
        ...(data.comments ? data.comments : []),
        {
          user,
          message: comment,
          commentedAt: postDate,
        },
      ],
    };
    setComment('');
    // Perform API request to add comment
    axios
      .put(
        `http://localhost:3000/announcementsList/${announcementId}`,
        postData,
      )
      .then((response) => {
        getAnnouncements();
        setData(response.data);
      })
      .catch((err) => console.log(err, 'error'));
  };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-emoji-smile"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
        </svg>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Give us some feedback"
        aria-describedby="feedback"
        onChange={handleChange}
        value={comment}
      />
      <button
        className="input-group-text"
        type="button"
        id="feedback"
        onClick={handleSubmitComment}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-send-arrow-up-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.03A4.5 4.5 0 0 0 8 12.5c0 .5 0 1.5-.773.36l-1.59-2.498L.644 7.184l-.002-.001-.41-.261a.5.5 0 0 1 .083-.886l.452-.18.001-.001L15.314.035a.5.5 0 0 1 .54.111ZM6.637 10.07l7.494-7.494.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338Z"
          />
          <path
            fillRule="evenodd"
            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708l-1.25-1.25Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default AddComment;

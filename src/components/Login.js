import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setIsUserLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://reqres.in/api/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        // Authentication successful
        const data = response.data;
        console.log('Authentication successful:', data);
        localStorage.setItem('UserInfo', JSON.stringify(formData.email));
        navigate('/user/announcements');
        setIsUserLogin(true);
        setFormData({ email: '', password: '' });
        setError('');
      } else {
        // Authentication failed
        const data = response.data;
        setError(data.error);
        console.error('Authentication failed:', data);
      }
    } catch (error) {
      setError('An error occurred while processing your request.');
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="login_main bg-light">
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="form-main">
          <h4 className="mb-4">Log in</h4>
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary float-end">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/ProtectedRoute';
import Announcements from './components/announcements/Announcements';
import AddAnnouncement from './components/announcements/AddAnnouncement';
import Header from './components/Header';
import Login from './components/Login';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  useEffect(() => {
    setIsUserLogin(!!JSON.parse(localStorage.getItem('UserInfo')));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} />
        <Routes>
          <Route path="/" element={<Login setIsUserLogin={setIsUserLogin} />} />
          <Route path="/user" element={<PrivateRoute />}>
            <Route path="announcements" element={<Announcements />} />
          </Route>
          <Route path="/user" element={<PrivateRoute />}>
            <Route path="add-announcement" element={<AddAnnouncement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

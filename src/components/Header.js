import { Link } from 'react-router-dom';
import logo from '../assets/skidos-logo.png';

function Header({ isUserLogin, setIsUserLogin }) {
  const handleLogout = () => {
    localStorage.removeItem('UserInfo');
    setIsUserLogin(false);
  };
  return (
    <header className="sticky-top bg-white">
      <div className="container h-100 ">
        <nav className="d-flex align-items-center gap-2 gap-lg-5 h-100">
          <img src={logo} alt="Skidos" width={140} />
          <div className="d-flex flex align-items-center justify-content-between flex-grow-1 h-100">
            <Link className="nav-link" to="/user/announcements">
              Announcements
            </Link>
            {isUserLogin && (
              <Link
                to="/"
                className="btn btn-primary my-2 my-sm-0"
                onClick={handleLogout}
              >
                Log out
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

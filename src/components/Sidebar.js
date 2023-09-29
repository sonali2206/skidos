import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar_main">
      <Link
        to="/user/add-announcement"
        className="btn btn-primary my-2 my-sm-0 d-block"
        type="submit"
      >
        Submit an announcement
      </Link>
    </div>
  );
}

export default Sidebar;

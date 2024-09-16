import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import favicon from '../../img/favicon.ico';
const notifydata = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
}
const successNotify = () => toast.success("You have been successfully logged out.", notifydata);
const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const navigate= useNavigate();
  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleLogout = () => {
    successNotify();
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <>
      <ToastContainer />
      <div className={`navbar ${darkMode ? 'dark' : ''}`}>
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
          <div className="actions">
            <button className="icon-button" onClick={handleToggleTheme}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className="icon-button">
              🔔
              <span className="badge">3</span>
            </button>
            <div className="menu">
              <button className="icon-button">⋮</button>
              <div className="menu-list">
                <button className="menu-item">Profile</button>
                <button className="menu-item">Settings</button>
                <button className="menu-item" onClick={handleLogout}>Logout</button>
              </div>
            </div>
            <img
              className="avatar"
              src={favicon}
              alt="avatar"
            />
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Navbar;

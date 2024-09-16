import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notifydata = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
}
const successNotify = () => toast.success("You have been successfully loggedIn.", notifydata);

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    successNotify();
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <>
    <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h1>Welcome Admin !!!</h1>
            <label>Admin Email</label>
            <input
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              disabled
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value="admin"
              disabled
            />
            <button type="submit">
              Login
            </button>
          </form>
        </div>
        <ToastContainer/>
    </>
  );
};

export default LoginPage;

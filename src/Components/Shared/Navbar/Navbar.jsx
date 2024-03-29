import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
    .then( () => {})
    .catch(error => console.log(error))
  }

  const menuItems = 
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/appointment">Appointment</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/reviews">Reviews</Link></li>

    {
      user?.uid 
      ? <>
          <li><Link to="/dashboard">Dashboard</Link></li> 
          <li><button onClick={handleLogout}>Signout</button></li>
        </>
      : <li><Link to="/login">Login</Link></li> 
    }
  </>
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
            {
              menuItems
            }
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Health Hub</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
          {
            menuItems
          }
          </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  
  return (
    <div>
      <Navbar/>
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet/>
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full text-base-content">
            <li><Link to="/dashboard">My Appointments</Link></li>
            {
              isAdmin && 
              <>
                <li><Link to="/dashboard/allusers">All users</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
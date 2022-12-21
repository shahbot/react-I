import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <div className='nav'>
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/apicomp">Api Sample</Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;

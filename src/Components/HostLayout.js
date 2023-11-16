import React from 'react'
import { Outlet, Link } from "react-router-dom"

function HostLayout() {
  return (
    <div>
        <nav className="host-nav">
            <Link to="/Host">Host</Link>
            <Link to="/Host/Income">Income</Link>
            <Link to="/Host/Reviews">Reviews</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default HostLayout
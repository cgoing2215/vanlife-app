import React from 'react'
import { Outlet, Link } from "react-router-dom"

function HostLayout() {
  return (
    <div>
        <nav>
            <Link to="./pages/Host">Host</Link>
            <Link to="./pages/Host/Income">Income</Link>
            <Link to="./pages/Host/Reviews">Reviews</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default HostLayout
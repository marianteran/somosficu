import React from 'react'

const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white bg-light navbar-light fixed-top ">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="index3.html" className="nav-link">Home</a>
        </li>
      
      </ul>
      
    </nav>

  )
}

export default Header
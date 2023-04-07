import React, {useState} from "react"

const Navbar = ()=>{

  return (
        <nav className="navbar navbar-expand-lg color-dark naaav">
      <div className="container-fluid">
        <a className="navbar-brand text-white fs-4 fw-bold mx-3" to="/">69 SHADES OF ABSAR</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
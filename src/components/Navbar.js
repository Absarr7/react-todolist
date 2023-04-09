import React from "react"

const Navbar = ()=>{

  return (
        <nav className="navbar navbar-expand-lg naaav navbar-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand text-white fs-1 fw-bold mx-3" to="/">ABSAR</h1>
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
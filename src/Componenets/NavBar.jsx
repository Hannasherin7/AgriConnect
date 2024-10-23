import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/signup">SignUp</Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewrec">recepe</Link>
          </li>
      


        <li class="nav-item">
          <Link class="nav-link" to="/addpro">ADDPRODUCT</Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link" to="/deletepro">DELETEPRODUCT</Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link" to="/searchpro">SEARCHPRODUCT</Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewpro">VIEWPRO</Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link" to="/buy">BUy</Link>
          </li>
         
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}



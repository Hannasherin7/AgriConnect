import React from 'react'
import { Link } from 'react-router-dom'

export const Navrec = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">HOME</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/viewrec">RECIPES</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/addrec">Add RECIPE</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/searchrec">SEARCH DETAILS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/deleterec">DELETE DETAILS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/addtip">add tip</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/deletetip">DELETE tip</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/searchtip">search tip</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewtips">view tip</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

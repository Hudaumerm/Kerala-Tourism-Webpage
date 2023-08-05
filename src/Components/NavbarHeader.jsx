import React, { useState } from 'react'
import '../CSS/ThingsToDo.css'
import {Nav,Navbar,Container, Row} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function NavbarHeader() {
  const [show, setshow] = useState(false)
  const [colorChange, setcolorChange] = useState(false)
  const [page, setpage] = useState(true)


  const searchShow=()=>{
    setshow(!show)

  }
  const navbgchange=()=>{
    if(window.scrollY >=100){
      setcolorChange(true)
    }
    else{
      setcolorChange(false)
    }
  }
  const pageChange=()=>{
    setpage(false)
  }
  window.addEventListener('scroll',navbgchange);
  return (
   
       <Navbar expand="lg" className={colorChange?' header-bg':' header'} variant='dark'>
      <Container>
        <Navbar.Brand className="logo" href="#home"><Link to="/">
        <img 
              alt=""
              src="/Images/kerala-tourism-logo.png"
              width="234"
              height="48"
              className="d-inline-block align-top"
            /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto top-menu">
         
            <Nav.Link href="#experience-kerala">EXPERIENCE KERALA</Nav.Link>
            <Nav.Link href="#where-to-go">WHERE TO GO</Nav.Link>
            <Nav.Link href="#home"><Link to={page?("/"):("/wheretostay")} onClick={pageChange}  >WHERE TO STAY</Link></Nav.Link>
            <Nav.Link href="#home"><Link>THINGS TO DO</Link></Nav.Link>
            <Nav.Link href="#home"><Link>PLAN YOUR TRIP</Link></Nav.Link>
            <Nav.Link href="#home"><Link>TRAVEL CARE</Link></Nav.Link>
            <Nav.Link href="#home"><Link>E BROCHERS</Link></Nav.Link>
            <Nav.Link href="#home"><Link>E NEWSLETTER</Link></Nav.Link>
            <Nav.Link href="#home"><BsSearch onClick={searchShow}/></Nav.Link>
            
            {show?(
              <div class="input-group">
              <div class="form-outline">
                <input type="search" id="form1" class="form-control" />
                <label class="form-label" for="form1">Search</label>
              </div>
              <button type="button" class="btn btn-primary">
                <i class="fas fa-search"></i>
              </button>
            </div>
            ):("")}
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

      
    
  )
}

export default NavbarHeader
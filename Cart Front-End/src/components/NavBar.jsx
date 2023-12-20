import { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getToken, logOut } from '../utility/TokenHelper';

function NavBar() {
  const [login, setLogin] = useState(false)

  useEffect(()=> {
    (()=>{
      if(getToken()){
        setLogin(true)
      }else{
        setLogin(false)
      }
    })()
  },[])


  const onlogOut = () => {
    logOut();
    window.location.href="/"
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img className='logo' src="https://st4.depositphotos.com/14009552/38450/v/450/depositphotos_384500344-stock-illustration-shopping-cart-logo-design-letter.jpg"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink href="/">Products</NavLink>
            {login?(<NavLink href="/cart">Cart</NavLink>):(<></>)}
          </Nav>



            {login?(<Button onClick={onlogOut} variant="outline-danger">Logout</Button>):(<Button href="/login" variant="outline-success">Login</Button>)}
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
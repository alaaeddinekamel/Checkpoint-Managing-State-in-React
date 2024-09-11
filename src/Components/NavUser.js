import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavUser =({auth,setAuth})=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">API</Navbar.Brand>
          <Nav className="me-auto">
           <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link> 
           { 
           auth ?
           <>
          <Link to='/ListUsers'><Nav.Link href="#features">Users</Nav.Link></Link>  
          <Nav.Link href="#features" onClick={()=>setAuth(false)}>Lougout</Nav.Link>
          </>
            :
            <Nav.Link href="#features" onClick={()=>setAuth(true)}>Login</Nav.Link>
           }
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavUser
import React ,{ Component } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';

class Compnavbar extends Component{
    render(){
        return(
            <Navbar  bg="dark" expand="lg" fixed="top" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                {/* <img
                  className="germlogo"
                  src="./assets/images/logo.svg"
                  alt="logo"
                /> */}
               Flickr Project
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/photos">Photos</Nav.Link>
                  
                
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
    
}

export default Compnavbar


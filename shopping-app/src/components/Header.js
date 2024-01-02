import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import {FaShoppingCart} from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
function Header() {
    return (
       <Navbar bg="dark" variant="dark" style = {{height : 80}}>
        <Container>
            <NavbarBrand>
                <NavLink to = "/">Shopping Cart</NavLink>
            </NavbarBrand>
            <Navbar.Text className='search'>
            <FormControl type="text" placeholder="Search a Product" className="mr-sm-2 m-auto" />
            </Navbar.Text>
               <Nav>
               <Dropdown alignRight>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color = "white" fontSize= "25px" />
                        <Badge>
                            10
                        </Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style = {{minWidth:370}}>
                        <span style = {{padding :10}}>Cart is empty</span>
                    </Dropdown.Menu>
                </Dropdown>
               </Nav>
        </Container>
       </Navbar>
    );
  }
  
  export default Header;
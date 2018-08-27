import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink as RsNavLink,
} from 'reactstrap';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

    toggle = () => {
    	this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
    	const { isOpen } = this.state;
    	return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand >ShoppingApp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" exact activeClassName="active" >Shopping-List</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>);
    }
}

export default NavBar;

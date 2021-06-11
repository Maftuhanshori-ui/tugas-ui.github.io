import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" variant="dark" dark expand="md">
                <Container>
                    <NavbarBrand href="/"><strong>Turnkey</strong> App</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Identity</NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>

                </Container>

            </Navbar>
        </div>
    );
}

export default NavbarComponent;


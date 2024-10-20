import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Tata_Tamo_Racemo.jpg" width="25" height="25" />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#"> Ajouter Voiture</Nav.Link>
                <Nav.Link href="#">
                    Liste Voitures
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

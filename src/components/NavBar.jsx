import { React, useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Inicio from './utils/Inicio'
import {authContext, useAuth} from '../context/AuthContext'


export default function NavBar() {

    const {userLoged, logout, loading} = useAuth()
    const navigate = useNavigate()
    const USER = JSON.parse(localStorage.getItem("USER"));
    let showUser = false;

    const handleLogout = async () => {
        await logout()
    }
    if (USER) {
        showUser = true
    }

    return (
        <Navbar expand="lg" fixed="top" className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <Container fluid>
                <Navbar.Brand href="#"><Inicio alto={"50px"} title={<h4>Resto Bar</h4>} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#action1"><h5>Promos</h5></Nav.Link>
                        <Nav.Link href="#action1"><h5>Comidas</h5></Nav.Link>
                        <Nav.Link href="#action1"><h5>Bebidas</h5></Nav.Link>
                        <Nav.Link href="#action2"><h5>Postres</h5></Nav.Link>
                    </Nav>
                    {!showUser &&

                        <Nav className='me-5'>
                            <button className='btn btn-primary formBtn black login align-self-center' onClick={() => navigate('/login')}> Iniciar Sesion</button>
                        </Nav>
                    }
                    {showUser &&
                        <Nav className='me-5'>
                            <Nav.Link href="#">
                                <i className="material-icons me-3">local_grocery_store</i>
                            </Nav.Link>
                            <NavDropdown title={USER.name} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3" ><h5>Mi Cuenta</h5></NavDropdown.Item>
                                <NavDropdown.Item href="#action4"><h5>Mis Compras</h5></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    <h5 onClick={handleLogout}>Cerrar Sesion</h5>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


const DivHeader = styled.div`
    position: sticky;
    top:0px;
    left:0px;
    height:60px;
    z-index:99;
   
   .navbar{
    background-color:black;
    z-index:99;
   }

   .btn-secondary{
       background-color:#fc4b08;
       width:100px;
   }
`;


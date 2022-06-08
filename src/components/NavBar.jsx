import {React, useState} from 'react'
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



export default function NavBar() {

    const [stateDialog2, changeStateDialog2] = useState(false);
    const show = useState(true)
    const navigate = useNavigate()

    
  return (
    <DivHeader className='d-flex flex-row w-100'>
        <Nav className="navbar navbar-expand-lg navbar-dark  w-100">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
               
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" ><i className="material-icons" >shopping_cart</i></a>
                        </li>
                    </ul>
                    
                    <button className="btn btn-secondary m-3" onClick={()=> navigate('/login')}>Login</button>

                </div>
            </div>
        </Nav>
    </DivHeader>
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


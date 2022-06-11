import { collection } from 'firebase/firestore'
import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import NavBar from '../NavBar'
import Inicio from '../utils/Inicio'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Images from '../../assets/Images'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import Footer from '../utils/Footer'
import ButtonsMenu from '../utils/ButtonsMenu'


const Entrada = (props) => {

    const navigate = useNavigate()

    return (
        <Content>
            
            <div className="container">
                
                        <Home className="btn px-4 py-5 text-center center ">
                            <Inicio ancho={'150px'} alto={'150px'} />
                            <h1 className="display-3 fw-bold">Resto Bar App</h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3 color-black">Iniciar Sesion</button>

                                </div>
                            </div>
                        </Home>

            </div>

            <ButtonsMenu></ButtonsMenu>
            <Inicio></Inicio>
            
        </Content>


    )
}



export default Entrada

 export const Home = styled.div`
    background-color:#000000fb;
    
  
    align-content:center;
    justify-content:center;

    .color-black{
       background-color:black;
       box-shadow: rgba(252, 75, 8, 0.2) 0px 7px 29px 8px;
    }

    h1{
        color:white;
    }
    &:hover{
        p{
            color:white;
        }

        h1{
            color:#fc4b08;
        }
    }
`;

const Content = styled.div`
  max-width: 1200px;
  margin-bottom:10px;
  
 
  .container{
      align-self:center;
  }

`;

const DivBtn = styled.div`
  .orange{
      
    background-color:#fc4b08;
    color:black;
    border:none;
  }

  .black{
    background-color:black;
  }
  .formBtn{
    box-shadow: rgba(252, 75, 8, 0.2) 0px 7px 29px 8px;
    
    
    z-index:99;
    &:hover{
        box-shadow: none;
    }
  }
`;

const DivSocial=styled.div`
width:60%;

.fa {
  padding: 20px;
  border-radius:50px;
  font-size: 30px;
  width: 50px;
  height:50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;

  background-color:white;

}

`;
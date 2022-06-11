import { collection } from 'firebase/firestore'
import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import NavBar from '../NavBar'
import Inicio from '../utils/Inicio'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaSnapchat, FaHamburger } from 'react-icons/fa';
import ButtonsMenu from '../utils/ButtonsMenu'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { GiDrinkMe, GiWrappedSweet } from 'react-icons/gi'
import MenuProducts from '../products/MenuProducts'
const HomeContent = (props) => {

    const navigate = useNavigate()

    const handleProd = ()=>{
        navigate('/product')
    }

    return (
        <Content className=' btn'>

            <div className=' d-flex col-6"'>
                <Home className="card px-4 py-5 text-center center">
                    <Inicio ancho={'200px'} alto={'200px'} />
                    <h1 className="display-3 fw-bold">Resto Bar App</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3 color-black" onClick={()=>navigate('/login')}>Iniciar Sesion</button>

                        </div>
                    </div>
                </Home>
                <VerticalLine />
            </div>

            <div className='col-6'>
                <h1 className='pt-1 col-white'>Nuestro Menu</h1>
                <Home className=" d-flex flex-col  card mb-3 px-2 py-3 text-center align-items-center">
                    <div className="d-flex  align-items-strech mt-4 ">
                        <div onClick={()=>handleProd()}>
                        <ButtonsMenu
                            ancho={'150px'}
                            alto={'150px'}
                            title={<h2 className='col-white'>Promos</h2>}
                            colorIcon={'black'}
                            bgColor={'#fc4b08'}
                            icon={<MdOutlineLocalOffer />} />
                        </div>

                        <div className='m-4'></div>
                        <ButtonsMenu
                            ancho={'150px'}
                            alto={'150px'}
                            title={<h2 className='col-white'>Comidas</h2>}
                            colorIcon={'#fc4b08'}
                            bgColor={''}
                            icon={<FaHamburger />} />

                    </div>
                    <div className="d-flex justify-content-center align-items-strech mt-4  ">
                        <ButtonsMenu
                            ancho={'150px'}
                            alto={'150px'}
                            title={<h2 className='col-white'>Bebidas</h2>}
                            colorIcon={'#fc4b08'}
                            bgColor={''}
                            icon={<GiDrinkMe />} />
                        <div className='m-4'></div>
                        <ButtonsMenu
                            ancho={'150px'}
                            alto={'150px'}
                            title={<h2 className='col-white'>Postres</h2>}
                            colorIcon={'#fc4b08'}
                            bgColor={''}
                            icon={<GiWrappedSweet 
                            />} />
                    </div>
                </Home>
                <div className="social">
                    <p className='col-white'>Seguinos en </p>
                    <i className='fa'><FaFacebook /></i>
                    <i className='fa'><FaTwitter /></i>
                    <i className='fa'><FaInstagram /></i>
                    <i className='fa'><FaLinkedin /></i>
                    <i className='fa'><FaYoutube /></i>
                    <i className='fa'><FaSnapchat /></i>
                </div>

            </div>

        </Content>




    )
}



export default HomeContent

const Home = styled.div`
    background-color:transparent;
    border:none;
    
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
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    background-color:#000000f5;

    margin:20px;
   .col-white{
       color:white;
   }
   .col-black{
       color:black
   }

   .fa{
    padding: 20px;
    font-size: 30px;
    width: 50px;
    color:white;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    &:hover{
        color:#fc4b08;
    }
   }
    
`;

const VerticalLine = styled.div`

border-left:1px solid white;
height:480px;
margin-top: 50px
`
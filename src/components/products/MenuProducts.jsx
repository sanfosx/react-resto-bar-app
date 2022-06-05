import React from 'react'
import styled from 'styled-components'
import {useNavigate } from 'react-router-dom'
import LogoInitial from '../utils/LogoInitial'
import NavBar from '../NavBar'
import DivContent from '../Home'

const MenuProducts= (props, {children}) => {

  const navigate= useNavigate()
  
  return (
    <>
    <NavBar/>
    <div className='d-flex justify-content-center'>
    <DivMenu  className="card text border-primary ">
          <div className="card-body mb-3 ">
            <LogoInitial ancho='350px' alto='100px' title={<h1 className='display-6 p-1'>RestoBar</h1>}  className='display-6'/>
            
            <DivBtn  className="btn-group-horizontal">
              <button type="button" className={!props.promos?"btn btn-outline-primary formBtn orange":"btn btn-outline-primary formBtn orange disabled"}  onClick={()=>{navigate('/promos')}}><h2>Promos</h2></button>
              <button type="button" className={!props.comidas?"btn btn-primary formBtn black":"btn btn-outline-primary formBtn black disabled"} onClick={()=>navigate('/comidas')}><h2>Comidas</h2></button>
            </DivBtn>
            <DivBtn className="btn-group-horizontal">
              <button type="button" className={!props.bebidas?"btn btn-primary formBtn black":"btn btn-outline-primary formBtn black disabled"} onClick={()=>navigate('/bebidas')}><h2>Bebidas</h2></button>
              <button type="button" className={!props.postres?"btn btn-primary formBtn black":"btn btn-outline-primary formBtn black disabled"} onClick={()=>navigate('/postres')}><h2>Postres</h2></button>
            </DivBtn>
          </div>
          
        </DivMenu>
       
    </div>
   </>
        
    
  )
}

export default MenuProducts

const DivBtn =styled.div`
  
  .orange{
    background-color:#fc4b08;
    border:none;
  }

  .black{
    color:#fc4b08;
  }

  .formBtn{
    width: 150px;
    height: 100px;
    margin-top:20px;
    margin-left: 20px;
    margin-right: 10px;
    z-index:99;
    

    &:hover{
      box-shadow: rgba(0,0,111, 0.2) 0px 7px 29px 8px;
    }
  }
  `;

const DivMenu =styled.div`
    width: 30rem;
    margin:5px;
    height: 400px;
    display:flex;
    align-items:center;
    justify-content:center;

`;
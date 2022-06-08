import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const MenuProducts = (props, { children }) => {
  const navigate = useNavigate()

  return (
    <DivMenu className="card">
      <button className='btn btn-primary formBtn black login align-self-center' onClick={() => navigate('/login')}> Iniciar Sesion</button>
      <div className="row card-body p-2">
        <DivBtn className="btn-group-horizontal   w-50 h-50 col">
          <button type="button" className={!props.promos ? "btn btn-outline-primary formBtn orange h-100 w-100 m-2" : "btn btn-outline-primary formBtn orange disabled"} onClick={() => { navigate('/product') }}><h2>Promos</h2></button>
          <button type="button" className={!props.comidas ? "btn btn-primary formBtn black  h-100 w-100 m-2" : "btn btn-outline-primary formBtn black disabled"} onClick={() => navigate('/product')}><h2>Comidas</h2></button>
        </DivBtn>
        <DivBtn className="btn-group-horizontal  w-50 h-50 col">
          <button type="button" className={!props.bebidas ? "btn btn-primary formBtn black h-100 w-100 m-2" : "btn btn-outline-primary formBtn black disabled"} onClick={() => navigate('/product')}><h2>Bebidas</h2></button>
          <button type="button" className={!props.postres ? "btn btn-primary formBtn black h-100 w-100 m-2" : "btn btn-outline-primary formBtn black disabled"} onClick={() => navigate('/product')}><h2>Postres</h2></button>
        </DivBtn>
      </div>
    </DivMenu>
  )
}

export default MenuProducts

const DivBtn = styled.div`
  .orange{
    background-color:#fc4b08;
    color:black;
    border:none;
  }
  .formBtn{
    z-index:99;
    &:hover{
      box-shadow: rgba(0,0,111, 0.2) 0px 7px 29px 8px;
    }
  }
`;

const DivMenu = styled.div`
    background-color:transparent;
    border:none;
    margin:10px;
    padding:10px;
    width:100%;
    height:90%;
    .login{
      width: 150px;
    }
    .black{
    background-color:black;
    color:#fc4b08;
    }  
`;
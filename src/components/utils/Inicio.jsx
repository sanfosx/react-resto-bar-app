import React from 'react'
import styled from 'styled-components'
import LogoWeb from './LogoWeb';

export default function Inicio({
  children,
  alto,
  ancho,
  sizeTitle,
  title,
  titleAlt,
}) {
  return (
      <DivInicio alto={alto} ancho={ancho} title={title} titleAlt={titleAlt} className="btn btn-primary text-center container-fluid">
        <LogoWeb/>
      <DivMiddle>
            {title}
            {titleAlt}
      </DivMiddle>
      </DivInicio>
  )
}

const DivInicio = styled.div`
    width:${props => props.ancho ? props.ancho :'130px'};
    height: ${props => props.alto ? props.alto :'60px'};
    display: flex;
	  align-items:center;
	  justify-content: center;
    box-shadow: rgba(252, 75, 8, 0.2) 0px 7px 29px 8px;
    svg{
      width:${props => props.ancho ? props.ancho :'130px'};
      height:${props => props.alto ? props.alto :'60px'};
      padding:10px; 
      align-self:center; 
      &:hover{
        fill:#fc4b08;
      } 
    }  
`;

const DivMiddle = styled.div`
    position: absolute;
    background-color:transparent;
    justify-content:center;
    align-items:center;
    padding:2px;
`;
import React from 'react'
import styled from 'styled-components'
import LogoPromo from './LogoPromo';
import promo from '../../assets/img/promo.svg'

export default function ButtonsMenu({
  children,
  alto,
  ancho,
  title,
  titleAlt,
  icon,
  colorIcon,
  bgColor
}) {
  return (
      <DivInicio alto={alto} ancho={ancho} title={title} titleAlt={titleAlt} icon={icon} colorIcon={colorIcon} bgColor={bgColor} className="btn btn-primary text-center container-fluid">
      <i>{icon}</i>
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
    background-color:${props => props.bgColor ? props.bgColor :'black'};
    box-shadow: rgba(252, 75, 8, 0.2) 0px 7px 29px 8px;
    svg{
      width:${props => props.ancho ? props.ancho :'130px'};
      height:${props => props.alto ? props.alto :'60px'};
      padding:20px; 
      align-self:center; 
      fill:${props => props.colorIcon ? props.colorIcon :'#fc4b08'};
    }  
`;

const DivMiddle = styled.div`
    position: absolute;
    background-color:transparent;
    justify-content:center;
    align-items:center;
    margin-top:5px
`;
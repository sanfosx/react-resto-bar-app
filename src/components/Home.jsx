import React from 'react'
import NavBar from './NavBar'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import Images from '../assets/Images'
import LogoInitial from './utils/LogoInitial'

const Home = () => {
  const navigate = useNavigate()

  return (
    <DivContent className='d-flex justify-content-center'>
   
    <DivCar className=" d-flex">
      <div className="card text bg-secondary mb-3 mt-3 pt-4 cardContainer">
        <div className="card-body mb-3 ">
          <LogoInitial
            ancho='90%' alto='40vh' title={<h1 className='display-1 p-1'>RestoBar</h1>} 
            titleAlt={<h1 className='display-1'>App</h1>} className='display-1'>
            </LogoInitial> 
            <p className="card-text-center mt-3 p-2">epudiandae expedita veritatis illum, eos dolores nostrum, voluptatibus ea exercitationem fugit aliquam dignissimos maxime numquam. Consequuntur ut repellendus quis repellat velit eligendi dolorum pariatur officiis molestias doloribus eum a quae ullam hic molestiae, expedita sed nisi, cumque saepe.</p>
            
            <div className="d-grid gap-2">
              <button className="btn btn-lg btn-primary m-2" onClick={ ()=>navigate('/menu')}>Ver mas</button>
            </div>
           
        </div>
      </div>
    </DivCar>
  </DivContent>
  )
}

export default Home

const DivBtn = styled.div`
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
  }
`;
const DivCar = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
    
    .cardContainer{
    width: 30rem;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  
  .btn-primary{
    box-shadow: rgba(0,0,111, 0.2) 0px 7px 29px 8px;
    background-color:#fc4b08;;
  
    &:hover{
      
      background-color:black;

      svg{
        fill:#fc4b08;
      }
    }
  }
`;


export const DivContent = styled.div`
 
  background-size:100%;
  height:100vh;
`;

const DivMenu = styled.div`
  visibility: ${props => props.verMenu ? props.verMenu : 'hidden'};
`;
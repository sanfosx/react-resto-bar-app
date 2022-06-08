import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import Inicio from './utils/Inicio'
import MenuProducts from './products/MenuProducts';

const Home = () => {
  const navigate = useNavigate()

  return (
    <div class="container-fluid m-0">
      <div class="row d-flex flex-wrap-reverse">
      
        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-4 m-0">
          <DivCar className=" d-flex justify-content-end align-items-center ">
            <div className="card text bg-secondary mb-3 mt-3 pt-4 cardContainer">
              <div className="card-body mb-3 ">
                <Inicio
                  ancho='0 auto' alto='55vh' title={<h1 className='display-1 p-1'>RestoBar</h1>}
                  titleAlt={<h1 className='display-1'>App</h1>} className='display-1'>
                </Inicio>
                <p className="card-text-center mt-3 p-2">epudiandae expedita veritatis illum, eos dolores nostrum, voluptatibus ea exercitationem fugit aliquam dignissimos maxime numquam. Consequuntur ut repellendus quis repellat velit eligendi dolorum pariatur officiis molestias doloribus eum a quae ullam hic molestiae, expedita sed nisi, cumque saepe.</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-lg btn-primary m-2" onClick={() => navigate('/menu')}>Ver mas</button>
                </div>
               
              </div>
            </div>
          </DivCar>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-8">
          <div className="d-flex justify-content-start align-items-center w-100 h-100">
          <MenuProducts />
          </div>
        </div>
      </div>
    </div>
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
export const DivCar = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
    
    .cardContainer{
    width: 80vh;
    display:flex;
  }
  
  .btn-primary{
    box-shadow: rgba(252, 75, 8, 0.2) 0px 7px 29px 8px;
    background-color:#fc4b08;;
  
    &:hover{
      background-color:black;

      svg{
        fill:#fc4b08;
      }
    }
  }

  .footer{

    justify-content:center;
    width:100%;
  }
`;


export const DivContent = styled.div`
  background-size:auto;
  height:100vh;
`;

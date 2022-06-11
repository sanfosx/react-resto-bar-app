import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'

const ShoppingCart = (props) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState()
  const USER = JSON.parse(localStorage.getItem("USER"));
  const cartId = 'cart-' + USER.uid


  const readDBCart = () => {//lee en la bd de carritos y actualiza con cualquier cambio
    onSnapshot(collection(db, cartId), (doc2) => {
      const docs2 = []
      let tot = 0
      doc2.forEach(element => {
        docs2.push({ ...element.data(), id: element.id })
        tot = tot + element.data().total
      });
      setCart(docs2)
      setTotal(tot)
    })

  }
  useEffect(() => {
    readDBCart()
    console.log('leyendo Carrrito...')
    
  },[]);

  return (
    <div className='container-fluid'>ShoppingCart
      <div className='container'>
        {cart.map((dato) => (

          <div className="card m-1 " key={dato.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{dato.name}</h4>
                <div>
                  <i className='material-icons text-info' onClick={() => console.log('press1')}>create</i>
                  <i className='material-icons text-danger' onClick={() => console.log('delete') }>close</i>
                </div>
              </div>
              <p>{dato.description}</p>
              <p>Cantidad: {dato.cant}</p>
              <p>Precio Unitario: ${dato.precio}.00</p>
              <p>Total: ${dato.total}.00</p>
            </div>
            
          </div>
        ))}
        <div className="card m-1">
          <h1>Total a pagar: ${total}</h1>
        </div>
      </div>

    </div>


  )
}

export default ShoppingCart
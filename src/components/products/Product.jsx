import React, { useEffect, useState } from 'react'
import Inicio from '../utils/Inicio'
import MenuProducts from './MenuProducts'
import { collection, doc, onSnapshot, deleteDoc, setDoc, updateDoc, increment } from "firebase/firestore"
import { db } from '../../firebaseConfig'
import styled from 'styled-components'
import { Offcanvas } from 'react-bootstrap'
import Dialogs from '../utils/Dialogs'
import NavBar from '../../components/NavBar'

const Product = () => {

    const [datos, setDatos] = useState([])
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [stateDialog1, changeStateDialog1] = useState(false);
    const [stateDialog2, changeStateDialog2] = useState(false);
    const [userId, setUserId] = useState('');
    const [total, setTotal] = useState(0)
    const USER = JSON.parse(localStorage.getItem("USER"));
    const  cartId = 'cart-' +USER.uid
  
    const readDB =  () => {//lee en la bd de productos y actualiza con cualquier cambio
        onSnapshot(collection(db, 'datos'), (doc) => {
            const docs = []
            doc.forEach(element => {
                docs.push({ ...element.data(), id: element.id })
            });
            setDatos(docs)
            console.log('Los products', docs)
        })
    }

    const readDBCart =  () => {//lee en la bd de carritos y actualiza con cualquier cambio
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

    const addToCart = async (id) => {//Agrega al carrito o modifica la cantidad si el producto ya existe en el carrito
        const idx = datos.findIndex(element => element.id === id)//busco la posicion dentro del arreglo productos
        const existIdx = cart.findIndex(element => element.id === id)//busco la posicion si es que existe en el arreglo de carrito
        const item = datos[idx]

        if (existIdx === -1) {//si no existe el producto en carrito agrego
            item.cant = 1
            item.total = item.precio * item.cant
            await setDoc(doc(db, cartId, item.id), item)
        } else {// el producto existe en el carrito por lo tanto modifico la cantidad
            const updateCart = cart
            updateCart[existIdx].cant++
            updateCart[existIdx].total = updateCart[existIdx].precio * updateCart[existIdx].cant
            await updateDoc(doc(db, cartId, item.id), {
                cant: increment(1),
                total: updateCart[existIdx].total
            })
        }
    }

    const onDeleteInDB = async (id) => { //borro el producto con id de la bd carrito
        await deleteDoc(doc(db, cartId, id));
    }

    const clearCart = () => {// borro todo el carrito de la bd
        cart.forEach(async e => {
            await deleteDoc(doc(db, cartId, e.id))
        })
    }

    useEffect(() => {
        readDBCart()
        readDB()
    },[]);

    return (
        <div class="container-fluid m-0">
            <NavBar></NavBar>
            <div class="row d-flex">
                <div class="card text bg-secondary mb-3 mt-3 pt-4 col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-4 m-0 h-100">
                    <Inicio ancho={'0 auto'} alto={'100px'} title={<h1>Resto Bar</h1>}></Inicio>
                    <div className="d-flex justify-content-start align-items-center w-100 h-100">
                        <MenuProducts />
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-8  m-0 h-100">
                    <DivProd className="card text border-primary m-3 p-3">
                        <h1>Products</h1>
                        <div className='scrollb'>
                            {datos.map((dato) => (
                                <div className="card m-1 " key={dato.id}>
                                    <div className="card-body">
                                        <h4>{dato.name}</h4>
                                        <p>{dato.description}</p>
                                        <p>${dato.precio}.00</p>
                                    </div>
                                    <button className='btn btn-primary m-2' onClick={() => { handleShow(); addToCart(dato.id) }}> add to cart</button>
                                </div>
                            ))}
                        </div>
                    </DivProd>
                </div>
            </div>

            <Offcanvas show={show} placement={'end'} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className='d-flex '>
                            <h1>Carrito</h1>
                            <i className='material-icons text-danger' onClick={() => { changeStateDialog2(!stateDialog2) }}>delete</i>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <DivCanvas className=" d-flex flex-column justify-content-md-between">
                        <div className='container'>
                            {cart.map((dato) => (

                                <div className="card m-1 " key={dato.id}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h4>{dato.name}</h4>
                                            <div>
                                                <i className='material-icons text-info' onClick={() => console.log('press1')}>create</i>
                                                <i className='material-icons text-danger' onClick={() => { changeStateDialog1(!stateDialog1);  setUserId(dato.id) }}>close</i>
                                            </div>
                                        </div>
                                        <p>{dato.description}</p>
                                        <p>Cantidad: {dato.cant}</p>
                                        <p>Precio Unitario: ${dato.precio}.00</p>
                                        <p>Total: ${dato.total}.00</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </DivCanvas>
                    <p>Total a pagar: ${total}.00</p>
                    <button className='btn btn-primary m-3'><h3>Finalizar Compra</h3></button>
                    <Dialogs
                        state={stateDialog1}
                        changeStateDialog={changeStateDialog1}
                        paddingDialog={'20px'}
                        positionDialog={'center'}
                        showHeaderDialog={false}
                        showOverlayDialog={true}
                        showCloseBtn={false}
                        titleDialog='is a title'>

                        <h1 className="text-danger"> <span>Esta seguro de Eliminar</span></h1>
                        <p className=" text-center text-danger m-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sint.</p>
                        <div>
                            <button className="btn btn-outline-primary m-2" onClick={() => { changeStateDialog1(!stateDialog1) }}>cancel</button>
                            <button className="btn btn-danger m-2" onClick={() => { onDeleteInDB(userId); changeStateDialog1(!stateDialog1) }}>Borrar</button>
                        </div>
                    </Dialogs>

                    <Dialogs
                        state={stateDialog2}
                        changeStateDialog={changeStateDialog2}
                        paddingDialog={'20px'}
                        positionDialog={'center'}
                        showHeaderDialog={false}
                        showOverlayDialog={true}
                        showCloseBtn={false}
                        titleDialog='is a title'>

                        <h1 className="text-danger"> <span>Esta seguro de Eliminar</span></h1>
                        <p className=" text-center text-danger m-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sint.</p>
                        <div>
                            <button className="btn btn-outline-primary m-2" onClick={() => { changeStateDialog2(!stateDialog2) }}>cancel</button>
                            <button className="btn btn-danger m-2" onClick={() => { clearCart(); changeStateDialog2(!stateDialog2) }}>Borrar</button>
                        </div>
                    </Dialogs>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Product

const DivCanvas = styled.div`
    height:65vh;
    .card{
        height:200px
    }
    .container{
        height:auto;
        overflow:auto;
        &::-webkit-scrollbar{
            width: 5px;
            margin: 1px;
        }
        &::-webkit-scrollbar-thumb{
            background: #fc4b08;
            margin:1px;
        }
    }
    .button{
        bottom:0;
        align-self:center;
    }
`;

const DivProd = styled.div`
    width: 95%;
    height:95vh;
   .scrollb{
    overflow: auto;
    &::-webkit-scrollbar{
        width: 5px;
        margin: 1px;
    }
    &::-webkit-scrollbar-thumb{
        background: #fc4b08;
        margin:1px;
    }
   }
   .btn-primary{
       width:150px;
       align-self:center;
   }
`;
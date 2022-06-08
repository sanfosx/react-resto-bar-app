import { React, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Alerts from './utils/Alerts'

function Register() {
    const { signup, addUserInFirestore } = useAuth();
    const [error, setError] = useState();
    const navigate = useNavigate();
    const inicialStateValues = {
        userName: '',
        userEmail: '',
        userPassword: '',
    };
    const [user, setUser] = useState(inicialStateValues);

    const handleSubmit = async (e) => { // maneja el btn save
        e.preventDefault();
        //tengo que validar que tiene todo lo q necesita primero @valid_form(values)
        try {
            await signup(user.userEmail, user.userPassword).then((userCredential) => {
                // Signed in
                const userDb = userCredential.user;
                console.log('USUARIO CREADO', userDb)
                addUserInFirestore(userDb.uid, user)
                navigate('/')
            })
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
        setUser({ ...inicialStateValues })
    };

    const handleInputChange = e => {// maneja los cambios del input
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log(name, value)
    }

    return (

        <form className="card bg-secondary card-body" onSubmit={handleSubmit}>
            <h1 className="text-center display-1">Register</h1>
            {error && <Alerts message={error} />}
            <div className="form-group input-group p-3">
                <div className="input-group-text bg-light">
                    <i className="material-icons">person</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="your name"
                    name="userName"
                    onChange={handleInputChange}
                    value={user.userName}
                />
            </div>
            <div className="form-group input-group p-3">
                <div className="input-group-text bg-light">
                    <i className="material-icons">email</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="your email"
                    name="userEmail"
                    onChange={handleInputChange}
                    value={user.userEmail}
                />
            </div>
            <div className="form-group input-group p-3">
                <div className="input-group-text bg-light">
                    <i className="material-icons">lock</i>
                </div>
                <input
                    type="password"
                    className="form-control"
                    placeholder="your password"
                    name="userPassword"
                    onChange={handleInputChange}
                    value={user.userPassword}
                />
            </div>
            <div className="form-check mx-4 pl-5 pt-4">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label " for="flexCheckDefault">
                    <p> Soy mayor de 18 años </p>
                </label>
            </div>
            <div className="form-check mx-4 pl-5">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label " for="flexCheckDefault">
                    <p> Al registrame acpto todos los terminos y condiciones. </p>
                </label>
            </div>
            <button className="btn btn-success btn-block m-3" onClick={handleSubmit}>Register</button>
            <strong className='text-center'>Cookies y politicas de seguridad</strong>
        </form>
    )
}

export default Register
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      email: email,
    };

    await axios.post('http://localhost:4000/', newUser);

    navigate('/list');
  };
  return (
    <div className='container d-flex justify-content-center'>
      <div className='col-sm-6'>
        <h1>Formulario de Registro</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label className='control-label' for='user-github'>
              Usuario Github:
            </label>
            <input
              type='text'
              className='form-control input-lg'
              id='user-github'
              placeholder='Ingresa un usuario'
              onChange={handleUserChange}
            />
            <p className='help-block'></p>
          </div>
          <div className='form-group'>
            <label className='control-label' for='email'>
              Correo:
            </label>
            <input
              type='email'
              className='form-control input-lg'
              id='passcode'
              placeholder='Ingresa un correo'
              onChange={handleEmailChange}
            />
            <p className='help-block'></p>
          </div>
          <div className='checkbox terms-checkbox'>
            <label>
              <input type='checkbox' id='terms' /> Acepto los términos y
              condiciones
            </label>
          </div>
          <div className='action text-right'>
            <button className='btn btn-primary btn-block btn-lg'>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

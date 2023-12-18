import "../assets/css/Register.css";
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showNotification = (message, type) => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(message, { type });
        }
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      showNotification('Las contraseñas no coinciden', 'error');
      return;
    }

    try {
      const response = await axios.post('https://mi-super-api.com/registro', formData);
      console.log('Respuesta del servidor:', response.data);
      showNotification('Registro exitoso', 'success');
    } catch (error) {
      setError('Error al enviar los datos');
      console.error('Error al enviar los datos:', error.message);
      showNotification('Error al enviar los datos', 'error');
    }
  };

  return (
    <div className="register-container">
      <h2 className="titulo-register">Registro</h2>
      <form onSubmit={handleSubmit} className="form-register">
        <label className="input-register">
          Usuario:
          <input className="input-register"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label className="input-register">
          Correo Electrónico:
          <input className="input-register"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="input-register">
          Contraseña:
          <input className="input-register"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
            {error && <div className="error-message">{error}</div>}
        </label>
        <label className="input-register">
          Confirmar Contraseña:
          <input className="input-register"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="btn-register" type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;

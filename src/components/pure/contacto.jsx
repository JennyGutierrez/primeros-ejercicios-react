import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';

const ContactoComponent = ({contact}) => {
  //* const [variable, metodoparaactualizarla] = useState(valorInicial);
  const [EstadoConectado, setconectado] = useState(false);

  const enLinea = () => {
    setconectado(current => !current);
  }
  
  return(
    <div>
      <h2>Nombre: { contact.nombre } </h2>
      <h2>Apellido: { contact.apellido } </h2>
      <h2>Email: { contact.email } </h2>
      <h3>Contacto: { EstadoConectado ? 'En Línea':'No Disponible' } </h3>

      <button  onClick={ enLinea }>Cambiar estado de contacto</button>
    </div>
  )
}

ContactoComponent.protoTypes = {
  contact: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent;

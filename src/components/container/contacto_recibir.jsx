import React from 'react';
import { Contacto } from "../../models/contact.class";
import ContactoComponent from '../pure/contacto';

const ContactoRecibirComponent = () => {

  const defaultContact = new Contacto('Jenny', 'Gutierrez', 'correo@ejemplo.com', false)

  return(
    <div>
      <div><h1>Nuevo contacto</h1></div>
      <ContactoComponent contact={defaultContact}/>
    </div>
  )
}

export default ContactoRecibirComponent;
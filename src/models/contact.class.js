// clase del contacto
export class Contacto{
  nombre = '';
  apellido = '';
  email = '';
  conectado = false; //este indica si la persona esta conectado o no

  //constructor
  constructor(nombre,apellido,email, conectado){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.conectado = conectado;
  }
}
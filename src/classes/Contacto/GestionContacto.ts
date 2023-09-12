import { Contacto } from './Contacto'

export class ContactList {
  // Creamos un array que almacena la lista de contactos
  private contactos: Contacto[] = []

    addContact (contact:Contacto) {
        return this.contactos.push(contact)
    }

    // busco el contacto por el nombre, y filtro en un nuevo array
    findContactByName (name:string) {
        return this.contactos.filter(contact => contact.nombre === name)
    }

  //muestro todos los contactos
    getAllContacts () {
        return this.contactos
    }
}

const lista = new ContactList()

const contacto1: Contacto = {
  nombre: 'Monte',
  correo: 'montekpo@gmail.com',
  telefono: '+54 9 370 532-8696'
}
lista.addContact(contacto1)

const contacto2: Contacto = {
  nombre: 'Juan',
  correo: 'JuanRamon04@gmail.com',
  telefono: '+54 9 370 589-6432'
}

lista.addContact(contacto2)

console.log(lista.findContactByName('Monte'))
console.log(lista.getAllContacts())

import { Book } from './Libro';

export class Library {
  private books: Array<Book> = [];

  //Generador de ids
  private generarId(): number {
    const ids = this.books.map(e => e.getBook().id);

    // si no existen algun libro le doy el id 0
    if (!ids.length) {
      ids.push(0);
    }

    return Math.max(...ids) + 1;
  }

  // agrega un nuevo libro
  addBook(book: Book): void {
    const newId = this.generarId();
    book.setId(newId);
    this.books.push(book);
  }

  // llamo todos los libros de la biblioteca
  getBooks(): Array<Book> {
    return this.books;
  }

  // llamo los libros no ocupados
  getBooksNotTaken(): Array<Book> {
    return this.books.filter(book => book.isAvailable());
  }

  // llamo los libros ocupado
  getBooksTaken(): Array<Book> {
    return this.books.filter(book => !book.isAvailable());
  }

  // Cambio la disponibilidad del libro por su ID
  changeBookAvailability(id: number): string {
    const bookToChange = this.books.find(book => book.getBook().id === id);

    if (bookToChange) {
      return bookToChange.toggleAvailability();
    } else {
      return 'El libro no existe en la biblioteca';
    }
  }
}

const libreria = new Library();

const libro1 = new Book({
  titulo: 'libro1',
  autor: 'Marcos',
  taken: 'disponible'
});

const libro2 = new Book({
  titulo: 'libro2',
  autor: 'Montellano',
  taken: 'disponible'
});

libreria.addBook(libro1);
libreria.addBook(libro2);

console.log('Todos los libros en la biblioteca:');
console.log(libreria.getBooks());

console.log('Cambio la disponibilidad de libro2:');
libreria.changeBookAvailability(libro2.getBook().id);

console.log('Libros ocupados en la biblioteca:');
console.log(libreria.getBooksTaken());

console.log('Libros no ocupados en la biblioteca:');
console.log(libreria.getBooksNotTaken());
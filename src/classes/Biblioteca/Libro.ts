//interface Libro que contiene los componentes del libro
interface Libro {
    id: number;
    titulo: string;
    autor: string;
    taken: boolean;
}

export class Book {
    private id: number = 0;
    private title: string;
    private author: string;
    private taken: boolean;
    private idEdited: boolean = false;

    //inicializo la propiedad libro
    constructor({ titulo, autor, taken }: { titulo: string, autor: string, taken: string }) {
        this.title = titulo;
        this.author = autor;
        this.taken = taken.toLowerCase() === 'disponible';
    }

    //traigo la informacion del libro
    getBook(): Libro {
        return {
            id: this.id,
            autor: this.author,
            titulo: this.title,
            taken: this.taken
        };
    }

    //verifico si el libro esta disponible
    isAvailable(): boolean {
        return !this.taken;
    }

    //cambiar la disponibilidad de libro
    toggleAvailability(): string {
        this.taken = !this.taken;
        return this.taken ? 'disponible' : 'prestado';
    }

    //doy un id en caso que no tenga
    setId(id: number): string {
        if (!this.idEdited) {
            this.id = id;
            this.idEdited = true;
            return 'Id cambiado';
        }
        return 'No se puede cambiar el Id';
    }
}

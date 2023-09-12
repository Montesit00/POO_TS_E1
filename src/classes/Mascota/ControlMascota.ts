import { MascotaVirtual } from './Mascota'

export class GestorMascotas {
  private mascotas: Array<MascotaVirtual> = []

  //agrego la mascota
  agregarMascota (mascota:MascotaVirtual) {
    this.mascotas.push(mascota)
  }

  //lista de mascotas
  obtenerMascotas (): Array<MascotaVirtual> {
    return this.mascotas
  }

  //lista de mascota por nombre
  obtenerUnaMascota (nombre:string): MascotaVirtual | undefined {
    //busco por el nombre de la mascota
    return this.mascotas.find(mascota => mascota.obtenerMascota().nombre === nombre)
  }

  //alimentar a la mascota
  alimentarMascota (mascota: MascotaVirtual): string {
    return mascota.alimentarMascota()
  }

  //jugar con la mascota
  jugarConMascota (mascota: MascotaVirtual): string {
    return mascota.jugarConMascota()
  }

  // Método para cuidar a una mascota
  cuidarMascota (mascota: MascotaVirtual): string {
    return mascota.cuidarMascota()
  }
}

const mascota1 = new MascotaVirtual({
  nombre: 'Tobi',
  vida: 100,
  raza: 'Callejera',
  cuidada: true,
  felicidad: 100,
  hambre: 100
})

const mascota2 = new MascotaVirtual({
  nombre: 'Rocky',
  vida: 100,
  raza: 'Callejera',
  cuidada: true,
  felicidad: 100,
  hambre: 100
})

const gestorMascotas = new GestorMascotas()
gestorMascotas.agregarMascota(mascota1)
gestorMascotas.agregarMascota(mascota2)

console.log(gestorMascotas.obtenerMascotas())

const mascotaEncontrada = gestorMascotas.obtenerUnaMascota(mascota1.nombre)
if (mascotaEncontrada) {
  console.log(mascotaEncontrada.obtenerMascota())
}

console.log(gestorMascotas.jugarConMascota(mascota1))
console.log(gestorMascotas.cuidarMascota(mascota1))
console.log(gestorMascotas.alimentarMascota(mascota1))
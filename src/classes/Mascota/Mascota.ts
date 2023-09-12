interface Mascota { //defino la mascota y sus propiedades
    nombre: string;
    felicidad: number;
    raza: string;
    hambre: number;
    vida: number;
    cuidada: boolean;
  }
  
  export class MascotaVirtual {  
    readonly nombre: string; //readonly para que no se pueda cambiar el nombre una vez dado
    private felicidad: number;
    private raza: string;
    private hambre: number;
    private vida: number;
    private cuidada: boolean;
  
    //inicializo las propiedades de la mascota
    constructor({ nombre, felicidad, raza, hambre, vida, cuidada }: Mascota) {
      this.nombre = nombre;
      this.felicidad = felicidad;
      this.raza = raza;
      this.hambre = hambre;
      this.vida = vida;
      this.cuidada = cuidada;
    }
  
    //obtener la info de la mascota
    obtenerMascota(): Mascota {
      return {
        nombre: this.nombre,
        felicidad: this.felicidad,
        raza: this.raza,
        hambre: this.hambre,
        vida: this.vida,
        cuidada: this.cuidada
      };
    }
  
    //cuidadr a la mascota
    cuidarMascota(): string {
      if (this.felicidad < 40 || this.hambre < 60) {
        this.vida = Math.max(this.vida - 5, 10); // la vida no sea menor a 10
        this.cuidada = false;
        return `Tu mascota ${this.nombre} está descuidada.`;
      }
  
      this.cuidada = true;
      return `Tu mascota ${this.nombre} está bien cuidada.`;
    }
    
    //alimentar a la mascota
    alimentarMascota(): string {
      if (this.hambre >= 100) {
        this.vida = Math.min(this.vida + 5, 100); // la vida no pase los 100
        this.felicidad += 5;
        this.hambre = Math.min(this.hambre + 20, 150); // comida no sea mayor a  150
        return `Alimentaste a ${this.nombre}. Ahora su nivel de hambre es: ${this.hambre} y tiene ${this.vida} HP.`;
      }
  
      if (this.hambre < 60) {
        this.vida = Math.max(this.vida - 5, 10); // la vida no sea menor a 10
        this.hambre = Math.min(this.hambre + 20, 150); // comida no sea mayor a  150
        return `Alimentaste a ${this.nombre}. Ahora su nivel de hambre es: ${this.hambre}.`;
      }
  
      if (this.hambre >= 150) {
        return `No puedes alimentar a ${this.nombre} porque está lleno/a. Hazlo/a jugar un poco.`;
      }
  
      this.hambre = Math.min(this.hambre + 20, 150); // comida no sea mayor a  1500
      return `Alimentaste a ${this.nombre}. Ahora su nivel de hambre es de: ${this.hambre}.`;
    }
  
    //jugar con la mascota
    jugarConMascota(): string {
      if (this.hambre < 60) {
        this.ReducirVida()
        this.vida = Math.max(this.vida - 5, 10); // Asegura que la vida no sea menor a 10
        this.felicidad = Math.max(this.felicidad - 20, 0); // asegura que la felicidad no sea menor a 0
        return `${this.nombre} no quiere jugar porque tiene hambre. Aliméntalo/a.`;
      }
  
      this.hambre = Math.max(this.hambre - 20, 0); // la comida no sea menor a 0
      this.felicidad += 10;
      return `Jugaste con ${this.nombre}. Ahora está más alegre!`;
    }

    //reduce la vida y la felicidad de la mascota apartir de jugarconmascota
    private ReducirVida () {
        if (this.vida >= 10) { this.vida -= 5 }
        this.felicidad -= 20
      }
  }
  
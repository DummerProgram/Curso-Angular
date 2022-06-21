interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
  nombre: 'Spider-Man',
  edad: 30,
  direccion: {
    calle: 'Main St',
    pais: 'USA',
    ciudad: 'NY',
  },
  mostrarDireccion: function () {
    return `${this.direccion.calle}, ${this.direccion.pais}, ${this.direccion.ciudad}`;
  },
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

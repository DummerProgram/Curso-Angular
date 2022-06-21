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

interface Objeto1 {
  valor1?: string;
  valor2: number;
  valor3: boolean;
  valor4?: Objeto2;
}

interface Objeto2 {
  valor1?: string;
  valor2: number;
  valor3: boolean;
}

const objeto: Objeto1 = {
  valor2: 1,
  valor3: true,
  valor4: {
    valor2: 2,
    valor3: false,
  },
};

const { valor4 } = objeto;
const { valor3 } = valor4;

console.log(objeto);

const arreglo: string[] = ['cadena1', 'cadena2', 'cadena3'];

console.log(arreglo);

const [valor1] = arreglo;
const [, , v3] = arreglo;

console.log({ valor1: valor1, valor3: v3 });

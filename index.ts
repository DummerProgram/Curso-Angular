interface Producto {
  nombre: string;
  precio: number;
}

const objeto1: Producto = {
  nombre: 'Telefono',
  precio: 100,
};
const objeto2: Producto = {
  nombre: 'Tableta',
  precio: 200,
};

const calcularISV = (productos: Producto[]): [number, number] => {
  let total: number = 0;
  productos.forEach(({ precio }) => (total += precio));
  return [total, total * 0.15];
};

const articulos: Producto[] = [objeto1, objeto2];
const [total, isv]: number[] = calcularISV(articulos);
console.log(`Total: ${total}`);
console.log(`ISV: ${isv}`);

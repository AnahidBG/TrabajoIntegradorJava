const path = requiere('path');
const fs = requiere('fs');

const ruta = path. resolve(__dirname, '../data/products.json');
const jsonProducts = fs.readFileSync(ruta, { encoding: 'utf-8'});
let products = JSON.parse(jsonProducts);

console.log(products);


const controller = {
    crear: (req, res) => {
        res.json('Crear un producto');
    },
    listar:(req, res) =>{
        res.json('Listado de productos');
    },
    detalle:(req,res) =>{
        res.json('Detalle del producto')
    },
}

module.exports = controller;
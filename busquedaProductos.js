/*
Guía para realizar búsqueda de productos por Nombre en Javascript
Los productos fueron cargados manualmente en el archivo
Tema: Búsqueda de Productos por Nombre.
*/

var productos= [
  {
    "nombre": "Nintendo 64",
    "precio": 75000,
    "codigo": "0543236543",
    "caracteristicas": ["trae 2 juegos gratis", "color negro o azul"]
  },
  {
    "nombre": "celular",
    "precio": 170000,
    "codigo": "0994372684",
    "caracteristicas": ["modelo Samsung A72","memoria RAM 4 GB", "Almacenamiento 256 GB"]
  },
  {
    "nombre": "remera Star Wars",
    "precio": 2000,
    "codigo": "0487345643",
    "caracteristicas": ["modelo Darth Vader o Jedi", "Tallas L M o XL"]
  }
];

function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].nombre === nombre) {
        return productos[i][propiedad] || "La propiedad no existe";
    }
  }
  return "El producto no está en la lista";
}
  


console.log(buscarPerfil("celular","caracteristicas"));
console.log(buscarPerfil("celular","precio"));
const persona = {
    nombre: 'Gus',
    apellido: 'Ceballos',
    edad: 45,
    direccion:{
        ciudad: 'Las Vegas',
        zip: 3124325,
        lat: 12.12312,
        lng: 3.1416
    }
};

//console.table( {persona} );



const persona2 = {...persona};
persona2.nombre = "Peter";
console.log( persona )
console.log(persona2)
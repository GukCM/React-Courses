//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Gus',
    edad: 45,
    clave: 'Ironman',
};

const {nombre, edad, clave} = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const useContext = ({nombre,edad, clave, rango='Capitan'}) =>{

    // console.log(nombre, edad)
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.1124125,
            lng: -3.14156,
        }
    }
}


const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
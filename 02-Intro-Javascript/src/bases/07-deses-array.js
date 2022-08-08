const personajes = ['Goku', 'Bills', 'ZenoSama'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

const useState = (valor) =>{
    return [valor, ()=>{console.log('Hola mundo')}];
}

const arr = useState('Goku');
const [nombre, setNombre] = arr
console.log(nombre);
setNombre();
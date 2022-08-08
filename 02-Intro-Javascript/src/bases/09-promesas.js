import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) =>{ 

//     setTimeout(()=>{
//         const heroe = getHeroeById(2);
//         resolve(heroe)
//     }, 2000)
// });

// promesa.then((heroe) =>{
//     console.log('heroe', heroe)
// })

// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) =>{
    
return new Promise( (resolve, reject) =>{ 

    setTimeout(()=>{
        //Tarea
        //Importa
        const p1 = getHeroeById(id);
        if (p1){
            resolve(p1);
        }else{
            reject('No se pudo encontrar el héroe')
        }
        //resolve heroe
        //reject
    }, 2000)
});

}
getHeroeByIdAsync(1).
then(console.log)
// then(heroe => console.log('Heroe', heroe))
.catch(console.warn)
// .catch(err => console.warn(err))
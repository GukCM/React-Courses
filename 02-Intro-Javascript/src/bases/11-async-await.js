// const getImagenPromesa = () => 
// new Promise(resolve => resolve('https://asdadsadas.com'));


const getImage = async() =>{
    try{
    const apiKey= 'tf4ElHzMhYipMVK0WFchzjP87jiftSgP';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    
    const {url} = data.images.original; 
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

    }catch (error){
        console.error(error)
    }
}
getImage()



// peticion
// //El resultado de esta promesa, es una promesa y pasa al siguiente then
// .then(resp => resp.json())
// //Este then interpetra la promesa de la respuesta de "resp.json()"
// .then(({data}) => {
//     const {url} = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img)
// })
// .catch(console.warn);
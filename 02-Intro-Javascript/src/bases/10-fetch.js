const apiKey= 'tf4ElHzMhYipMVK0WFchzjP87jiftSgP';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
//El resultado de esta promesa, es una promesa y pasa al siguiente then
.then(resp => resp.json())
//Este then interpetra la promesa de la respuesta de "resp.json()"
.then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img)
})
.catch(console.warn);
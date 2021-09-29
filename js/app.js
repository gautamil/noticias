window.addEventListener('load',function(){
    const contNoticia= document.querySelector(".bloquesNoticias");
    renderizadoNoticias();
})


function renderizadoNoticias(){
    for(let i=0; i<listado.length; i++){
        contNoticia.innerHTML += `<article>
        <img src="${listadoNoticias.imgUrl}" alt="Imagen noticia">
        <h2>
            ${listadoNoticias.titulo}
        </h2>
        <p>
            ${listadoNoticias.descripcion}
        </p>
        <p>
            ${listadoNoticias.fecha}
        </p>
        </article>`
    }
}
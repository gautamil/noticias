window.addEventListener('load',function(){
    const contNoticia= document.querySelector(".bloquesNoticias");
    console.log(contNoticia);
    renderizadoNoticias(noticias);
    function renderizadoNoticias(listado){
        for(let i=0; i<listado.length; i++){
            contNoticia.innerHTML += `<article class=${listado[i].tipoNacional!=true? "internacional": ""}>
            <img src="${listado[i].imgUrl}" alt="Imagen noticia">
            <h2>
                ${listado[i].titulo}
            </h2>
            <p>
                ${listado[i].descripcion}
            </p>
            <p>
                ${listado[i].fecha}
            </p>
            </article>`;
    
        }
    }
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


/*Nome das classes de capa que estão na section do html*/
capasHtml = ['.capa0','.capa1','.capa2','.capa3','.capa4','.capa5','.capa6','.capa7','.capa8','.capa9']

/*variável que será atribuída cada elemento das classes acima*/
let capa

/*Nomes que estão sendo referenciados no css*/
capas = ['foto-capa0','foto-capa1','foto-capa2','foto-capa3','foto-capa4','foto-capa5','foto-capa6','foto-capa7','foto-capa8','foto-capa9']

/*Nome dos filmes*/
filmes = ["UMBRELLA ACADEMY","STAR WARS: A ASCENSÃO SKYWALKER","POKEMÓN",
        "CAPITÃO AMÉRICA: GUERRA CIVIL","O HOBBIT: A BATLHA DOS CINCOS EXÉRCITOS",
        "BREAKING BAD","HOUSE","SUPERNATURAL","SMALVILLE","VINGADORES: GUERRA INFINITA"]

/*/*variável que será atribuída o nome de cada filme acima para exibir o título*/
let filme


let mostrarCapa = (id) => {
    if (document.getElementById("capas").style.display == "none"){
        document.getElementById("capas").style.display = "block"
        mostrarTitulo(id)
        mostrarClasse(id).classList.add(capas[id])
    }else{
        document.getElementById("capas").style.display = "none"
        ocultarTitulo()
        ocultarClasse(id)
    }
}

let mostrarTitulo = (id) => {
    filme = document.createTextNode(filmes[id])
    document.getElementById('titulo').appendChild(filme);
}

let ocultarTitulo = () => {
    document.getElementById('titulo').removeChild(filme)
}

let mostrarClasse = (id) => {
    capa = document.querySelector(capasHtml[id])
    return capa
}

let ocultarClasse = (id) => {
    for (i in capasHtml){
        capa = document.querySelector(capasHtml[i])
        capa.classList.remove(capas[i])
    }
}
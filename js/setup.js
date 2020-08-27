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

const capa0 = document.querySelector('.capa0')
const capa1 = document.querySelector('.capa1')
const capa2 = document.querySelector('.capa2')
const capa3 = document.querySelector('.capa3')
const capa4 = document.querySelector('.capa4')
const capa5 = document.querySelector('.capa5')
const capa6 = document.querySelector('.capa6')
const capa7 = document.querySelector('.capa7')
const capa8 = document.querySelector('.capa8')
const capa9 = document.querySelector('.capa9')

capas = ['foto-capa0','foto-capa1','foto-capa2','foto-capa3','foto-capa4','foto-capa5','foto-capa6','foto-capa7','foto-capa8','foto-capa9']

let mostrarCapa = (id) => {
    if (document.getElementById("capas").style.display == "none"){
        document.getElementById("capas").style.display = "block"
        escolherClasse(id).classList.add(capas[id])
    }else{
        document.getElementById("capas").style.display = "none"
        escolherClasse(id).classList.remove(capas[id])
    }
}

let escolherClasse = (id) => {
    if (id == 0){
        return capa0
    }else if(id == 1){
        return capa1
    }else if(id == 2){
        return capa2
    }else if(id == 3){
        return capa3
    }else if(id == 4){
        return capa4
    }else if(id == 5){
        return capa5
    }else if(id == 6){
        return capa6
    }else if(id == 7){
        return capa7
    }else if(id == 8){
        return capa8
    }else if(id == 9){
        return capa9
    }
}
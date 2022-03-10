var menu, menukey, nav, navkey

function resize(){
    var tam = window.innerWidth
    if(tam > 800){
        document.getElementById("nav").style.display = 'grid'
        navkey = 1
        menukey = 1
        document.getElementById("menu").innerHTML = "&#9776; Menu"
    }else{
        document.getElementById("nav").style.display = 'none'
        navkey = 0
        document.getElementById("menu").innerHTML = "&#9776; Menu"
        menukey = 0
    }
}

function inicia(){
    menukey = 0
    navkey = 0

    nav = document.getElementById("menu").addEventListener("click", function(){
        if(navkey == 0){
            document.getElementById("nav").style.display = 'grid'
            navkey = 1
        }else if(navkey == 1){
            document.getElementById("nav").style.display = 'none'
            navkey = 0
        }
    })


    menu = document.getElementById("menu").addEventListener("click", function(){
        if(menukey == 0){
            document.getElementById("menu").innerHTML = "&#9747; Menu"
            menukey = 1
        }else if(menukey == 1){
            document.getElementById("menu").innerHTML = "&#9776; Menu"
            menukey = 0
        }
    })
}

window.addEventListener("load", inicia)
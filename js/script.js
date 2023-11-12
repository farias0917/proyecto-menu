const navegacion = document.querySelector("#menu")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", e=>{
    e.preventDefault()
    navegacion.classList.add("visible")
})

cerrar.addEventListener("click", e=>{
    e.preventDefault()
    navegacion.classList.remove("visible")
})
lista = document.getElementById("contenedor");
agregabtn = document.getElementById("agregar");
eliminarbtn = document.getElementById("eliminar");
let cantidadT = 1-1;
function colocaTareas (cantidad)
{
    lista.innerHTML = "";
    for(let i =0; i<cantidad; i++)
    {
        lista.innerHTML += "<div id=\"cuadrado\"></div>";
        lista.children[i].textContent = "Tarea";
    }
}

agregabtn.addEventListener("click", () =>{
    
    cantidadT ++;
    colocaTareas(cantidadT);
});
eliminarbtn.addEventListener("click", () =>{
    
    cantidadT --;
    colocaTareas(cantidadT);
});

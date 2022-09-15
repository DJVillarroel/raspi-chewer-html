//Se supone que esto hace que aparezca una barra de selección abajo de los botones pero sabrá dios si funciona 

var items = document.querySelectorAll(".navbar");
var ind = document.querySelector(".indicator");

//manejo el elemento seleccionado (hover)
function handleIndicator(element) { 
  ind.style.width = element.offsetWidth + "px";
  ind.style.left = element.offsetLeft + "px";
}
//Para cada elemento seleccionado de la barra de navegación agrando el indicador
items.forEach(function (item, index) {
  item.addEventListener("mousemove", function (e) {
    handleIndicator(e.target);
  });
});
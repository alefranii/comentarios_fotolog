/*aquí va tu código*/

function init(){
	var button = document.getElementById("btn-g");
	button.addEventListener("click", guardar);
	guardar();	
}

function guardar(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	
	
//limpiar datos
localStorage.setItem(clave, valor);

document.getElementById("clave").value= ""; 
document.getElementById("valor").value = ""; 

//contiene los comentarios como historial
var contenedor = document.getElementById("localiza");
contenedor.innerHTML = "";
for(var i = 0; i < localStorage.length; i++){
	var kei = localStorage.key(i);
	var valuee = localStorage.getItem(kei);

	var comentarCaja = document.createElement("div");
	comentarCaja.classList.add("parrafCaja");


	var titulo = document.createElement("h3");
	titulo.classList.add("h-3");
	var tituloText = document.createTextNode(kei);
	titulo.appendChild(tituloText);
	comentarCaja.appendChild(titulo);

	var parrafo = document.createElement("p");
	parrafo.classList.add("mb-15");
	var parrafoText = document.createTextNode(valuee);
	parrafo.appendChild(parrafoText);
	comentarCaja.appendChild(parrafo);
	contenedor.appendChild(comentarCaja);


}
}

init();

document.getElementById("btn-limpiar").addEventListener("click",function(){
	window.localStorage.clear();
	guardar();
});
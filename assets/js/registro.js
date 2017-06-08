
var codigoVerificado = function(){
	
	alert("Bienvenido a monedero. Nuevo Usuario");
	window.location.href ="perfil.html";


}
var bienvenida = function (){
	var $nombre = $("#nomUsuario").val();
	alert("Bienvenido"+$nombre);
	window.location.href ="perfil.html";


}
var cargaPagina = function (){
	$("#enviarCodigo").click(codigoVerificado);
	$("#registro").click(bienvenida);
}

$(document).ready(cargaPagina);


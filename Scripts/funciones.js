function cargarEncabezado(){
	$("#tituloPrincipal").append("<h1>Centro de estetica Venus</h1>");
	$("#telefonoEncabezado").append("(011) 4502-1727");
	$("#celularEncabezado").append("+54 9 11 4028-1276");
	$("#direccionConsultorio").append("Av. Chivilcoy 3201, Capital Federal");
	$("#descripcion").append("<h2>Cirugia Plástica Y Reconstructiva </h2>");
}


function cargarNombreDoctor(){
	$(".nombreDoctor").append("DR.JOSE LO TARTARO");
}

function cargarInfoDoctor() {
$("#infoDoctor").append("<p>El Doctor Jose Lo Tartaro es un especialista argentino del área de la cirugía plástica, que es notablemente reconocido por su amplia trayectoria y la satisfacción que evidencian los pacientes a los que ha atendido. Su disciplina y profesionalismo lo hacen ser una excelente opción para poner en sus manos el cuidado de su apariencia. El Doctor cuenta con modernas instalaciones para recibir a sus pacientes y ofrecerles un trato cordial y cercano</p>");	
$("#infoDoctor").append("<h3>Especialidades</h3>");
$("#infoDoctor").append("<p>El doctor Jose Lo Tartaro ofrece un número importante de procedimientos estéticos y cirugías plásticas con la más alta tecnología para mejorar la calidad de vida de sus pacientes: Abdominoplastia-Lipectomia, Lipoescultura, Mamoplastia, Levantamiento de glúteos, Rinoplastia, Blefaroplastia, Bichectomía, etc</p>");
$("#infoDoctor").append("<h3>Localizacion</h3>");
$("#infoDoctor").append("<p>El Doctor Jose Lo Tartaro lo espera en su consultorio para resolver todas sus dudas e inquietudes. No dude en agendar la cita con el Doctor y conozca los testimonios de las personas que han sido operadas por él.</p>");
}


function cargarTituloTurnos(){
	$(".cargarTituloTurnos").append("TURNOS ONLINE");
}


function cargarTarjetas(){
	$("#tarjeta1").append("<h4><b>Abdomen</b></h4>");
	$("#tarjeta1").append("<p>La cirugia plastica de abdomen consiste en eliminar el exceso de piel y grasa del abdomen, consiguiendo de esta manera un abdomen más plano, más firme y una cintura más estrecha.</p>");

	$("#tarjeta2").append("<h4><b>Mamas</b></h4>");
	$("#tarjeta2").append("<p>La elección del tamaño (volumen en centrimetros cubicos del implante mamario es determinante en el resultado final. Por lo que es fundamental el asesoramiento de un medico especialista.</p>");

	$("#tarjeta3").append("<h4><b>Lifting</b></h4> ");
	$("#tarjeta3").append("<p>Actualmente realizo la cirugia plastica de lifting con tensión de las estructuras profundas e incisiones mínimas, con resultados excelentes de muy rápida recuperación y mínimamente invasivo.</p>");

	$("#tarjeta4").append("<h4><b>Orejas</b></h4>");
	$("#tarjeta4").append("<p>La cirugia plastica de orejas es una sencilla intervención que mejora notablemente el conjunto del rostro y en muchos casos libera de un gran complejo. Las orejas prominentes provocan grandes sufrimientos fisicos y psicologicos.</p>");

	$("#tarjeta5").append("<h4><b>Lipoescultura</b></h4>");
	$("#tarjeta5").append("<p>El objetivo de la lipoescultura es retirar tejido graso de zonas localizadas del cuerpo mediante aparatología especifica y remodelar (como el escultor lo hace en la piedra) la zona.</p>");
}


function agregarBoxShadow(){
	document.getElementById("infoDoctor").style.boxShadow = "5px 5px 5px 0px rgba(0,0,0,0.35)";
	document.getElementById("encabezado").style.boxShadow = "5px 5px 5px 0px rgba(0,0,0,0.35)";
	document.getElementById("solicitarTurno").style.boxShadow = "5px 5px 5px 0px rgba(0,0,0,0.35)";
}

function mostrarHora(){
	var hora;
	var minutos;
	var segundos;
	var miHora = new Date();

	 hora 	  = miHora.getHours();
	 minutos  = miHora.getMinutes();
	 segundos = miHora.getSeconds(); 
	 var imp  = hora+":"+minutos+" Hrs.";
	 $("#horaActual").append(imp);
}

function borrarHora(){
	var hora = document.getElementById("horaActual");
	hora.parentNode.removeChild(hora);
}

function validacion(){
		var valor;
		valor = document.getElementById("inpNombre").value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor) || /^[0-9]/.test(valor)) {
			alert("ERROR: Valor invalido para el campo Nombre");
			return false;
		}

		valor = document.getElementById("inpEmail").value;
		 if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor)){
			alert("ERROR: Valor invalido para el campo Email");
		 	return false;		 	
		 }

		valor = document.getElementById("inpTelefono").value;
		if( !(/^\d{9}$/.test(valor)) ) {
			alert("ERROR: Valor invalido para el campo Telefono. Chequee la longitud (min 9)");	
			return false;
		}

		valor = document.getElementById("inpPais").value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor) || /^[0-9]/.test(valor)) {
			alert("ERROR: Valor invalido para el campo Pais");
			return false;
		}

		valor = document.getElementById("inpMensaje").value;
		if( valor == null || valor.length == 0) {
			alert("ERROR: El mensaje no puede estar vacio");
			return false;
		}

		return true;
}

function detectarResolucion() {
var ancho = screen.width; // ancho de la pantalla del usuario
var alto  = screen.height; // alto de la pantalla del usuario
var pagina;

if(ancho <= 800){
	pagina="Banners/Banner1.html";
}
else if(ancho > 800 && ancho < 1200){
	pagina="Banners/Banner2.html";
}
else{
	pagina="Banners/Banner3.html";
}

tiempoBanner(pagina);

}


function tiempoBanner(pagina){
	setTimeout(abrirBanner,3000,pagina);
}


function abrirBanner(pagina){
	window.open(pagina, '','width=1100,height=480');
}
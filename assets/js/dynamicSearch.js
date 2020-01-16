


function dynamicSearch ()
{
	//creacion de objeto que contiene la configuracion de conexion al servidor
	var connection = new XMLHttpRequest();
	
//variable que contiene el valr que sera enviado al servidor 
	var param = "esto es una consulta ajax";

//funcion que se ejecutara cuando el servidor responda
	connection.onreadystatechange = function (){
		console.log(connection);

valores =[1,2,3];

for( var i = 0; i < 4; i++){

if(connection.readyState == valores[i]){
		console.log('cargando . . . .');
		var text="loading . . . .";
		document.getElementById("sample-message").innerHTML=text;

	}else if (connection.readyState == 4) {
		Text2 = connection.responseText;
		text2 = JSON.parse(Text2);
		document.getElementById("sample-message").innerHTML=connection.responseText;
	}

}
};

//apertura de conexion con el servidor
	connection.open('POST','assets/backend/backend.php', true);
//configuracion adicional para envio de informacion via metodo post
	connection.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//envio de la variable al servidor
	connection.send("search="+ param );

//mensaje de prueba para verificar la instancia connection
//console.log(connection);

}


//ejecucion de la funcion




function dynamicSearch ()
{
	//creacion de objeto que contiene la configuracion de conexion al servidor
	var connection = new XMLHttpRequest();
	
//variable que contiene el valr que sera enviado al servidor 
	var param = "esto es una consulta ajax";

//funcion que se ejecutara cuando el servidor responda
	connection.onreadystatechange = function (){
		console.log(connection.readyState);

valores =[1,2,3];

for( var i = 0; i < 4; i++){

if(connection.readyState == valores[i]){
		console.log('cargando . . . .');

	}else if (connection.readyState == 4) {
		console.log(connection.responseText);
	}

}
};

//apertura de conexion con el servidor
	connection.open('POST','assets/backend/backend.php', true);
//configuracion adicional para envio de informacion via metodo post
	connection.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//envio de la variable al servidor
	connection.send("value="+ param );

//mensaje de prueba para verificar la instancia connection
//console.log(connection);

}


//ejecucion de la funcion
dynamicSearch();
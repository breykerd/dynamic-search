<?php
//code create by breykerd 
//Connection
//class responsible for connecting to the Test database

//Codigo creado por breykerd
//Conexion
//clase encargada de la conexion a la base de datos de Prueba

//error_reporting(0);
class Connection extends mysqli {

    public function __construct(){
        parent::__construct('localhost','root','','development-test');
        $this->query("SET NAMES 'utf8';");
        $this->connect_errno ? die('Conection Fauled') : $mysqli = 'connected';
        unset ($mysqli);
echo  json_encode($mysqli);
    }
    
}

<?php 

require('connection.php');

class busqueda extends connection
{

	public function search($Product)
	{
		$mysqli= new connection();
        $Products=$mysqli->query("SELECT * FROM products");
        return $arrayProduts=$Products->fetch_assoc();
	}


}


 ?>
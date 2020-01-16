<?php 

require('connection.php');

class busqueda extends connection
{

	public function search($Product)
	{
		$mysqli= new connection();
        $Products=$mysqli->query("SELECT * FROM products");
        while ($products=$Products->fetch_assoc()) {
         $arrayProduts[]=$products;
        }
        echo json_encode($arrayProduts); 
	}


}


 ?>
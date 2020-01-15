<?php 


//requires

require('dynamic-search.php');	

$dynamicSearch= new busqueda();




if (isset($_POST['search'])) {
	$search= $_POST['search'];
}else{
	$search= "";
}







switch ($search) {
	case '':
		echo "blank field, please add a value ";
		break;
	
	default:

		$results= $dynamicSearch->Search(1);
		echo json_encode($results);
		echo "successful search";
		break;
}

 ?>
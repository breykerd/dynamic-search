<?php 


if (isset($_POST['search']) {
	$search= $_POST['search'];
}else{
	$search= "";
}





switch ($search) {
	case '':
		echo "blank field, please add a value ";
		break;
	
	default:
		echo "successful search";
		break;
}

 ?>
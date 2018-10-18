<?php
	$vetor = array();
    $conexao = mysqli_connect("localhost", "root","","sas");
    mysqli_select_db($conexao, "sas");

    $qryLista = mysqli_query($conexao, "SELECT * FROM sas_chamadas ORDER BY data DESC"); 

    if(mysqli_num_rows($qryLista) > 0){
	    while($resultado = mysqli_fetch_assoc($qryLista)){
	        $vetor[] = array_map('utf8_encode', $resultado); 
	    } 

	    echo json_encode($vetor);
	} else{
		echo 'false';
	}

    mysqli_close($conexao);
?>
<?php
    $conexao = mysqli_connect("localhost", "root","","sas");
    mysqli_select_db($conexao, "sas");

    $qryLista = mysqli_query($conexao, "SELECT * FROM sas_chamadas ORDER BY data DESC"); 

    while($resultado = mysqli_fetch_assoc($qryLista)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    } 

    echo json_encode($vetor);

    mysqli_close($conexao);
?>
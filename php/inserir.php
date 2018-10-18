<?php
    $conexao = mysqli_connect("localhost", "root","","sas");
    mysqli_select_db($conexao, "sas");

    $tipo = $_POST['tipo'];
    $estado = $_POST['estado'];
    $motivo = $_POST['motivo'];
    $mensagem = utf8_decode($_POST['mensagem']);
    $data = date('d/m/Y');

    $sql = "INSERT INTO sas_chamadas(tipo, estado, motivo, mensagem, data) VALUES  ($tipo, '$estado', $motivo, '$mensagem', '$data')";

    echo (mysqli_query($conexao, $sql)) ? 'true' : 'false';

    mysqli_close($conexao);
?>
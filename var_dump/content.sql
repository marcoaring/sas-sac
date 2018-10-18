-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 18-Out-2018 às 02:01
-- Versão do servidor: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `sas_chamadas`
--

CREATE TABLE `sas_chamadas` (
  `id` int(11) NOT NULL,
  `tipo` int(1) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `motivo` int(1) NOT NULL,
  `mensagem` text NOT NULL,
  `data` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sas_chamadas`
--

INSERT INTO `sas_chamadas` (`id`, `tipo`, `estado`, `motivo`, `mensagem`, `data`) VALUES
(3, 1, 'RJ', 1, 'Cliente queria saber qual a data do pagamento da sua fatura.', '18/09/2018'),
(4, 2, 'AL', 3, 'Cliente queria sugerir a inserção do método de pagamento por boleto no site.', '15/05/2018'),
(5, 3, 'BA', 2, 'Cliente queria elogiar a atendente e propor um atendimento mais rápido pelo chat.', '18/10/2018');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sas_chamadas`
--
ALTER TABLE `sas_chamadas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sas_chamadas`
--
ALTER TABLE `sas_chamadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

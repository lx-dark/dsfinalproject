CREATE DATABASE  IF NOT EXISTS `appigtech` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `appigtech`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: appigtech
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customerdata`
--

DROP TABLE IF EXISTS `customerdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customerdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `phonenumber` varchar(11) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `street` varchar(255) NOT NULL,
  `neighborhood` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `housenumber` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customerdata`
--

LOCK TABLES `customerdata` WRITE;
/*!40000 ALTER TABLE `customerdata` DISABLE KEYS */;
INSERT INTO `customerdata` VALUES (1,'Paulo Soares','11122233355','11111111155','48012090','Travessa Marilene Ribeiro dos Santos','Santa Terezinha','Alagoinhas','BA','998'),(2,'Carlos Santos','12345678901','22266665555','48012070','Rua José Paulo dos Santos','Santa Terezinha','Alagoinhas','BA','156'),(3,'Job Souza','99887766554','55577778888','48012040','Travessa Agripinia Cardoso dos Santos','Santa Terezinha','Alagoinhas','BA','129'),(6,'Santana dos Santos','88779966331','88778855441','48012080','Travessa Manuel Ferreira','Santa Terezinha','Alagoinhas','BA','333'),(7,'Willian Souza','11122223333','11122223333','48021695','Rua José Luciano C. Freire','Silva Jardim','Alagoinhas','BA','333'),(8,'Sergio Santos','12345678931','12345678931','48021695','Rua José Luciano C. Freire','Silva Jardim','Alagoinhas','BA','555'),(9,'Flavio Santos','77889966554','77889966554','48012154','Rua João Cirino da Gama','Santa Terezinha','Alagoinhas','BA','364');
/*!40000 ALTER TABLE `customerdata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-19 15:04:02

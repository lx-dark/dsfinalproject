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
-- Table structure for table `servicedata`
--

DROP TABLE IF EXISTS `servicedata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicedata` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `customerdata_idcustomer` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `scheduledate` varchar(255) NOT NULL,
  `scheduletime` varchar(255) NOT NULL,
  `priority` varchar(255) NOT NULL,
  `servicevalue` varchar(255) NOT NULL,
  PRIMARY KEY (`idservice`,`customerdata_idcustomer`),
  KEY `fk_servicedata_customerdata_idx` (`customerdata_idcustomer`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicedata`
--

LOCK TABLES `servicedata` WRITE;
/*!40000 ALTER TABLE `servicedata` DISABLE KEYS */;
INSERT INTO `servicedata` VALUES (4,6,'trocar placa de video','2024-07-05','13:00','Média','2500,00'),(5,4,'trocar fonte','22/06/2024','07:00','Alta','135,00'),(8,3,'trocar fonte de alimentação','25/08/2024','17:00','Média','158,00'),(9,2,'trocar capacitor da placa mãe','2024-08-08','15:00','Alta','215,90'),(10,9,'Verificar conexão cabeada do pc','2024-06-29','08:00','Alta','79,90');
/*!40000 ALTER TABLE `servicedata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-19 15:04:03

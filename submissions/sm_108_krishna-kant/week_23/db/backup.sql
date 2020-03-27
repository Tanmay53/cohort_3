-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: busroute
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buses`
--

DROP TABLE IF EXISTS `buses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `buses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bus_pid` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `source` int(11) DEFAULT NULL,
  `destination` int(11) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `source` (`source`),
  KEY `destination` (`destination`),
  CONSTRAINT `buses_ibfk_1` FOREIGN KEY (`source`) REFERENCES `locations` (`id`),
  CONSTRAINT `buses_ibfk_2` FOREIGN KEY (`destination`) REFERENCES `locations` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buses`
--

LOCK TABLES `buses` WRITE;
/*!40000 ALTER TABLE `buses` DISABLE KEYS */;
INSERT INTO `buses` VALUES (1,'KP_123','Delux',8,6,'12:33:44'),(3,'CC_101','Normal',8,10,'12:33:44'),(4,'DK_562','Delux',3,10,'12:33:44'),(5,'CC_292','Delux',3,11,'12:33:44'),(6,'AD_222','Delux',5,11,'12:33:44'),(7,'AD_442','Delux',5,11,'10:03:23'),(8,'DD_272','Delux',4,1,'10:03:23'),(9,'DD_CSD','Delux',4,5,'10:03:23'),(10,'AM_123','Deluxe',3,8,'14:22:00'),(11,'JM_223','Normal',6,3,'22:45:00'),(12,'MA_223','Deluxe',5,3,'14:55:00'),(13,'DD_234','Deluxe',5,8,'12:55:00');
/*!40000 ALTER TABLE `buses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Dehradun','2020-03-27 11:11:28'),(2,'Delhi','2020-03-27 11:11:54'),(3,'Bangalore','2020-03-27 11:11:59'),(4,'Manipur','2020-03-27 11:12:06'),(5,'Kanpur','2020-03-27 11:12:10'),(6,'Patna','2020-03-27 11:12:15'),(7,'Washington','2020-03-27 11:12:21'),(8,'Gurgaon','2020-03-27 11:12:32'),(9,'Faridabad','2020-03-27 11:13:06'),(10,'Ghaziabad','2020-03-27 11:13:11'),(11,'Kormangla','2020-03-27 11:13:17'),(12,'Manipur','2020-03-27 16:45:25'),(13,'Manipur','2020-03-27 16:45:26'),(14,'Kannuj','2020-03-27 16:45:38'),(15,'Lucknow','2020-03-27 16:46:41'),(16,'Unnao','2020-03-27 16:47:13'),(17,'Rasoolabad','2020-03-27 16:48:14'),(18,'Kolkata','2020-03-27 16:48:39'),(19,'Japan','2020-03-27 16:50:03'),(20,'Silliguri','2020-03-27 16:51:22');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-27 19:38:58

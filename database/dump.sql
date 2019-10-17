-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: prov
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

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
-- Table structure for table `GOALSLIST`
--

DROP TABLE IF EXISTS `GOALSLIST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GOALSLIST` (
  `ID` mediumint(8) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(60) NOT NULL,
  `PROJECT_ID` mediumint(8) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GOALSLIST`
--

LOCK TABLES `GOALSLIST` WRITE;
/*!40000 ALTER TABLE `GOALSLIST` DISABLE KEYS */;
INSERT INTO `GOALSLIST` VALUES (1,'art',1),(2,'hands-on',1),(3,'creative',1),(4,'crafts',1),(5,'art',2),(6,'reading',2),(7,'cognitive',2),(8,'hands-on',2),(9,'creative',2),(10,'crafts',2);
/*!40000 ALTER TABLE `GOALSLIST` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MATERIALSLIST`
--

DROP TABLE IF EXISTS `MATERIALSLIST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MATERIALSLIST` (
  `ID` mediumint(8) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(60) NOT NULL,
  `PROJECT_ID` mediumint(8) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MATERIALSLIST`
--

LOCK TABLES `MATERIALSLIST` WRITE;
/*!40000 ALTER TABLE `MATERIALSLIST` DISABLE KEYS */;
INSERT INTO `MATERIALSLIST` VALUES (1,'sticks',1),(2,'paper',1),(3,'glue',1),(4,'googly-eyes',1),(5,'glue',2),(6,'name-print-outs',2),(7,'letter-beads',2);
/*!40000 ALTER TABLE `MATERIALSLIST` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PROJECTS`
--

DROP TABLE IF EXISTS `PROJECTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PROJECTS` (
  `ID` mediumint(8) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(60) NOT NULL,
  `DESCRIPTION` varchar(200) NOT NULL,
  `SET_UP` text NOT NULL,
  `OUTCOMES` text NOT NULL,
  `RATING` float NOT NULL DEFAULT '4',
  `IMAGE` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PROJECTS`
--

LOCK TABLES `PROJECTS` WRITE;
/*!40000 ALTER TABLE `PROJECTS` DISABLE KEYS */;
INSERT INTO `PROJECTS` VALUES (1,'stick-figures','Students will create stick figures using natural materials','Lay out materials on the table, separate materials by category, lay out paper and glue','Students responded well to the hands on project. The use of natural materials helped provide tactile response.',4.85,'/images/stick-figure.png'),(2,'name-beads','Students will spell out their name using letter beads, with guidance of a name print out','Print out paper name print-outs, leave room for students to glue letter beads, supply letter beads (do dot sort by letter) and glue.','Students were able to train hand-eye coordination with the use of small letter beads, as well as training reading comprehension',3.32,'/images/name-beads.png');
/*!40000 ALTER TABLE `PROJECTS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-17 18:43:34

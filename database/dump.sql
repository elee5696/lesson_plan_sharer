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
-- Table structure for table `goals`
--

DROP TABLE IF EXISTS `goals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goals` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goals`
--

LOCK TABLES `goals` WRITE;
/*!40000 ALTER TABLE `goals` DISABLE KEYS */;
INSERT INTO `goals` VALUES (1,'art'),(2,'hands-on'),(3,'creative'),(4,'crafts'),(7,'reading'),(8,'cognitive'),(10,'history'),(12,'flower');
/*!40000 ALTER TABLE `goals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) DEFAULT NULL,
  `project_id` mediumint(8) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'/images/stick-figure.png',1,NULL),(2,'/images/name-beads.png',2,NULL),(4,'/images/flower.jpg',8,NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materials` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'sticks'),(2,'paper'),(3,'glue'),(4,'googly-eyes'),(5,'name-print-outs'),(6,'letter-beads'),(8,'string'),(9,'flower');
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_goals`
--

DROP TABLE IF EXISTS `project_goals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_goals` (
  `project_id` mediumint(8) NOT NULL,
  `goal_id` mediumint(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_goals`
--

LOCK TABLES `project_goals` WRITE;
/*!40000 ALTER TABLE `project_goals` DISABLE KEYS */;
INSERT INTO `project_goals` VALUES (1,1),(1,2),(1,3),(1,4),(2,1),(2,7),(2,8),(2,2),(2,3),(2,4),(4,9),(5,9),(6,9),(7,1),(7,10),(7,11),(7,2),(8,12);
/*!40000 ALTER TABLE `project_goals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_material`
--

DROP TABLE IF EXISTS `project_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_material` (
  `project_id` mediumint(8) NOT NULL,
  `material_id` mediumint(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_material`
--

LOCK TABLES `project_material` WRITE;
/*!40000 ALTER TABLE `project_material` DISABLE KEYS */;
INSERT INTO `project_material` VALUES (1,1),(1,2),(1,3),(1,4),(2,3),(2,5),(2,6),(4,9),(6,9),(8,9);
/*!40000 ALTER TABLE `project_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_rating`
--

DROP TABLE IF EXISTS `project_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_rating` (
  `project_id` mediumint(8) NOT NULL,
  `rating` float NOT NULL DEFAULT '0',
  `count` mediumint(8) NOT NULL DEFAULT '0',
  `total_rating` mediumint(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_rating`
--

LOCK TABLES `project_rating` WRITE;
/*!40000 ALTER TABLE `project_rating` DISABLE KEYS */;
INSERT INTO `project_rating` VALUES (1,4.82759,58,280),(2,4.97661,171,851),(8,5,4,20);
/*!40000 ALTER TABLE `project_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(8) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` varchar(200) NOT NULL,
  `set_up` text NOT NULL,
  `outcomes` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,101,'stick-figures','students will create stick figures using natural materials','lay out materials on the table, separate materials by category, lay out paper and glue','Students responded well to the hands on project. The use of natural materials helped provide tactile response.'),(2,101,'name-beads','Students will spell out their name using letter beads, with guidance of a name print out.','Print out paper name print-outs, leave room for students to glue letter beads, supply letter beads (do not sort by letter) and glue.','Students were able to train hand-eye coordination with the use of small letter beads, as well as training reading comprehension.'),(8,102,'flower','flower','flower','flower');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_table` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `years` tinyint(2) NOT NULL,
  `about_me` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `creation` datetime NOT NULL,
  `username` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (101,'Anjaleena Barclay',12,'I love what I do, and would love to do it my entire life!','/images/apple.jpg','2019-10-23 20:00:55','ProvPro'),(102,'Dan Paschal',5,'I love PHP','/images/apple.jpg','2019-10-23 20:17:51','phpfan'),(103,'Edward Lee',12,'node node node','/images/memed-io-output.jpeg','2019-10-23 22:33:39','elee5696'),(109,'Brena Patel',1,'React!','/images/dreamcatcher.jpeg','2019-10-23 22:57:18','BPatel'),(110,'Anjaleena Barclay',2,'PHP!','/images/flower.jpg','2019-10-23 22:57:51','ABarclay');
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-23 23:00:56

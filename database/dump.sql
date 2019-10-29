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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goals`
--

LOCK TABLES `goals` WRITE;
/*!40000 ALTER TABLE `goals` DISABLE KEYS */;
INSERT INTO `goals` VALUES (1,'art'),(2,'hands-on'),(3,'creative'),(4,'crafts'),(7,'reading'),(8,'cognitive'),(10,'history'),(12,'flower'),(13,'craft'),(14,'dexterity'),(15,'thinking'),(16,'research'),(17,'nature'),(18,'asd'),(19,'3'),(20,'\'s'),(21,'make project show vid'),(22,'get proj to have vid'),(23,'youtube video shown'),(24,'');
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'/images/stick-figure.png',1,NULL),(2,'/images/name-beads.png',2,NULL),(4,'/images/flower.jpg',8,NULL),(5,'/images/craft.jpg',9,NULL),(6,'/images/craft2.jpg',10,NULL),(7,'/images/craft3.jpeg',11,NULL),(8,'/images/craft4.jpeg',12,NULL),(9,'/images/craft5.jpg',13,NULL),(10,'/images/craft6.jpeg',14,NULL),(11,'/images/Screenshot_20191025_130509.png',15,NULL),(12,'/images/ScreenShot2019-10-13at8.39.31PM.png',16,NULL),(13,'/images/Screenshot_20191025_130509.png',17,NULL),(14,'/images/Screenshot_20191025_130509.png',18,NULL),(15,'/images/Screenshot_20191025_130509.png',19,NULL),(16,'/images/Screenshot_20191025_130509.png',20,NULL),(17,'/images/Screenshot_20191025_130509.png',21,NULL),(18,'/images/Screenshot_20191025_130509.png',22,NULL),(19,'/images/6820517-tulip-fields.jpg',22,NULL),(20,'/images/6820517-tulip-fields.jpg',22,NULL),(21,'/images/beautiful-flower-field-background-1.jpg',22,NULL),(22,'/images/beautiful-flower-field-background-1.jpg',22,NULL),(23,'/images/beautiful-flower-field-background-1.jpg',22,NULL),(24,'/images/6820517-tulip-fields.jpg',23,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'sticks'),(2,'paper'),(3,'glue'),(4,'googly-eyes'),(5,'name-print-outs'),(6,'letter-beads'),(8,'string'),(9,'flower'),(10,'pencil'),(11,'paint'),(12,'pipe cleaners'),(13,'glass'),(14,'lampshade'),(15,'scissors'),(16,'tape'),(17,'books'),(18,'bear stencil'),(19,'ads'),(20,'\'s'),(21,'computer'),(22,'asdf'),(23,'ya');
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
INSERT INTO `project_goals` VALUES (1,1),(1,2),(1,3),(1,4),(2,1),(2,7),(2,8),(2,2),(2,3),(2,4),(4,9),(5,9),(6,9),(7,1),(7,10),(7,11),(7,2),(8,12),(9,1),(10,2),(10,13),(10,1),(10,14),(11,14),(11,1),(11,3),(12,1),(12,15),(13,16),(13,17),(13,4),(14,1),(15,18),(15,18),(16,19),(22,20),(22,21),(22,21),(22,22),(22,22),(22,22),(23,23),(23,24);
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
INSERT INTO `project_material` VALUES (1,1),(1,2),(1,3),(1,4),(2,3),(2,5),(2,6),(4,9),(6,9),(8,9),(9,10),(9,2),(9,11),(10,12),(11,11),(11,13),(11,14),(12,2),(12,15),(12,8),(12,3),(12,16),(13,2),(13,17),(13,15),(13,3),(14,11),(14,18),(15,19),(22,20),(22,21),(22,21),(22,22),(22,22),(22,22),(23,23);
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
INSERT INTO `project_rating` VALUES (1,4.83051,59,285),(2,4.97661,171,851),(8,5,4,20),(9,0,0,0),(10,0,0,0),(11,0,0,0),(12,0,0,0),(13,0,0,0),(14,0,0,0),(15,0,0,0),(22,0,0,0),(22,0,0,0),(22,0,0,0),(22,0,0,0),(22,0,0,0),(22,0,0,0),(23,0,0,0);
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
  `description` text NOT NULL,
  `set_up` text NOT NULL,
  `outcomes` text NOT NULL,
  `youtubeLink` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,101,'stick-figures','students will create stick figures using natural materials','lay out materials on the table, separate materials by category, lay out paper and glue','Students responded well to the hands on project. The use of natural materials helped provide tactile response.',NULL),(2,101,'name-beads','Students will spell out their name using letter beads, with guidance of a name print out.','Print out paper name print-outs, leave room for students to glue letter beads, supply letter beads (do not sort by letter) and glue.','Students were able to train hand-eye coordination with the use of small letter beads, as well as training reading comprehension.',NULL),(8,102,'flower','flower','flower','flower',NULL),(9,103,'Art','Art','art,pencil,paper,wow','Art',NULL),(10,103,'Pipe Cleaner Art','Pipe Cleaners','pipe cleaners,fun','pipe cleaners',NULL),(11,103,'Stain Glass Lampshade','Stain Glass Lampshade','lampshade,glass,paint,done','Stain Glass Lampshade',NULL),(12,103,'Banner','Banner','cut,glue,tie,hang','Banner',NULL),(13,103,'Insects','Insects','insects,create,play','Insects',NULL),(14,103,'Bear Paint','Bear Paint','bear,paint,create','Bear Paint',NULL),(15,103,'asd','asd','ads','ads',NULL),(16,103,'asdas','asdasd','asd','asd',NULL),(17,103,'\'s','\'s','\'s','\'s',NULL),(18,103,'\'s','\'s\'','\'s','s\'',NULL),(19,103,'\'s','\'s','\'s','\'s',NULL),(20,103,'\'s','\'s','\'s','\'s',NULL),(21,103,'\'s','\'s','\'s','\'s',NULL),(22,103,'\'s','\'s','\'s','\'s',NULL),(23,101,'sadfasfd','project with youtube video','sadf','sdafa','https://www.youtube.com/watch?v=rWF9wvDWOgA');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `user_id` mediumint(8) NOT NULL,
  `project_id` mediumint(8) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (103,1,'Great project! My kids really liked working with natural materials.','2019-10-25 00:00:00'),(109,1,'Nice Work!','2019-10-25 00:00:00'),(103,1,'Hello!','2019-10-25 00:00:00'),(103,1,'Woo','2019-10-25 03:20:35'),(103,1,'OMG','2019-10-25 03:20:41'),(103,1,'WOOO','2019-10-25 20:59:41'),(103,1,'s\'s','2019-10-25 21:00:11');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8;
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

-- Dump completed on 2019-10-28 18:33:09

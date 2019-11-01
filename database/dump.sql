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
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goals`
--

LOCK TABLES `goals` WRITE;
/*!40000 ALTER TABLE `goals` DISABLE KEYS */;
INSERT INTO `goals` VALUES (1,'art'),(2,'hands-on'),(3,'creative'),(4,'crafts'),(7,'reading'),(8,'cognitive'),(10,'history'),(12,'flower'),(13,'craft'),(14,'dexterity'),(15,'thinking'),(16,'research'),(17,'nature'),(44,'CSS'),(45,'Web Development'),(46,'creativity');
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
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'/images/stick-figure.png',1,NULL),(2,'/images/name-beads.png',2,NULL),(64,'/images/w3.png',63,NULL),(65,'/images/61f5c21f6bf3a03df84eab158f116236.jpg',64,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'sticks'),(2,'paper'),(3,'glue'),(4,'googly-eyes'),(5,'name-print-outs'),(6,'letter-beads'),(8,'string'),(9,'flower'),(10,'pencil'),(11,'paint'),(12,'pipe cleaners'),(13,'glass'),(14,'lampshade'),(15,'scissors'),(16,'tape'),(17,'books'),(45,'Computer'),(46,'W3Schools'),(47,'paint brush'),(48,'easel'),(49,'paint tray');
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
INSERT INTO `project_goals` VALUES (1,1),(1,2),(1,3),(1,4),(2,1),(2,7),(2,8),(2,2),(2,3),(2,4),(63,44),(63,45),(64,46),(64,1);
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
INSERT INTO `project_material` VALUES (1,1),(1,2),(1,3),(1,4),(2,3),(2,5),(2,6),(63,45),(63,46),(64,11),(64,47),(64,48),(64,49);
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
INSERT INTO `project_rating` VALUES (1,4.72131,61,288),(2,4.97661,171,851),(63,0,0,0),(64,0,0,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,101,'stick-figures','students will create stick figures using natural materials','lay out materials on the table, separate materials by category, lay out paper and glue','Students responded well to the hands on project. The use of natural materials helped provide tactile response.',NULL),(2,101,'name-beads','Students will spell out their name using letter beads, with guidance of a name print out.','Print out paper name print-outs, leave room for students to glue letter beads, supply letter beads (do not sort by letter) and glue.','Students were able to train hand-eye coordination with the use of small letter beads, as well as training reading comprehension.',NULL),(63,114,'Best Way to Learn Background CSS!','The CSS background properties are used to define the background effects for elements.\nCSS background properties:\nbackground-color\nbackground-image\nbackground-repeat\nbackground-attachment\nbackground-position','Go to W3School,Learn about CSS Backgrounds,Watch the video,Try the practice problems','W3Schools is the definitive place to learn CSS!','https://www.youtube.com/watch?v=wFjEZw-FF_w'),(64,113,'Warm Winter Day Painting','Paint a warm winter day','Put paper on an easel,put paint on a paint tray,paint your version of a picture of a warm winter day on the paper ','This was a great way to see the different perspectives of a warm winter day! The kids had a blast!','https://www.youtube.com/watch?v=lLWEXRAnQd0');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` mediumint(10) NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(8) NOT NULL,
  `project_id` mediumint(8) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,103,1,'Great project! My kids really liked working with natural materials.','2019-10-25 00:00:00'),(2,109,1,'Nice Work!','2019-10-25 00:00:00'),(3,103,1,'Hello!','2019-10-25 00:00:00'),(4,103,1,'Woo','2019-10-25 03:20:35'),(5,103,1,'OMG','2019-10-25 03:20:41'),(6,103,1,'WOOO','2019-10-25 20:59:41'),(7,103,1,'s\'s','2019-10-25 21:00:11'),(30,103,2,'asd','2019-10-30 03:20:35'),(32,115,63,'Get this filth out of my house','2019-11-01 03:25:35');
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
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (101,'Anjaleena Barclay',12,'I love what I do, and would love to do it my entire life!','/images/apple.jpg','2019-10-23 20:00:55','ProvPro'),(102,'Dan Paschal',5,'I love PHP','/images/apple.jpg','2019-10-23 20:17:51','phpfan'),(103,'Edward Lee',12,'node node node','/images/apple.jpg','2019-10-23 22:33:39','elee5696'),(109,'Brena Patel',1,'React!','/images/apple.jpg','2019-10-23 22:57:18','BPatel'),(111,'Brena Patel',2,'I am a preschool teacher that loves to teach arts and crafts ','/images/slime1.jpeg','2019-11-01 03:09:49','BrenaP'),(112,'Edward Lee',4,'I love to code! ','/images/puffypaint2.jpeg','2019-11-01 03:12:01','Elee'),(113,'Bob Ross',22,'I love teaching art!!','/images/BobRoss.jpg','2019-11-01 03:12:07','BOBROSS'),(114,'Tamur Padath',2,'I love W3Schools, best place to learn how to code!','/images/tamur.png','2019-11-01 03:17:11','thefinger'),(115,'Tim Davis',6,'I love cookies! ðŸª','/images/timD.jpeg','2019-11-01 03:24:56','thebearingedge'),(116,'Lena Porina',32,'I am a preschool teacher and I love introducing new exciting activities in class so that kids have fun learning','/images/schoolteacher21.jpeg','2019-11-01 03:29:27','porinalena');
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

-- Dump completed on 2019-11-01  3:48:37

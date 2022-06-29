CREATE DATABASE  IF NOT EXISTS `apside` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `apside`;
-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: apside
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

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
-- Table structure for table `acquieredSkill`
--

DROP TABLE IF EXISTS `acquieredSkill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acquieredSkill` (
  `user_id` int NOT NULL,
  `skill_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`skill_id`),
  KEY `fk_user_has_skill_skill1_idx` (`skill_id`),
  KEY `fk_user_has_skill_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_skill_skill1` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`id`),
  CONSTRAINT `fk_user_has_skill_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acquieredSkill`
--

LOCK TABLES `acquieredSkill` WRITE;
/*!40000 ALTER TABLE `acquieredSkill` DISABLE KEYS */;
/*!40000 ALTER TABLE `acquieredSkill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'banque'),(2,'santé'),(3,'environnement'),(4,'industrie'),(5,'agro-alimentaire'),(6,'grande distribution'),(7,'commerce'),(8,'e-commerce'),(9,'culture'),(10,'éducation'),(11,'agriculture');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `neededSkill`
--

DROP TABLE IF EXISTS `neededSkill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `neededSkill` (
  `skill_id` int NOT NULL,
  `project_id` int NOT NULL,
  PRIMARY KEY (`skill_id`,`project_id`),
  KEY `fk_skill_has_project_project1_idx` (`project_id`),
  KEY `fk_skill_has_project_skill1_idx` (`skill_id`),
  CONSTRAINT `fk_skill_has_project_project1` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  CONSTRAINT `fk_skill_has_project_skill1` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `neededSkill`
--

LOCK TABLES `neededSkill` WRITE;
/*!40000 ALTER TABLE `neededSkill` DISABLE KEYS */;
INSERT INTO `neededSkill` VALUES (43,1);
/*!40000 ALTER TABLE `neededSkill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant`
--

DROP TABLE IF EXISTS `participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participant` (
  `project_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`project_id`,`user_id`),
  KEY `fk_project_has_user_user1_idx` (`user_id`),
  KEY `fk_project_has_user_project1_idx` (`project_id`),
  CONSTRAINT `fk_project_has_user_project1` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  CONSTRAINT `fk_project_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant`
--

LOCK TABLES `participant` WRITE;
/*!40000 ALTER TABLE `participant` DISABLE KEYS */;
/*!40000 ALTER TABLE `participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `description` mediumtext,
  `img` varchar(256) DEFAULT NULL,
  `creationDate` date DEFAULT NULL,
  `client` varchar(45) DEFAULT NULL,
  `userCreatorId` int NOT NULL,
  `projectLife_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`,`projectLife_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_project_user_idx` (`userCreatorId`),
  KEY `fk_project_projectLife1_idx` (`projectLife_id`),
  KEY `fk_project_category1_idx` (`category_id`),
  CONSTRAINT `fk_project_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_project_projectLife1` FOREIGN KEY (`projectLife_id`) REFERENCES `projectLife` (`id`),
  CONSTRAINT `fk_project_user` FOREIGN KEY (`userCreatorId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'ADAN','Plateforme de mise en relation d\'artistes',NULL,'2022-04-01','ADAN',1,3,9),(2,'WIM','Apprendre en chanson',NULL,'2022-03-28','Work In Music',5,3,10),(3,'Ma Compta','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum tortor tincidunt metus pretium vestibulum. Ut sodales tortor at lacus suscipit ullamcorper. In lacinia in lorem ut posuere. Fusce mattis elit in mi molestie consequat. Curabitur accumsan porta nunc. Ut pretium nec enim lacinia dapibus. Cras tincidunt sagittis turpis nec maximus. ',NULL,'2022-06-14','interne',3,1,1),(4,'Santé +','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ',NULL,'2021-12-02','Institut de podologie',7,2,2);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectLife`
--

DROP TABLE IF EXISTS `projectLife`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projectLife` (
  `id` int NOT NULL,
  `step` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectLife`
--

LOCK TABLES `projectLife` WRITE;
/*!40000 ALTER TABLE `projectLife` DISABLE KEYS */;
INSERT INTO `projectLife` VALUES (1,'idée'),(2,'cadrage'),(3,'réalisation'),(4,'clôture');
/*!40000 ALTER TABLE `projectLife` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES (1,'adaptabilité'),(2,'aisance relationnelle'),(3,'animation'),(4,'assertivité'),(5,'audace'),(6,'autonomie'),(7,'capacité à déléguer'),(8,'capacité à motiver'),(9,'communication'),(10,'concentration'),(11,'confiance en soi'),(12,'coopération'),(13,'créativité'),(14,'curiosité'),(15,'écoute'),(16,'empathie'),(17,'esprit critique'),(18,'esprit d\'équipe'),(19,'esprit entreprendre'),(20,'esprit d\'initiative'),(21,'gestion du stress'),(22,'humilité'),(23,'intelligence emotionnelle'),(24,'leadership'),(25,'négociation'),(26,'networking'),(27,'perséverance'),(28,'persuasion'),(29,'présentation'),(30,'résilience'),(31,'résolution de conflit'),(32,'résolution de problème'),(33,'rhétorique'),(34,'rigueur'),(35,'sens des responsabilités'),(36,'HTML'),(37,'CSS'),(38,'javaScript'),(39,'SQL'),(40,'React'),(41,'Express'),(42,'Node'),(43,'PHP'),(44,'Java'),(45,'C++'),(46,'C#'),(47,'.net'),(48,'python'),(49,'Ruby'),(50,'pearl'),(51,'Cobol'),(52,'pascal'),(53,'C'),(54,'Vue'),(55,'ReactNative'),(56,'Delphi'),(57,'Go'),(58,'marketing'),(59,'RH'),(60,'finances'),(61,'legal');
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skillNot`
--

DROP TABLE IF EXISTS `skillNot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skillNot` (
  `user_id` int NOT NULL,
  `skill_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`skill_id`),
  KEY `fk_user_has_skill_skill2_idx` (`skill_id`),
  KEY `fk_user_has_skill_user2_idx` (`user_id`),
  CONSTRAINT `fk_user_has_skill_skill2` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`id`),
  CONSTRAINT `fk_user_has_skill_user2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skillNot`
--

LOCK TABLES `skillNot` WRITE;
/*!40000 ALTER TABLE `skillNot` DISABLE KEYS */;
/*!40000 ALTER TABLE `skillNot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(64) NOT NULL,
  `lastname` varchar(64) NOT NULL,
  `agency` varchar(64) DEFAULT NULL,
  `position` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Alain','Cooper','Nantes','Agent d\'entretien'),(2,'Marie','Dupont','Lille','Directrice'),(3,'Jérémy','Jorand','Lille','Tech Lead'),(4,'Juliane','Casier','Paris','CTO'),(5,'Thomas','Di Cola','Bruxelles','PO'),(6,'Romain','Le Floch','Nantes','Manager'),(7,'Camille','Arvieu','Lille','Stagiaire'),(8,'Massima','Mao','Genève','Developpeur'),(9,'Valentin','Dupuis','Casablanca','Chargé de ressources humaines'),(10,'Anne','Martin','Niort','Directrice financière'),(11,'Kevin','Walesch','Brest','Assistant administratif');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishedSkill`
--

DROP TABLE IF EXISTS `wishedSkill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishedSkill` (
  `skill_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`skill_id`,`user_id`),
  KEY `fk_skill_has_user_user1_idx` (`user_id`),
  KEY `fk_skill_has_user_skill1_idx` (`skill_id`),
  CONSTRAINT `fk_skill_has_user_skill1` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`id`),
  CONSTRAINT `fk_skill_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishedSkill`
--

LOCK TABLES `wishedSkill` WRITE;
/*!40000 ALTER TABLE `wishedSkill` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishedSkill` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-29 16:05:29
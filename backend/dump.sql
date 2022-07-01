-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: apside
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
INSERT INTO `acquieredSkill` VALUES (5,1),(3,3),(3,6),(1,7),(3,8),(10,8),(2,9),(6,11),(9,12),(1,13),(8,16),(4,17),(11,19),(7,21),(11,21),(2,26),(6,26),(4,28),(7,28),(9,32),(5,34),(10,35),(8,36),(4,42),(8,44),(11,44),(1,45),(6,45),(9,45),(10,53),(7,54),(5,56),(2,59);
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
  `name` varchar(64) DEFAULT NULL,
  `img` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Banque','src/assets/project/imgCategoryBanque.png'),(2,'Santé','src/assets/project/imgCategorySante.png'),(3,'Environnement','src/assets/project/imgCategoryEnvironnement.png'),(4,'Industrie','src/assets/project/imgCategoryIndustrie.png'),(5,'Agro-alimentaire','src/assets/project/imgCategoryAgroAlimentaire.png'),(6,'Grande distribution','src/assets/project/imgCategoryGrandeDistribution.png'),(7,'Commerce','src/assets/project/imgCategoryCommerce.png'),(8,'E-commerce','src/assets/project/imgCategoryEcommerce.png'),(9,'Culture','src/assets/project/imgCategoryCulture.png'),(10,'Education','src/assets/project/imgCategoryEducation.png'),(11,'Agriculture','src/assets/project/imgCategoryAgriculture.png');
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
INSERT INTO `neededSkill` VALUES (16,1),(28,1),(43,1),(2,2),(14,2),(48,2),(10,3),(26,3),(29,3),(5,4),(13,4),(30,4);
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
INSERT INTO `participant` VALUES (4,2),(4,3),(3,4),(3,5),(2,6),(2,7),(1,8),(1,9);
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
  `title` varchar(128) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'ADAN','Nec nam aliquam sem et. Non curabitur gravida arcu ac. Cursus euismod quis viverra nibh cras pulvinar mattis. Ut etiam sit amet nisl. Neque sodales ut etiam sit amet. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. In cursus turpis massa tincidunt dui ut ornare lectus. Sed viverra tellus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque purus. Pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed cras ornare. Faucibus purus in massa tempor nec feugiat nisl. Aliquam faucibus purus in massa tempor nec. Senectus et netus et malesuada fames. Duis ultricies lacus sed turpis tincidunt id. Sit amet massa vitae tortor condimentum lacinia quis. Et netus et malesuada fames ac turpis egestas integer eget. Nunc lobortis mattis aliquam faucibus purus. Magna sit amet purus gravida quis. Id donec ultrices tincidunt arcu non. Mattis nunc sed blandit libero volutpat sed cras. Sit amet aliquam id diam.',NULL,'2022-04-01','ADAN',1,3,9),(2,'WIM','Nec nam aliquam sem et. Non curabitur gravida arcu ac. Cursus euismod quis viverra nibh cras pulvinar mattis. Ut etiam sit amet nisl. Neque sodales ut etiam sit amet. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. In cursus turpis massa tincidunt dui ut ornare lectus. Sed viverra tellus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque purus. Pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed cras ornare. Faucibus purus in massa tempor nec feugiat nisl. Aliquam faucibus purus in massa tempor nec. Senectus et netus et malesuada fames. Duis ultricies lacus sed turpis tincidunt id. Sit amet massa vitae tortor condimentum lacinia quis. Et netus et malesuada fames ac turpis egestas integer eget. Nunc lobortis mattis aliquam faucibus purus. Magna sit amet purus gravida quis. Id donec ultrices tincidunt arcu non. Mattis nunc sed blandit libero volutpat sed cras. Sit amet aliquam id diam.',NULL,'2022-03-28','Work In Music',5,3,10),(3,'Ma Compta','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum tortor tincidunt metus pretium vestibulum. Ut sodales tortor at lacus suscipit ullamcorper. In lacinia in lorem ut posuere. Fusce mattis elit in mi molestie consequat. Curabitur accumsan porta nunc. Ut pretium nec enim lacinia dapibus. Cras tincidunt sagittis turpis nec maximus. ',NULL,'2022-06-14','interne',3,1,1),(4,'Santé +','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ',NULL,'2021-12-02','Institut de podologie',7,2,2),(5,'La cour de récréation idéale','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Quam id leo in vitae turpis massa sed elementum. Diam quis enim lobortis scelerisque fermentum. Et leo duis ut diam quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nulla aliquet porttitor lacus luctus accumsan tortor. Ut tortor pretium viverra suspendisse. Mattis enim ut tellus elementum sagittis vitae et. Lectus urna duis convallis convallis tellus id interdum velit. Quis varius quam quisque id diam. A condimentum vitae sapien pellentesque habitant morbi tristique. Quis lectus nulla at volutpat diam ut venenatis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lorem ipsum dolor sit amet consectetur adipiscing. Augue interdum velit euismod in pellentesque. Non consectetur a erat nam at lectus urna. Aliquam id diam maecenas ultricies. Sed ullamcorper morbi tincidunt ornare. Aliquam etiam erat velit scelerisque in dictum non consectetur.',NULL,'2021-08-30','collège Professeur Nicaise',2,4,3),(6,'On the way to the Olympics 2024 !','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Quam id leo in vitae turpis massa sed elementum. Diam quis enim lobortis scelerisque fermentum. Et leo duis ut diam quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nulla aliquet porttitor lacus luctus accumsan tortor. Ut tortor pretium viverra suspendisse. Mattis enim ut tellus elementum sagittis vitae et. Lectus urna duis convallis convallis tellus id interdum velit. Quis varius quam quisque id diam. A condimentum vitae sapien pellentesque habitant morbi tristique. Quis lectus nulla at volutpat diam ut venenatis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lorem ipsum dolor sit amet consectetur adipiscing. Augue interdum velit euismod in pellentesque. Non consectetur a erat nam at lectus urna. Aliquam id diam maecenas ultricies. Sed ullamcorper morbi tincidunt ornare. Aliquam etiam erat velit scelerisque in dictum non consectetur.',NULL,'2022-01-01','collège Henri Wallon ',3,1,4),(7,'Avancer ensemble…à bicyclette','Nec nam aliquam sem et. Non curabitur gravida arcu ac. Cursus euismod quis viverra nibh cras pulvinar mattis. Ut etiam sit amet nisl. Neque sodales ut etiam sit amet. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. In cursus turpis massa tincidunt dui ut ornare lectus. Sed viverra tellus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque purus. Pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed cras ornare. Faucibus purus in massa tempor nec feugiat nisl. Aliquam faucibus purus in massa tempor nec. Senectus et netus et malesuada fames. Duis ultricies lacus sed turpis tincidunt id. Sit amet massa vitae tortor condimentum lacinia quis. Et netus et malesuada fames ac turpis egestas integer eget. Nunc lobortis mattis aliquam faucibus purus. Magna sit amet purus gravida quis. Id donec ultrices tincidunt arcu non. Mattis nunc sed blandit libero volutpat sed cras. Sit amet aliquam id diam.',NULL,'2020-03-31','professeurs d\'EPS et une professeure de SEGPA',1,4,5),(8,'Act for impact','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Quam id leo in vitae turpis massa sed elementum. Diam quis enim lobortis scelerisque fermentum. Et leo duis ut diam quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nulla aliquet porttitor lacus luctus accumsan tortor. Ut tortor pretium viverra suspendisse. Mattis enim ut tellus elementum sagittis vitae et. Lectus urna duis convallis convallis tellus id interdum velit. Quis varius quam quisque id diam. A condimentum vitae sapien pellentesque habitant morbi tristique. Quis lectus nulla at volutpat diam ut venenatis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lorem ipsum dolor sit amet consectetur adipiscing. Augue interdum velit euismod in pellentesque. Non consectetur a erat nam at lectus urna. Aliquam id diam maecenas ultricies. Sed ullamcorper morbi tincidunt ornare. Aliquam etiam erat velit scelerisque in dictum non consectetur.',NULL,'2022-06-25','BNP Paris\n',4,3,6),(9,'Les Elles ','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Quam id leo in vitae turpis massa sed elementum. Diam quis enim lobortis scelerisque fermentum. Et leo duis ut diam quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nulla aliquet porttitor lacus luctus accumsan tortor. Ut tortor pretium viverra suspendisse. Mattis enim ut tellus elementum sagittis vitae et. Lectus urna duis convallis convallis tellus id interdum velit. Quis varius quam quisque id diam. A condimentum vitae sapien pellentesque habitant morbi tristique. Quis lectus nulla at volutpat diam ut venenatis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lorem ipsum dolor sit amet consectetur adipiscing. Augue interdum velit euismod in pellentesque. Non consectetur a erat nam at lectus urna. Aliquam id diam maecenas ultricies. Sed ullamcorper morbi tincidunt ornare. Aliquam etiam erat velit scelerisque in dictum non consectetur.',NULL,'2021-05-11','Contrex',6,2,7),(10,'Mon Projet Sportif ','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Quam id leo in vitae turpis massa sed elementum. Diam quis enim lobortis scelerisque fermentum. Et leo duis ut diam quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nulla aliquet porttitor lacus luctus accumsan tortor. Ut tortor pretium viverra suspendisse. Mattis enim ut tellus elementum sagittis vitae et. Lectus urna duis convallis convallis tellus id interdum velit. Quis varius quam quisque id diam. A condimentum vitae sapien pellentesque habitant morbi tristique. Quis lectus nulla at volutpat diam ut venenatis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lorem ipsum dolor sit amet consectetur adipiscing. Augue interdum velit euismod in pellentesque. Non consectetur a erat nam at lectus urna. Aliquam id diam maecenas ultricies. Sed ullamcorper morbi tincidunt ornare. Aliquam etiam erat velit scelerisque in dictum non consectetur.',NULL,'2021-02-27','Intersport',7,2,8),(11,'Mes Projets Territoriaux ','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Quam id leo in vitae turpis massa sed elementum. Diam quis enim lobortis scelerisque fermentum. Et leo duis ut diam quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nulla aliquet porttitor lacus luctus accumsan tortor. Ut tortor pretium viverra suspendisse. Mattis enim ut tellus elementum sagittis vitae et. Lectus urna duis convallis convallis tellus id interdum velit. Quis varius quam quisque id diam. A condimentum vitae sapien pellentesque habitant morbi tristique. Quis lectus nulla at volutpat diam ut venenatis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lorem ipsum dolor sit amet consectetur adipiscing. Augue interdum velit euismod in pellentesque. Non consectetur a erat nam at lectus urna. Aliquam id diam maecenas ultricies. Sed ullamcorper morbi tincidunt ornare. Aliquam etiam erat velit scelerisque in dictum non consectetur.',NULL,'2021-04-02','RTE',11,3,9),(12,'Mise en Oeuvre','Nec nam aliquam sem et. Non curabitur gravida arcu ac. Cursus euismod quis viverra nibh cras pulvinar mattis. Ut etiam sit amet nisl. Neque sodales ut etiam sit amet. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. In cursus turpis massa tincidunt dui ut ornare lectus. Sed viverra tellus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque purus. Pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed cras ornare. Faucibus purus in massa tempor nec feugiat nisl. Aliquam faucibus purus in massa tempor nec. Senectus et netus et malesuada fames. Duis ultricies lacus sed turpis tincidunt id. Sit amet massa vitae tortor condimentum lacinia quis. Et netus et malesuada fames ac turpis egestas integer eget. Nunc lobortis mattis aliquam faucibus purus. Magna sit amet purus gravida quis. Id donec ultrices tincidunt arcu non. Mattis nunc sed blandit libero volutpat sed cras. Sit amet aliquam id diam.',NULL,'2020-12-25','Sacem',9,1,10),(13,'Mon projet vélo','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Quam id leo in vitae turpis massa sed elementum. Diam quis enim lobortis scelerisque fermentum. Et leo duis ut diam quam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nulla aliquet porttitor lacus luctus accumsan tortor. Ut tortor pretium viverra suspendisse. Mattis enim ut tellus elementum sagittis vitae et. Lectus urna duis convallis convallis tellus id interdum velit. Quis varius quam quisque id diam. A condimentum vitae sapien pellentesque habitant morbi tristique. Quis lectus nulla at volutpat diam ut venenatis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lorem ipsum dolor sit amet consectetur adipiscing. Augue interdum velit euismod in pellentesque. Non consectetur a erat nam at lectus urna. Aliquam id diam maecenas ultricies. Sed ullamcorper morbi tincidunt ornare. Aliquam etiam erat velit scelerisque in dictum non consectetur.',NULL,'2022-10-10','Groupama',8,1,11),(14,'Graines de Champions ','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Semper risus in hendrerit gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. At risus viverra adipiscing at in tellus integer feugiat. Suscipit tellus mauris a diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam. Ultricies lacus sed turpis tincidunt id aliquet risus. Ipsum nunc aliquet bibendum enim facilisis gravida. Mattis ullamcorper velit sed ullamcorper morbi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.',NULL,'2022-06-06','Joker',10,1,1),(15,'Go For Good','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Semper risus in hendrerit gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. At risus viverra adipiscing at in tellus integer feugiat. Suscipit tellus mauris a diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam. Ultricies lacus sed turpis tincidunt id aliquet risus. Ipsum nunc aliquet bibendum enim facilisis gravida. Mattis ullamcorper velit sed ullamcorper morbi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.',NULL,'2021-11-14','Galeries Lafayette',1,3,2),(16,'La bourse participative','Nec nam aliquam sem et. Non curabitur gravida arcu ac. Cursus euismod quis viverra nibh cras pulvinar mattis. Ut etiam sit amet nisl. Neque sodales ut etiam sit amet. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. In cursus turpis massa tincidunt dui ut ornare lectus. Sed viverra tellus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque purus. Pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed cras ornare. Faucibus purus in massa tempor nec feugiat nisl. Aliquam faucibus purus in massa tempor nec. Senectus et netus et malesuada fames. Duis ultricies lacus sed turpis tincidunt id. Sit amet massa vitae tortor condimentum lacinia quis. Et netus et malesuada fames ac turpis egestas integer eget. Nunc lobortis mattis aliquam faucibus purus. Magna sit amet purus gravida quis. Id donec ultrices tincidunt arcu non. Mattis nunc sed blandit libero volutpat sed cras. Sit amet aliquam id diam.',NULL,'2021-03-13','Malakoff Médéric Humanis',4,4,3),(17,'Donnons ensemble un Avenir','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Semper risus in hendrerit gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. At risus viverra adipiscing at in tellus integer feugiat. Suscipit tellus mauris a diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam. Ultricies lacus sed turpis tincidunt id aliquet risus. Ipsum nunc aliquet bibendum enim facilisis gravida. Mattis ullamcorper velit sed ullamcorper morbi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.',NULL,'2021-07-26','IAT ',7,2,4),(18,'Thermalire, la bibliothèque estivale au coeur du parc thermal','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Semper risus in hendrerit gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. At risus viverra adipiscing at in tellus integer feugiat. Suscipit tellus mauris a diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam. Ultricies lacus sed turpis tincidunt id aliquet risus. Ipsum nunc aliquet bibendum enim facilisis gravida. Mattis ullamcorper velit sed ullamcorper morbi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.',NULL,'2022-03-26','Bibliothèque multimédia intercommunale (Bmi)',2,3,5),(19,'Portraits de Seniors','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Semper risus in hendrerit gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. At risus viverra adipiscing at in tellus integer feugiat. Suscipit tellus mauris a diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam. Ultricies lacus sed turpis tincidunt id aliquet risus. Ipsum nunc aliquet bibendum enim facilisis gravida. Mattis ullamcorper velit sed ullamcorper morbi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.',NULL,'2019-01-01','Bibliothèque départementale du Bas-Rhin',5,3,6),(20,'odyssee','Nec nam aliquam sem et. Non curabitur gravida arcu ac. Cursus euismod quis viverra nibh cras pulvinar mattis. Ut etiam sit amet nisl. Neque sodales ut etiam sit amet. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. In cursus turpis massa tincidunt dui ut ornare lectus. Sed viverra tellus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque purus. Pellentesque habitant morbi tristique senectus et netus. Nunc sed blandit libero volutpat sed cras ornare. Faucibus purus in massa tempor nec feugiat nisl. Aliquam faucibus purus in massa tempor nec. Senectus et netus et malesuada fames. Duis ultricies lacus sed turpis tincidunt id. Sit amet massa vitae tortor condimentum lacinia quis. Et netus et malesuada fames ac turpis egestas integer eget. Nunc lobortis mattis aliquam faucibus purus. Magna sit amet purus gravida quis. Id donec ultrices tincidunt arcu non. Mattis nunc sed blandit libero volutpat sed cras. Sit amet aliquam id diam.',NULL,'2019-08-16','Wild Code School',8,2,7),(21,'MonProjetErasmus+','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Semper risus in hendrerit gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. At risus viverra adipiscing at in tellus integer feugiat. Suscipit tellus mauris a diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam. Ultricies lacus sed turpis tincidunt id aliquet risus. Ipsum nunc aliquet bibendum enim facilisis gravida. Mattis ullamcorper velit sed ullamcorper morbi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.',NULL,'2021-09-05','Leroy Merlin',3,1,8),(22,'Caddie Plein','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Semper risus in hendrerit gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. At risus viverra adipiscing at in tellus integer feugiat. Suscipit tellus mauris a diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam. Ultricies lacus sed turpis tincidunt id aliquet risus. Ipsum nunc aliquet bibendum enim facilisis gravida. Mattis ullamcorper velit sed ullamcorper morbi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.',NULL,'2021-06-15','Auchan Retail France',6,2,9),(23,'PassRoute','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Semper risus in hendrerit gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. At risus viverra adipiscing at in tellus integer feugiat. Suscipit tellus mauris a diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam. Ultricies lacus sed turpis tincidunt id aliquet risus. Ipsum nunc aliquet bibendum enim facilisis gravida. Mattis ullamcorper velit sed ullamcorper morbi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.',NULL,'2021-04-19','DDE',9,3,10),(24,'BigBill','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Semper risus in hendrerit gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. At risus viverra adipiscing at in tellus integer feugiat. Suscipit tellus mauris a diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium viverra suspendisse potenti nullam. Ultricies lacus sed turpis tincidunt id aliquet risus. Ipsum nunc aliquet bibendum enim facilisis gravida. Mattis ullamcorper velit sed ullamcorper morbi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.',NULL,'2020-05-19','interne',11,2,11);
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
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectLife`
--

LOCK TABLES `projectLife` WRITE;
/*!40000 ALTER TABLE `projectLife` DISABLE KEYS */;
INSERT INTO `projectLife` VALUES (1,'Idée'),(2,'Cadrage'),(3,'Réalisation'),(4,'Clôture');
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
  `name` varchar(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES (1,'adaptabilité'),(2,'aisance relationnelle'),(3,'animation'),(5,'audace'),(6,'autonomie'),(7,'capacité à déléguer'),(8,'capacité à motiver'),(9,'communication'),(10,'concentration'),(11,'confiance en soi'),(12,'coopération'),(13,'créativité'),(14,'curiosité'),(16,'empathie'),(17,'esprit critique'),(19,'esprit entreprendre'),(21,'gestion du stress'),(26,'React.JS'),(28,'persuasion'),(29,'présentation'),(30,'MySQL'),(32,'résolution de problème'),(34,'rigueur'),(35,'sens des responsabilités'),(36,'HTML'),(42,'Node'),(43,'PHP'),(44,'Java'),(45,'C++'),(48,'python'),(53,'C'),(54,'Vue'),(56,'CSS'),(59,'RH');
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-01  9:57:09

-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: rto
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

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
-- Table structure for table `admin_login`
--

DROP TABLE IF EXISTS `admin_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_login` (
  `username` varchar(15) NOT NULL,
  `password` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_login`
--

LOCK TABLES `admin_login` WRITE;
/*!40000 ALTER TABLE `admin_login` DISABLE KEYS */;
INSERT INTO `admin_login` VALUES ('admin','admin123');
/*!40000 ALTER TABLE `admin_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `booking` (
  `regno` varchar(10) NOT NULL,
  `violationno` varchar(3) NOT NULL,
  `police` varchar(15) NOT NULL,
  `time` varchar(10) DEFAULT NULL,
  `date` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`regno`,`violationno`,`police`),
  KEY `violationno` (`violationno`),
  KEY `police` (`police`),
  CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`violationno`) REFERENCES `violations` (`no`),
  CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`police`) REFERENCES `police_login` (`username`),
  CONSTRAINT `booking_ibfk_3` FOREIGN KEY (`regno`) REFERENCES `vehicle` (`regno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES ('KA01 DP870','8','preet','14:51:09','28-11-2017'),('KA03 AC500','2','fool','14:03:06','28-11-2017'),('KA03 AC500','2','preet','2','2'),('KA03 AC500','3','fool','14:06:56','28-11-2017'),('KA03 AC500','4','fool','14:08:52','28-11-2017'),('KA03 AC500','5','fool','14:09:46','28-11-2017'),('KA04 SA404','7','fool','14:22:05','28-11-2017'),('KA08 BC123','8','preet','15:54:04','28-11-2017');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driverlicense`
--

DROP TABLE IF EXISTS `driverlicense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `driverlicense` (
  `application_no` int(11) NOT NULL,
  `rto` varchar(40) DEFAULT NULL,
  `user` varchar(15) DEFAULT NULL,
  `fname` varchar(15) DEFAULT NULL,
  `lname` varchar(15) DEFAULT NULL,
  `mobile` char(10) DEFAULT NULL,
  `perm_addr` varchar(100) DEFAULT NULL,
  `perm_city` varchar(20) DEFAULT NULL,
  `perm_pin` char(6) DEFAULT NULL,
  `gender` varchar(7) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `aadhar` varchar(15) DEFAULT NULL,
  `temp_addr` varchar(100) DEFAULT NULL,
  `temp_city` varchar(15) DEFAULT NULL,
  `temp_pin` char(6) DEFAULT NULL,
  `dl_no` int(11) DEFAULT NULL,
  `id_proof` varchar(50) DEFAULT NULL,
  `age_proof` varchar(50) DEFAULT NULL,
  `passed` varchar(5) DEFAULT 'false',
  `ll_no` int(11) NOT NULL,
  `type` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`application_no`),
  UNIQUE KEY `ll_no` (`ll_no`),
  CONSTRAINT `driverlicense_ibfk_1` FOREIGN KEY (`ll_no`) REFERENCES `learnerlicense` (`application_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driverlicense`
--

LOCK TABLES `driverlicense` WRITE;
/*!40000 ALTER TABLE `driverlicense` DISABLE KEYS */;
INSERT INTO `driverlicense` VALUES (25,'KA04 - Yeshwanthpur, Bangalore','preet','Preetham','Maiya','9998887776','# 86','Blore','123455','null','null','null','null','null','null',525,'./uploads/preet~ID_Proof~51-1510504957108','./uploads/preet~Age_Proof~jpeg-1510504962355','true',57,'HMV'),(32,'KA05 - Jayanagar, Bangalore','preet','Preetham','Maiya','9999999998','No 98','Bangalore','789987','null','null','null','null','null','null',532,'./uploads/preet~ID_Proof~51-1510552611665','./uploads/preet~Age_Proof~51-1510552620134','false',59,'LMVNT');
/*!40000 ALTER TABLE `driverlicense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learnerlicense`
--

DROP TABLE IF EXISTS `learnerlicense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `learnerlicense` (
  `application_no` int(11) NOT NULL,
  `rto` varchar(40) DEFAULT NULL,
  `user` varchar(30) DEFAULT NULL,
  `fname` varchar(15) DEFAULT NULL,
  `lname` varchar(15) DEFAULT NULL,
  `mobile` char(10) DEFAULT NULL,
  `perm_addr` varchar(100) DEFAULT NULL,
  `perm_city` varchar(15) DEFAULT NULL,
  `perm_pin` char(6) DEFAULT NULL,
  `gender` varchar(7) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `aadhar` varchar(15) DEFAULT NULL,
  `temp_addr` varchar(100) DEFAULT NULL,
  `temp_city` varchar(15) DEFAULT NULL,
  `temp_pin` char(6) DEFAULT NULL,
  `passed` varchar(5) DEFAULT 'false',
  `id_proof` varchar(50) DEFAULT NULL,
  `age_proof` varchar(50) DEFAULT NULL,
  `ll_no` int(11) DEFAULT NULL,
  PRIMARY KEY (`application_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learnerlicense`
--

LOCK TABLES `learnerlicense` WRITE;
/*!40000 ALTER TABLE `learnerlicense` DISABLE KEYS */;
INSERT INTO `learnerlicense` VALUES (54,'KA09 - Mysore','preet','Preetham','Maiya','9338447555','Hooli','Bangalore','345543','null','null','null','null','null','null','true','./uploads/preet~ID_Proof~51-1510552611665','./uploads/preet~Age_Proof~51-1510552620134',NULL),(56,'KA11 - Mandya','preet','Preet','Maiya','9999999999','hooli','jojo','456654','null','null','null','null','null','null','true','./uploads/preet~ID_Proof~51-1510552611665','./uploads/preet~Age_Proof~51-1510552620134',500),(57,'KA04 - Yeshwanthpur, Bangalore','preet','Preetham','Maiya','9998887776','# 86','Blore','123455','null','null','null','null','null','null','true','./uploads/preet~ID_Proof~51-1510552611665','./uploads/preet~Age_Proof~51-1510552620134',501),(58,'KA04 - Yeshwanthpur, Bangalore','preet','Preetham','Maiya','9998887766','no 89','Bangalore','560069','male','null','null','null','null','null','false','./uploads/preet~ID_Proof~51-1510552611665','./uploads/preet~Age_Proof~51-1510552620134',502),(59,'KA05 - Jayanagar, Bangalore','preet','Preetham','Maiya','9999999998','No 98','Bangalore','789987','null','null','null','null','null','null','true','./uploads/preet~ID_Proof~51-1510552611665','./uploads/preet~Age_Proof~51-1510552620134',503),(60,'KA05 - Jayanagar, Bangalore','layeeq','Layeeq','Ahmed','9998888744','#89','Bangalore','560778','null','null','null','null','null','null','true','./uploads/layeeq~ID_Proof~jpeg-1510556159067','./uploads/layeeq~Age_Proof~jpg-1510556155687',504),(61,'KA06 - Tumkur','layeeq','Layeeq','Ahmed','9998887776','#56','Bangalre','560099','null','null','null','null','null','null','false','./uploads/layeeq~ID_Proof~jpeg-1510556159067','./uploads/layeeq~Age_Proof~jpg-1510556155687',505),(62,'KA01 - Koramangala, Bangalore','layeeq','Layeeq','Ahmed','9988998877','#67','Bangalore','678987','null','null','null','null','null','null','false','./uploads/layeeq~ID_Proof~jpeg-1510556159067','./uploads/layeeq~Age_Proof~jpg-1510556155687',506),(65,'KA04 - Yeshwanthpur, Bangalore','kru','Krutika','VH','7282828282','Peramant house number','perma city','560032','female','null','null','null','null','null','false','./uploads/kru~ID_Proof~jpeg-1510557239517','./uploads/kru~Age_Proof~52-1510557246607',509),(66,'KA04 - Yeshwanthpur, Bangalore','kru','Krutika','VH','8232400000','permanent house number','perma city','560032','others','null','null','null','null','null','false','./uploads/kru~ID_Proof~jpeg-1510557239517','./uploads/kru~Age_Proof~52-1510557246607',510),(73,'KA01 - Koramangala, Bangalore','mallu','Lol','Lol','9999999998','#43','Blore','456654','null','null','null','null','null','null','false','./uploads/mallu~ID_Proof~jpg-1511863959597','./uploads/mallu~Age_Proof~jpg-1511863961946',517);
/*!40000 ALTER TABLE `learnerlicense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ll_type`
--

DROP TABLE IF EXISTS `ll_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ll_type` (
  `no` int(11) NOT NULL,
  `user` varchar(15) NOT NULL,
  `type` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`no`,`user`),
  UNIQUE KEY `user` (`user`,`type`),
  CONSTRAINT `ll_type_ibfk_1` FOREIGN KEY (`no`) REFERENCES `learnerlicense` (`application_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ll_type`
--

LOCK TABLES `ll_type` WRITE;
/*!40000 ALTER TABLE `ll_type` DISABLE KEYS */;
INSERT INTO `ll_type` VALUES (66,'kru','HPMV'),(65,'kru','HTV'),(61,'layeeq','FVG'),(62,'layeeq','HMV'),(60,'layeeq','MCWG'),(73,'mallu','MC 50CC'),(57,'preet','HMV'),(58,'preet','HPMV'),(56,'preet','HTV'),(59,'preet','LMVNT'),(54,'preet','MC 50CC');
/*!40000 ALTER TABLE `ll_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `police_login`
--

DROP TABLE IF EXISTS `police_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `police_login` (
  `username` varchar(15) NOT NULL,
  `fname` varchar(15) DEFAULT NULL,
  `lname` varchar(15) DEFAULT NULL,
  `password` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `police_login`
--

LOCK TABLES `police_login` WRITE;
/*!40000 ALTER TABLE `police_login` DISABLE KEYS */;
INSERT INTO `police_login` VALUES ('fool','foo','Foo','Bar'),('preet','maiya','Preetham','Maiya');
/*!40000 ALTER TABLE `police_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_login`
--

DROP TABLE IF EXISTS `user_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_login` (
  `username` varchar(15) NOT NULL,
  `password` varchar(15) DEFAULT NULL,
  `fname` varchar(15) DEFAULT NULL,
  `lname` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_login`
--

LOCK TABLES `user_login` WRITE;
/*!40000 ALTER TABLE `user_login` DISABLE KEYS */;
INSERT INTO `user_login` VALUES ('foo','foo','Foo','Bar'),('kirti','kirtisingh','Kirti','Singh'),('kru','krutika','Krutika','VH'),('layeeq','layeeq','Layeeq','Ahmed'),('mallu','iammallu','Malika','Makker'),('preet','maiya','Preetham','Maiya'),('preet123','maiya','Preetham','Maiya');
/*!40000 ALTER TABLE `user_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehicle` (
  `application_no` int(11) NOT NULL AUTO_INCREMENT,
  `rto` varchar(30) DEFAULT NULL,
  `user` varchar(15) DEFAULT NULL,
  `passed` varchar(5) DEFAULT 'false',
  `fname` varchar(15) DEFAULT NULL,
  `lname` varchar(15) DEFAULT NULL,
  `mobile` char(10) DEFAULT NULL,
  `perm_addr` varchar(50) DEFAULT NULL,
  `perm_city` varchar(10) DEFAULT NULL,
  `perm_pin` char(6) DEFAULT NULL,
  `gender` varchar(7) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `aadhar` varchar(15) DEFAULT NULL,
  `temp_addr` varchar(50) DEFAULT NULL,
  `temp_city` varchar(15) DEFAULT NULL,
  `temp_pin` char(6) DEFAULT NULL,
  `chassis_no` varchar(30) DEFAULT NULL,
  `engine_no` varchar(30) DEFAULT NULL,
  `ownership` varchar(25) DEFAULT NULL,
  `vehicle_type` varchar(13) DEFAULT NULL,
  `regno` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`application_no`),
  UNIQUE KEY `regno` (`regno`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1,'KA03 - Indiranagar, Bangalore','preet','true','Preetha','AMaiy','9998887776','45','Blore','123456','null','null','null','null','null','null','3452','21432','FIRM','undefined','KA03 AC500'),(2,'KA04 - Yeshwanthpur, Bangalore','mallu','true','Malika','Makker','9292929292','sample add','sampl','560023','female','null','null','null','null','null','23423525','23423235','INDIVIDUAL','NON-TRANSPORT','KA04 SA404'),(3,'KA04 - Yeshwanthpur, Bangalore','layeeq','false','Layeeq','Ahmed','9879879876','my house','mycity','560032','male','null','null','null','null','null','84483929','2929492','INDIVIDUAL','NON-TRANSPORT',NULL),(4,'KA04 - Yeshwanthpur, Bangalore','layeeq','false','Layeeq','Ahmed','9879879876','perma house','mycity','560021','male','null','null','null','null','null','999213312','999234324','INDIVIDUAL','TRANSPORT',NULL),(5,'KA01 - Koramangala, Bangalore','mallu','true','Preetham','Maiya','9999999999','#45','Blore','789987','null','null','null','null','null','null','5676','5678','INDIVIDUAL','NON-TRANSPORT','KA01 DP870'),(6,'KA08 - Kolar Gold Fields','preet123','true','Preetham','Maiya','8765432101','#45','Bangalore','678987','male','null','null','null','null','null','12345','23445','INDIVIDUAL','NON-TRANSPORT','KA08 BC123');
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `violations`
--

DROP TABLE IF EXISTS `violations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `violations` (
  `no` varchar(2) NOT NULL,
  `reason` varchar(150) DEFAULT NULL,
  `act` varchar(150) DEFAULT NULL,
  `fine` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `violations`
--

LOCK TABLES `violations` WRITE;
/*!40000 ALTER TABLE `violations` DISABLE KEYS */;
INSERT INTO `violations` VALUES ('1','Dangerous Drive Two Wheeler','M.V.Act 184','300'),('10','Defective Fare Meter','16 Clause (K)','100'),('11','Defective Silencer','16 Clause 120','100'),('12','Emitting Black Somke','190 Clause (2)','300'),('13','Shrill Horn','190 Clause (2)','100'),('14','Without Permit','190 Clause 192','-1'),('15','Without Driving License Two Wheeler','Sec.3 read with Sec.181 of the M.V. Act.','300'),('16','Without Driving License Non-Transport Vehicle','Sec.3 read with Sec.181 of the M.V. Act.','400'),('17','Without Driving License Transport Vehicle','Sec.3 read with Sec.181 of the M.V. Act.','500'),('18','Driving a Motor Vehicle in any public place by an under aged person','Sec.4 read with Sec.181 of the M.V. Act.','500'),('19','Owner of a Motor Vehicle permitted any person to drive his/her Vehicle in contravention of section 3 or 4','Sec.5 read with Sec.180 of the M.V. Act.','1000'),('2','Dangerous Drive Non-Transport Vehicle(White Board)','M.V.Act 184','400'),('20','Jumping Traffic Signal','Rule 119, read with section 177, M.V. Act','100'),('21','Wrong Parking','190 Clause 117','100'),('22','Cutting Yellow Lane/Lane Discipline','190 Clause 119','100'),('23','Defective Number Plate','190 Clause 50','100'),('24','No Entry','190 Clause 115','100'),('25','H.T.V. Prohibited','115 R/w 177','100'),('26','Without Uniform','14 R/w 177','100'),('27','Without I.C','14 R/w 106','500'),('28','Without F.C','14 R/w 56','-1'),('29','Defective Head Light','14 R/w 106','100'),('3','Dangerous Drive Transport Vehicle(Yellow Board)','M.V.Act 184','500'),('30','Without Tail Light','14 R/w 250','100'),('31','Driving any Motor Vehicle without number plate','Rule 50 of the Central Motor Vehicle Rules read with section 177 of the M.V. Act','200'),('32','Footboard Traveling','94 Clause (2)','100'),('33','Gents Traveling Ladies Seat in BMTC Bus','94 Clause (4)','100'),('34','Holding / using Mobile Phone while Driving / riding a Vehicle','Section 230 (A) KMVR R/W Sec 177, I.M.V Act','100'),('35','Not wearing Helmet to head while riding the Vehicle','230 of the KMVR 1989 in sub rule (1)','100'),('36','Triple riding','Section 128 (1), MV Act R/W sec 177 MV Act','100'),('37','Wrong Parking + Towing charges(2Wheeler)',' NA ','300'),('38','Wrong Parking + Towing charges (Car)',' NA ','400'),('39','Wrong Parking + Towing charges (HGV)',' NA ','500'),('4','Whoever drives a Vehicle or cause Vehicle to be driven at a speed exceeding the maximum speed fixed','Section 112 read with sec.183(1) & (2) of M.V. Act','300'),('40','Driving without wearing Seat Belt',' NA ','100'),('41','Using Black Film/Other Materials',' NA ','200'),('5','Racing & trails of speed','Section.189 of M.V. Act','500'),('6','Carrying excess passengers ini) 3 Wheeled Vehicleii) Transport Vehicles including buses','Section 177 of the M.V. Act','100'),('7','Drunken Drive','M.V.Act 185','-1'),('8','No Parking','Section 177 of M.V. Act','100'),('9','Demanding Excess Fare & refusal to come for hire etc., by Autoricksaw Driver or Taxi Driver','Rule 13 (U) of the KMV Rules read with Section 177 of the M.V. Act','200');
/*!40000 ALTER TABLE `violations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-28 18:00:04

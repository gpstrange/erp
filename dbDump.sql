-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `college_events`;
CREATE TABLE `college_events` (
  `name` varchar(60) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdUserType` varchar(60) NOT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdBy` int(15) NOT NULL,
  `dept` varchar(60) DEFAULT NULL,
  `class` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `college_events` (`name`, `description`, `createdUserType`, `fromDate`, `toDate`, `createdAt`, `createdBy`, `dept`, `class`) VALUES
('annual day',	'akasdasd',	'PRINCIPAL',	'2018-04-24 23:22:19',	'2018-04-27 23:22:19',	'2018-04-11 12:48:15',	1,	NULL,	NULL),
('annual day',	'kcksdflkslkdfnlskdn',	'HOD',	'2018-04-17 23:23:13',	'2018-04-19 23:23:13',	'2018-04-11 12:48:27',	1,	'MCA',	NULL),
('ascas',	'uhfsdhj',	'ADVISOR',	'2018-04-10 16:46:17',	'2018-04-10 16:46:17',	'2018-04-11 12:48:50',	1,	NULL,	'2ECEA'),
('INog',	'jsgdjasgdjasgdjgasjhd',	'HOD',	'2018-04-17 23:23:13',	'2018-04-17 23:33:13',	'2018-04-11 12:53:14',	2,	'ECE',	NULL),
('SOMthin',	'ahjahvsdjh',	'HOD',	'2018-04-17 23:23:13',	'2018-04-17 23:23:13',	'2018-04-11 12:54:01',	5,	'MCA',	NULL),
('Some day',	'jashdajhsdjk',	'PRINCIPAL',	'2018-04-17 00:25:24',	'2018-04-18 00:25:24',	'2018-04-11 18:58:20',	2,	NULL,	NULL),
('ksdjkdsj',	'jhasdjhasdjh',	'PRINCIPAL',	'2018-04-17 00:28:37',	'2018-04-18 00:28:37',	'2018-04-11 18:58:47',	2,	NULL,	NULL),
('Hrlloo',	'bjascb',	'ADVISOR',	'2018-04-24 00:32:47',	'2018-04-26 00:32:47',	'2018-04-11 19:03:00',	1,	NULL,	NULL),
('Heyy',	'7777777777777777',	'ADVISOR',	'2018-04-24 00:36:58',	'2018-04-26 00:36:58',	'2018-04-11 19:07:08',	1,	'MECH',	'2ECEA'),
('Holiday',	'jkasdhfkjas',	'ADVISOR',	'2018-04-18 11:14:41',	'2018-04-19 11:14:41',	'2018-04-12 05:44:54',	1,	'MECH',	'2ECEA');

DROP TABLE IF EXISTS `leaveRequests`;
CREATE TABLE `leaveRequests` (
  `username` varchar(255) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `dept` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `advisorName` varchar(60) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `parentMobile` bigint(20) NOT NULL,
  `fromDate` date NOT NULL,
  `toDate` date NOT NULL,
  `wardenPermission` tinyint(4) DEFAULT NULL,
  `advisorPermission` tinyint(4) DEFAULT NULL,
  `hodPermission` tinyint(4) DEFAULT NULL,
  `principalPermission` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `leaveRequests` (`username`, `phone`, `dept`, `name`, `class`, `createdAt`, `advisorName`, `reason`, `parentMobile`, `fromDate`, `toDate`, `wardenPermission`, `advisorPermission`, `hodPermission`, `principalPermission`) VALUES
('711516106037',	9090738889,	'MCA',	'Guru',	'2ECEA',	'2018-04-08 09:55:06',	'yogeshwaran',	'akjdakjsdkjjjk',	858888888,	'2018-04-08',	'2018-04-08',	0,	0,	0,	0),
('711516106037',	9090738889,	'MCA',	'Guru',	'2ECEB',	'2018-04-08 09:55:06',	'yogeshwaran',	'qweqweqweqweqwe',	858888888,	'2018-04-08',	'2018-04-08',	0,	0,	0,	0),
('711516106037',	9090738889,	'MECH',	'Guru',	'3MECHA',	'2018-04-08 09:55:06',	'yogeshwaran',	'qweqweqweqweqwe',	858888888,	'2018-04-08',	'2018-04-08',	0,	0,	0,	0),
('711516106037',	9090738889,	'MCA',	'Guru',	'2ECEA',	'2018-04-11 18:46:00',	'My namw',	'kasjnkjajksd',	154545445,	'2018-04-18',	'2018-04-20',	NULL,	NULL,	NULL,	NULL),
('711516106037',	9090738889,	'MCA',	'Guru',	'2ECEA',	'2018-04-11 18:47:02',	'jhadjhas',	'DODO',	56456454,	'2018-04-09',	'2018-04-17',	NULL,	NULL,	NULL,	NULL),
('711516106037',	9090738889,	'MCA',	'Guru',	'2ECEA',	'2018-04-12 03:05:13',	'TEfd',	'kjahdfckjhasdjk',	5456,	'2018-04-24',	'2018-04-27',	NULL,	NULL,	NULL,	NULL);

DROP TABLE IF EXISTS `marks`;
CREATE TABLE `marks` (
  `sub1_name` varchar(60) NOT NULL,
  `sub2_name` varchar(60) NOT NULL,
  `sub3_name` varchar(60) NOT NULL,
  `sub4_name` varchar(60) DEFAULT NULL,
  `sub5_name` varchar(60) DEFAULT NULL,
  `sub6_name` varchar(60) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reg_no` bigint(20) NOT NULL,
  `semester` int(11) NOT NULL,
  `internal` int(11) NOT NULL,
  `dept` varchar(60) NOT NULL,
  `sub1` int(11) NOT NULL,
  `sub2` int(11) NOT NULL,
  `sub3` int(11) NOT NULL,
  `sub4` int(11) DEFAULT NULL,
  `sub5` int(11) DEFAULT NULL,
  `sub6` int(11) DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `marks` (`sub1_name`, `sub2_name`, `sub3_name`, `sub4_name`, `sub5_name`, `sub6_name`, `id`, `reg_no`, `semester`, `internal`, `dept`, `sub1`, `sub2`, `sub3`, `sub4`, `sub5`, `sub6`, `createdBy`, `createdAt`) VALUES
('222',	'111',	'888',	'33',	'66',	'77',	1,	123,	1,	2,	'cse',	99,	98,	98,	89,	97,	99,	NULL,	NULL),
('11',	'88',	'77',	'88',	'67',	'72',	2,	123,	2,	3,	'ece',	99,	98,	99,	98,	98,	99,	NULL,	NULL),
('98',	'89',	'89',	NULL,	NULL,	NULL,	3,	123,	6,	3,	'cse',	98,	89,	89,	NULL,	NULL,	NULL,	NULL,	NULL),
('98',	'89',	'99',	'98',	NULL,	NULL,	4,	123,	7,	3,	'aero',	99,	88,	88,	90,	NULL,	NULL,	NULL,	NULL),
('EC6302',	'EC1301',	'HS6202',	'EC6304',	'MA6301',	'EC4339',	5,	711516106037,	2,	2,	'ece',	99,	89,	89,	77,	100,	66,	NULL,	NULL);

DROP TABLE IF EXISTS `staffs`;
CREATE TABLE `staffs` (
  `name` varchar(60) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dept` varchar(60) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `aadharNumber` bigint(20) NOT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `dob` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `type` varchar(60) NOT NULL,
  `bloodGroup` varchar(20) NOT NULL,
  `community` varchar(20) NOT NULL,
  `role` varchar(60) NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `class` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `staffs` (`name`, `id`, `username`, `password`, `email`, `dept`, `phone`, `aadharNumber`, `pic`, `dob`, `address`, `type`, `bloodGroup`, `community`, `role`, `createdAt`, `class`) VALUES
('rtyr',	1,	'1234567',	'$2a$10$VLKkYoIPBzmNUKLnX/6jYeDrl.wnr.UEdMf0iMQFxmTH0.8Bi2at2',	'prasadguru141@gmail.com',	'MECH',	9597983840,	123456123456,	'ic_launcher.png',	'2018-01-13',	'qwertyui',	'ADVISOR',	'b+',	'MBC',	'1',	'2018-04-11 18:34:01',	'2ECEA'),
('Gowryu',	2,	'12345678',	'$2a$10$VLKkYoIPBzmNUKLnX/6jYeDrl.wnr.UEdMf0iMQFxmTH0.8Bi2at2',	'prasadguru141@gmail.com',	'MCA',	9597983840,	123456123456,	'ic_launcher.png',	'2018-01-13',	'qwertyui',	'PRINCIPAL',	'b+',	'MBC',	'1',	'2018-04-08 14:32:11',	'2ECEA'),
('rtyr',	4,	'123456789',	'$2a$10$VLKkYoIPBzmNUKLnX/6jYeDrl.wnr.UEdMf0iMQFxmTH0.8Bi2at2',	'prasadguru141@gmail.com',	'MECH',	9597983840,	123456123456,	'ic_launcher.png',	'2018-01-13',	'qwertyui',	'HOD',	'b+',	'MBC',	'HOD',	'2018-04-08 14:32:11',	'2ECEA');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dept` varchar(60) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `aadharNumber` bigint(20) NOT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `dob` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `bloodGroup` varchar(60) NOT NULL,
  `community` varchar(60) NOT NULL,
  `accomodation` varchar(60) NOT NULL,
  `class` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` (`createdAt`, `name`, `id`, `username`, `password`, `email`, `dept`, `phone`, `aadharNumber`, `pic`, `dob`, `address`, `bloodGroup`, `community`, `accomodation`, `class`) VALUES
('2018-04-07 18:30:00',	'Guru prasad G',	1,	'123',	'$2a$10$VRfZBITnc5GKHc79gmy.OuP0gE7LweRWcT9b.IOejlsCFOHb4mlma',	'prasadguru141@gmail.com',	'ECE',	9898989,	123456789,	'2018-01-14drawable-land-ldpi-screen.png',	'2018-01-17',	'qwerQWERTYUIASDFGH',	'b+',	'OC',	'hosteller',	''),
('2018-04-07 18:30:00',	'Guru',	2,	'1234',	'$2a$10$kc6YyCsGKC90uagy6Rr80.OmUg5pLiGxH7tEAt9xFJSDHZ1sk.Xpq',	'janani26599@gmail.com',	'S&H',	9898989898,	234567890345,	'14drawable-port-xxxhdpi-screen.png',	'2018-01-11',	'njascahscdiashcdiuashcihsiuchiuashciuhasiuchiashciuashciuhaishchSO*FTomnfc0nq389q3yrn8y',	'O+',	'BCM',	'hosteller',	''),
('2018-04-11 12:50:58',	'Guru',	3,	'711516106037',	'$2a$10$EX47GncSyvj3AI9kpdnZn.LJKUSFQWjieXclbG5yCxeN/bES9xICe',	'gutu@nma.com',	'MCA',	9090738889,	316289,	'2018-03-17lastIssue.png',	'2018-03-15',	'7heafdasodjj',	'G9*',	'BCM',	'hosteller',	'2ECEA'),
('2018-04-07 18:30:00',	'leevern',	4,	'1233',	'$2a$10$tFODlP8IqaF.tLXlAJLlQeILBvKBmkyf8zzuazf9QgwPYwS0ksyi.',	'we@bom.dfh',	'AGRI',	9485949,	7987329,	'2018-03-17[.png',	'2018-03-16',	'adasdad',	'b+',	'BC',	'hosteller',	''),
('2018-04-11 12:50:58',	'Guru',	6,	'711516106038',	'$2a$10$EX47GncSyvj3AI9kpdnZn.LJKUSFQWjieXclbG5yCxeN/bES9xICe',	'gutu@nma.com',	'MCA',	9090738889,	316289,	'2018-03-17lastIssue.png',	'2018-03-15',	'7heafdasodjj',	'G9*',	'BCM',	'hosteller',	'2ECEB');

-- 2018-04-12 06:46:55

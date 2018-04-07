-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `marks` (`sub1_name`, `sub2_name`, `sub3_name`, `sub4_name`, `sub5_name`, `sub6_name`, `id`, `reg_no`, `semester`, `internal`, `dept`, `sub1`, `sub2`, `sub3`, `sub4`, `sub5`, `sub6`) VALUES
('222',	'111',	'888',	'33',	'66',	'77',	1,	123,	1,	2,	'cse',	99,	98,	98,	89,	97,	99),
('11',	'88',	'77',	'88',	'67',	'72',	2,	123,	2,	3,	'ece',	99,	98,	99,	98,	98,	99),
('98',	'89',	'89',	NULL,	NULL,	NULL,	3,	123,	6,	3,	'cse',	98,	89,	89,	NULL,	NULL,	NULL),
('98',	'89',	'99',	'98',	NULL,	NULL,	4,	123,	7,	3,	'aero',	99,	88,	88,	90,	NULL,	NULL),
('EC6302',	'EC1301',	'HS6202',	'EC6304',	'MA6301',	'EC4339',	5,	711516106037,	2,	2,	'ece',	99,	89,	89,	77,	100,	66);

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
  `bloodGroup` varchar(20) NOT NULL,
  `community` varchar(20) NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `staffs` (`name`, `id`, `username`, `password`, `email`, `dept`, `phone`, `aadharNumber`, `pic`, `dob`, `address`, `bloodGroup`, `community`, `role`) VALUES
('rtyr',	1,	'123',	'$2a$10$VLKkYoIPBzmNUKLnX/6jYeDrl.wnr.UEdMf0iMQFxmTH0.8Bi2at2',	'prasadguru141@gmail.com',	'MECH',	9597983840,	123456123456,	'ic_launcher.png',	'2018-01-13',	'qwertyui',	'b+',	'MBC',	1);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` (`name`, `id`, `username`, `password`, `email`, `dept`, `phone`, `aadharNumber`, `pic`, `dob`, `address`, `bloodGroup`, `community`) VALUES
('Guru prasad G',	1,	'123',	'$2a$10$VRfZBITnc5GKHc79gmy.OuP0gE7LweRWcT9b.IOejlsCFOHb4mlma',	'prasadguru141@gmail.com',	'ECE',	9898989,	123456789,	'2018-01-14drawable-land-ldpi-screen.png',	'2018-01-17',	'qwerQWERTYUIASDFGH',	'b+',	'OC'),
('Guru',	2,	'1234',	'$2a$10$kc6YyCsGKC90uagy6Rr80.OmUg5pLiGxH7tEAt9xFJSDHZ1sk.Xpq',	'janani26599@gmail.com',	'S&H',	9898989898,	234567890345,	'14drawable-port-xxxhdpi-screen.png',	'2018-01-11',	'njascahscdiashcdiuashcihsiuchiuashciuhasiuchiashciuashciuhaishchSO*FTomnfc0nq389q3yrn8y',	'O+',	'BCM'),
('Guru',	3,	'711516106037',	'$2a$10$EX47GncSyvj3AI9kpdnZn.LJKUSFQWjieXclbG5yCxeN/bES9xICe',	'gutu@nma.com',	'MCA',	9090738889,	316289,	'2018-03-17lastIssue.png',	'2018-03-15',	'7heafdasodjj',	'G9*',	'BCM'),
('leevern',	4,	'1233',	'$2a$10$tFODlP8IqaF.tLXlAJLlQeILBvKBmkyf8zzuazf9QgwPYwS0ksyi.',	'we@bom.dfh',	'AGRI',	9485949,	7987329,	'2018-03-17[.png',	'2018-03-16',	'adasdad',	'b+',	'BC');

-- 2018-04-07 02:49:39


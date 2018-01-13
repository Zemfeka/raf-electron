USE test;

CREATE TABLE `bookings` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClientName` varchar(45) DEFAULT NULL,
  `ClaimentFirstName` varchar(45) DEFAULT NULL,
  `ClaimentLastName` varchar(45) DEFAULT NULL,
  `BookingDate` date DEFAULT NULL,
  `Time` time DEFAULT NULL,
  `TrialDate` datetime DEFAULT NULL,
  `RequestedReportDate` datetime DEFAULT NULL,
  `Reference` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `CreatedByID` int(11) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  `UpdatedByID` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
SELECT * FROM test.documents;

CREATE TABLE `documents` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BookingId` int(11) DEFAULT NULL,
  `DocumentExtension` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `DocumentName` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `DocumentType` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Contents` blob,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

CREATE TABLE `attorneys` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BookingId` int(11) DEFAULT NULL,
  `ClientName` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `ContactPerson` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `PhoneNumber` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `Email` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;


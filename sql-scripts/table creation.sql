CREATE TABLE `assessments` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Notes` varchar(45) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `BookingId` int(11) DEFAULT NULL,
  `ShowNoShow` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1 COMMENT='This table will hold the assessment information';


CREATE TABLE `businesses` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `RegistrationNumber` varchar(50) DEFAULT NULL,
  `VatNumber` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COMMENT='This table will hold the business information';

CREATE TABLE `invoices` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Number` int(11) NOT NULL,
  `InvoiceDate` date NOT NULL,
  `Total` decimal(10,2) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `BookingId` int(11) NOT NULL,
  `InvoiceBusinessId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COMMENT='This table will hold the invoice information';

CREATE TABLE `invoiceitems` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Quantity` int(11) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Description` varchar(50) DEFAULT NULL,
  `Price` decimal(10,2) NOT NULL,
  `SubTotal` decimal(10,2) NOT NULL,
  `InvoiceId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COMMENT='This table will hold the invoice items information';

CREATE TABLE `reports` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Notes` varchar(45) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `BookingId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COMMENT='This table will hold the report information';

CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COMMENT='This table will hold the user information';




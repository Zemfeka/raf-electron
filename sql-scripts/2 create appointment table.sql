CREATE TABLE `test`.`appointments` (
  `Id` int(11) NOT NULL,
  `ClientName` varchar(45) DEFAULT NULL,
  `ClaimentFirstName` varchar(45) DEFAULT NULL,
  `ClaimentLastName` varchar(45) DEFAULT NULL,
  `AppointmentDate` datetime DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `CreatedByID` int(11) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  `UpdatedByID` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

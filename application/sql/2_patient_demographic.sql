create table patient_demographic
(
	patientId int unsigned,
    firstName varchar(20) not null,
    middleName varchar(20) not null,
    lastName varchar(20) not null,
    gender varchar(10),
    contactNo varchar(12),
    facilityId integer,
    dob datetime,
    socialId varchar(15),
    created timestamp,
    
    primary key(patientId),
    foreign key (facilityId) references facility(id)
);

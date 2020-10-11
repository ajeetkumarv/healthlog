create table appointment
(
	id int unsigned,
    appointDate date,
    appointTime time,
    patientId int unsigned,
    facilityId int unsigned,
    providerId int unsigned,
    speciality varchar(30),
    
    primary key(id),
    foreign key(patientId) references patient_demographic(patientId),
    foreign key(facilityId) references facility(id),
    foreign key(providerId) references provider(id)
);
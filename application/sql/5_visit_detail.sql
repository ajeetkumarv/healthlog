create table visit_detail
(
	visitId int unsigned,
    dateOfVisit datetime not null,
    patientId int unsigned,
    facilityId int unsigned,
    reasonForVisit varchar(200),
    
    primary key(visitId),
    foreign key(patientId) references patient_demographic(patientId),
    foreign key(facilityId) references facility(id)
);
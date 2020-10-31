create table user_detail
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username varchar(20) not null unique,
    contactNo varchar(12),
    facilityId int unsigned,
    licenceNumber varchar(25),
    role varchar(20),
    speciality varchar(50),
    created timestamp,
    foreign key (id) references facility(id)
);
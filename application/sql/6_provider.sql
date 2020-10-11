create table provider
(
	id int unsigned,
    serviceDate date,
    serviceTime time,
    category varchar(30),
    userId int unsigned,
    
    primary key(id),
    foreign key(userId) references user(id)
);
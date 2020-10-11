create table address_book
(
	id int unsigned,
    userId int unsigned,
    addressType varchar(12),
    city varchar(20),
    state varchar(20),
    zip int unsigned,
    primary key(id),
    foreign key(userId) references user(id)
);
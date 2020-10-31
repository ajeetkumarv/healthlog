create table address_book
(
	id int unsigned,
    userId integer,
    addressType varchar(12),
    city varchar(20),
    state varchar(20),
    zip int unsigned,
    primary key(id),
    foreign key(userId) references user_detail(id)
);
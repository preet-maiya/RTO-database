create table user (username varchar(15) primary key, password varchar(15), fname varchar(15), lname varchar(15));
create table admin (username varchar(15) primary key);
create table ll_type(no int, user varchar(15), primary key (no,user));
create table learnerlicense(application_no int primary key, rto varchar(30), user varchar(30), fname varchar(15), lname varchar(15), mobile char(10), perm_addr varchar(50), perm_city varchar(15),perm_pin char(6),  gender varchar(7), email varchar(50), aadhar varchar(15), temp_addr varchar(50), temp_city varchar(15), temp_pin char(6), passed varchar(5) default 'false', id_proof varchar(50), age_proof varchar(50), ll_no int);	
create table driverlicense(application_no int primary key, rto varchar(30), user varchar(30), fname varchar(15), lname varchar(15), mobile char(10), perm_addr varchar(50), perm_city varchar(15),perm_pin char(6),  gender varchar(7), email varchar(50), aadhar varchar(15), temp_addr varchar(50), temp_city varchar(15), temp_pin char(6), dl_no int, id_proof varchar(50), age_proof varchar(50), passed varchar(5) default 'false', ll_no int, type varchar(15));	
	
alter table ll_type add foreign key (user) references learnerlicense(user);
alter table ll_type add column type varchar(15);
alter table ll_type add foreign key (no) references learnerlicense(application_no) on delete cascade;

create table vehicle(application_no int primary key, rto varchar(30), user varchar(30), fname varchar(15), lname varchar(15), mobile char(10), perm_addr varchar(50), perm_city varchar(15),perm_pin char(6),  gender varchar(7), email varchar(50), aadhar varchar(15), temp_addr varchar(50), temp_city varchar(15), temp_pin char(6), chassis_no varchar(30), engine_no varchar(30), ownership varchar(25), vehicle_type varchar(13)); 


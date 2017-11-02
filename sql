create table user (username varchar(15) primary key, fname varchar(15), lname varchar(15), address varchar(50), phone char(10), email varchar(20));
create table admin (username varchar(15) primary key, fname varchar(15), lname varchar(15), address varchar(50), phone char(10), email varchar(20));
create table ll_type(no int, user varchar(15), primary key (no,user));
create table learnerlicense(application_no int primary key, rto varchar(30), user varchar(30), fname varchar(15), lname varchar(15), mobile char(10), perm_addr varchar(50), perm_city varchar(15),perm_pin char(6),  gender varchar(7), email varchar(50), aadhar varchar(15), temp_addr varchar(50), temp_city varchar(15), temp_pin char(6), passed varchar(5) default 'false', id_proof varchar(50), age_proof varchar(50));		
alter table ll_type add foreign key (user) references learnerlicense(user);
alter table ll_type add column type varchar(15);
alter table ll_type add foreign key (no) references learnerlicense(application_no) on delete cascade;



["MC 50CC-Motorcycle 50CC", "MC EX50CC-Motorcycle more than 50CC", "FVG-Motorcycle gearless", "MCWG-Motorcycle with gear", "LMV-Light Motor Vehicle", "LMVNT-Light motor vehicle (Non Transport)", "LMVTR-Light motor vehicle (Transport)", "MGV-Medium goods vehicle", "HMV-Heavy motor vehicle", "HPMV-Heavy Passenger Motor Vehicle", "HTV-Heavy Trasnport Vehicle"]

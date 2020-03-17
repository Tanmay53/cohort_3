<!-- users -->
create table users(
id int not null auto_increment,
name varchar(255) not null,
email varchar(255) not null,
salt varchar(255),
password_hash varchar(255),
primary key(id)
);


<!-- cities -->
create table cities (
    id int not null auto_increment,
    cities varchar(255) not null,
    primary key(id)
);

INSERT INTO cities (cities) 
VALUES ("Hyderabad"), ("Chennai"), ("Banglore"), ("Pune"), ("Gorakhpur");

<!-- buses -->
create table buses (
    id int not null auto_increment,
    source int not null,
    destination int not null,
    bus varchar(255) not null,
    schedule DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key(id),
    FOREIGN KEY(source) REFERENCES cities(id),
    FOREIGN KEY(destination) REFERENCES cities(id)
);


INSERT INTO buses (source, destination, bus) 
VALUES (1, 2, "TS-2034"),
(2, 3, "TS-1729"),
(3, 4, "TS-1024");
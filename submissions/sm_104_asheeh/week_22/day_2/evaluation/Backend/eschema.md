#### Users

```` sql

CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, email varchar(255) UNIQUE  NOT NULL, salt varchar(255) NOT NULL, password_hash varchar(255) NOT NULL, PRIMARY KEY(id));
````

#### Artists

```` sql

CREATE TABLE artists (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id));

INSERT INTO artists (name) VALUES ("Ashish"), ("Amit");
````

#### Albums

```` sql

CREATE TABLE albums(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, year int NOT NULL, artist_id int, PRIMARY KEY(id), FOREIGN KEY (artist_id) REFERENCES artists(id)); 

INSERT INTO albums (name, year, artist_id) VALUES ("Chale Aana", 2019, 1);
````
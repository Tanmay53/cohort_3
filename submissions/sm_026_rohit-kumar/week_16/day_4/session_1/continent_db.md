CREATE DATABASE continent_db

USE continent_db

CREATE TABLE continents (continent_id int, continent_name varchar(50));

INSERT INTO continents (continent_id, continent_name) VALUES  ( 1, 'Asia')
INSERT INTO continents (continent_id, continent_name) VALUES  ( 2, 'Africa');
INSERT INTO continents (continent_id, continent_name) VALUES  ( 3, 'Antarctica');
INSERT INTO continents (continent_id, continent_name) VALUES  ( 4, 'Europe');
INSERT INTO continents (continent_id, continent_name) VALUES  ( 5, 'Australia');



CREATE TABLE countries ( country_id int,  continent_id int, country_name
varchar(50) );

INSERT INTO countries (country_id, continent_id, country_name) VALUES ( 1, 1, 'India')
INSERT INTO countries (country_id, continent_id, country_name) VALUES (2, 2, 'Sudan') 
INSERT INTO countries (country_id, continent_id, country_name) VALUES (3, 3, 'Italy') 
INSERT INTO countries (country_id, continent_id, country_name) VALUES (4, 1, 'China') 
INSERT INTO countries (country_id, continent_id, country_name) VALUES (5, 5, 'New Zealand')

CREATE TABLE cities ( city_id int, country_id int, city_name varchar(50)
);

INSERT INTO cities (city_id, country_id, city_name) VALUES  (1, 1, 'Delhi')
INSERT INTO cities (city_id, country_id, city_name) VALUES  (2, 1, 'Mumbai')
INSERT INTO cities (city_id, country_id, city_name) VALUES  (3, 1, 'Kolkata')
INSERT INTO cities (city_id, country_id, city_name) VALUES  (4, 4, 'Bejing')
INSERT INTO cities (city_id, country_id, city_name) VALUES  (5, 4, 'Hongkong');


SELECT * FROM continents;
SELECT * FROM countries;
SELECT * FROM cities;
SELECT * FROM continents WHERE continent_id > 3
SELECT * FROM cities WHERE country_id = 1



UPDATE continents SET continent_name = 'ASIA' WHERE continent_id = 1
UPDATE countries SET country_name = 'INDIA' WHERE country_id = 1


DELETE FROM continents WHERE continent_id = 3
DELETE FROM continents WHERE continent_name = 'Europe'


TRUNCATE continents;
TRUNCATE countries;
TRUNCATE cities;

DROP TABLE cities;
DROP TABLE countries;
DROP DATABASE continent_db
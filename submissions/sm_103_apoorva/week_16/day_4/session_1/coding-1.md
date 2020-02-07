## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE WORLD_DATA;
```

**Create Tables**

```sql
CREATE TABLE continent ( continent_id int(2), continent varchar(255) );
CREATE TABLE Countries ( country_id varchar(20), continent_id int(6), country varchar(255) );
CREATE TABLE Cities ( city_id char(20), country_id varchar(20), continent_id int(6), city varchar(20) );


```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continent (continent_id, continent) VALUES (1,"Asia");
INSERT INTO continent (continent_id, continent) VALUES (2,"Europe");
INSERT INTO continent (continent_id, continent) VALUES (3,"Australia");
INSERT INTO continent (continent_id, continent) VALUES (4,"North-America");
INSERT INTO continent (continent_id, continent) VALUES (5,"South-America");
INSERT INTO continent (continent_id, continent) VALUES (6,"Africa");

INSERT INTO Countries( country_id, continent_id, country) VALUES ("1",1,"India");
INSERT INTO Countries( country_id, continent_id, country) VALUES ("2",2,"England");
INSERT INTO Countries( country_id, continent_id, country) VALUES ("3",1,"Bangladesh");
INSERT INTO Countries( country_id, continent_id, country) VALUES ("4",2,"Italy");
INSERT INTO Countries( country_id, continent_id, country) VALUES ("5",6,"Kenya");

INSERT INTO Cities (city_id, country_id, continent_id, city) VALUES ("1", "1", 1, "Delhi");
INSERT INTO Cities (city_id, country_id, continent_id, city) VALUES ("2", "1", 1, "Kolkata");
INSERT INTO Cities (city_id, country_id, continent_id, city) VALUES ("3", "1", 1, "Banglore");
INSERT INTO Cities (city_id, country_id, continent_id, city) VALUES ("4", "2", 1, "Dhaka"),("5", "3", 3, "Toronto");


```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT continent FROM continent where continent_id = 3; 
SELECT continent_id FROM continent where continent = "Africa";
SELECT country FROM Countries where continent_id = "1";
SELECT country_id FROM Countries where country = "India";
SELECT city FROM Cities where continent_id = 1;
SELECT city_id FROM Cities where city = "Delhi";

```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE continent SET continent_id = "11" where continent = "North-America";
UPDATE continent SET continent = "AFR" where continent_id = 6; 
UPDATE Countries SET country_id = "IND" where country = "India";
UPDATE Countries SET country = "Afghanistan" where country_id = "3";
UPDATE Cities SET continent_id = "Asia" where continent_id = 1;
UPDATE Cities SET continent_id = 12 where continent_id != 11;
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM continent where continent_id = 3;
DELETE FROM continent where continent = "Asia";
DELETE FROM Countries where country_id = "IND";
DELETE FROM Countries where continent_id = 1;
DELETE FROM Cities where country_id = "2";
DELETE FROM Cities where continent_id = 11;
```

**Empty Tables**

```sql
DELETE FROM continent;
DELETE FROM Countries;
DELETE FROM Cities;
```

**Delete Tables**

```sql
DROP TABLE continent;
DROP TABLE Countries;
DROP TABLE Cities;
```

**Delete Database**

```sql
DROP DATABASE WORLD_DATA;
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE Checklists;
```

**Create Tables**

```sql
CREATE TABLE checks ( user_id varchar(255), name varchar(255) );

CREATE TABLE user_check (check_id varchar(20), user_id varchar(20), check_type varchar(255) );

CREATE TABLE task_list (task_id varchar(20), check_id varchar(20), user_id varchar(20), task_type varchar(255) );

```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO checks(user_id, name) VALUES ("1", "Amitosh"),("2", "Nilesh"),("3", "Aakash"),("4", "Rahul"),("5", "Amit");

INSERT INTO user_check (check_id, user_id, check_type ) VALUES ("1", "1", "Coding"),("2", "1", "Cooking"),("3", "1", "Meeting"),("4", "3", "Coding"),("5","3","Cooking");

INSERT INTO task_list (task_id, check_id, user_id, task_type) VALUES ("1","2","1","C"),("2","3","1","Python"),("3","3","2","Python"),("4","5","1","Brunch"),("5","1","4","Scrum");

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT name from checks where user_id = "1";
SELECT user_id from checks where name = "Nilesh";

SELECT user_id FROM user_check where check_type = "Coding";
SELECT check_type FROM user_check where user_id = "1";

SELECT user_id from task_list where task_type = "Python";
SELECT task_type from task_list where user_id = "1";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE checks SET user_id = "ami" where name = "Amitosh";
UPDATE checks SET name = "amitosh" where user_id = "ami";

UPDATE user_check SET check_type = "Done" where user_id = "3";
UPDATE user_check SET check_type = "Done" where check_id = "1";

UPDATE task_list SET task_type = "Done" where check_id = "3";
UPDATE task_list SET task_type = "Done" where task_id = "1";
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM checks where user_id = "ami";
DELETE FROM checks where name = "Nilesh";

DELETE FROM user_check where check_id = "2";
DELETE FROM user_check where user_id = "3";

DELETE FROM task_list where task_type = "Done";
DELETE FROM task_list where user_id = "4";
```

**Empty Tables**

```sql
DELETE FROM checks;
DELETE FROM user_check;
DELETE FROM task_list;
```

**Delete Tables**

```sql
DROP TABLE checks;
DROP TABLE user_check;
DROP TABLE task_list;
```

**Delete Database**

```sql
DROP DATABASE Checklists;
```

## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE masai;
```

**Create Tables**

```sql
1.CREATE TABLE continents (id varchar(6), continent varchar(255));
2.CREATE TABLE countries (id varchar(6), countries varchar(255), continent_id varchar(6));
3.CREATE TABLE cities (id varchar(6), city varchar(255), country_code varchar(6));
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continents (id, continent) VALUES ("1", "Asia");
INSERT INTO continents (id, continent) VALUES ("2", "Africa");
INSERT INTO continents (id, continent) VALUES ("3", "Europe");
INSERT INTO continents (id, continent) VALUES ("4", "North America");
INSERT INTO continents (id, continent) VALUES ("5", "South America");


INSERT INTO countries (id, country, continent_id) VALUES ("1","India", "1"); 
INSERT INTO countries (id, country, continent_id) VALUES ("2","China", "1"); 
INSERT INTO countries (id, country, continent_id) VALUES ("3","Japan", "1"); 
INSERT INTO countries (id, country, continent_id) VALUES ("4","Germany", "3"); 
INSERT INTO countries (id, country, continent_id) VALUES ("5","USA", "4");


INSERT INTO cities (id, city, country_id) VALUES ("1", "Delhi", "1");
INSERT INTO cities (id, city, country_id) VALUES ("2", "Unnao", "1");
INSERT INTO cities (id, city, country_id) VALUES ("3", "New York", "5");
INSERT INTO cities (id, city, country_id) VALUES ("4", "Tokyo", "3");
INSERT INTO cities (id, city, country_id) VALUES ("5", "Munich", "4");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT continent FROM continents where id = "1";
SELECT * FROM continents where id = "2";

SELECT country FROM  countries where continent_id = "3";
SELECT id FROM countries where country = "USA";

SELECT country_id FROM cities where city = "Unnao";
SELECT city FROM cities where id = "5";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql

UPDATE continents SET continent = "Name Changed" where continent = "South America";
UPDATE continents SET continent = "South America" where continent = "Name Changed";

UPDATE countries SET country = "PAKISTAN" where id = "2";
UPDATE countries SET country = "Australia", continent_id = "6" where id = "5";

UPDATE cities SET city = "Lucknow", country_id = "1"  where id = "3";
UPDATE cities SET city = "Kanpur" where id = "1";
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql

DELETE FROM continents where id = "7";
DELETE FROM continents where continent = "Oceania";

DELETE FROM countries where country = "PAKISTAN";
DELETE FROM countries where  continent_id = "6";

DELETE FROM cities where city = "kanpur";
DELETE FROM cities where country_id = "4";
```

**Empty Tables**

```sql

TRUNCATE TABLE continents;
TRUNCATE TABLE countries;
TRUNCATE TABLE cities;
```

**Delete Tables**

```sql

DROP TABLE continents;
DROP TABLE countries;
DROP TABLE cities;
```

**Delete Database**

```sql

DROP DATABASE masai;
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql

CREATE DATABASE masai;
```

**Create Tables**

```sql

CREATE TABLE checklists (id varchar(6), checklist varchar(255));
CREATE TABLE tasklist (id varchar(6), task varchar(255), checklist_id varchar(6));
CREATE TABLE usersdata (id varchar(6), name varchar(255), checklist_1 varchar(6), checklist_2 varchar(6), checklist_3 varchar(6));
```

**Create Data (Atleast 5 rows in a table)**

```sql

INSERT INTO checklists (id, checklist) VALUES ("1", "Daily task")
INSERT INTO checklists (id, checklist) VALUES ("1", "Fitness list")
INSERT INTO checklists (id, checklist) VALUES ("1", "Weekly task")

INSERT INTO tasklist (id, task, checklist_id) VALUES ("1", "wake_up_at_5", "1");
INSERT INTO tasklist (id, task, checklist_id) VALUES ("2", "breakfast", "1");
INSERT INTO tasklist (id, task, checklist_id) VALUES ("3", "cardio", "2");
INSERT INTO tasklist (id, task, checklist_id) VALUES ("4", "yoga", "2");
INSERT INTO tasklist (id, task, checklist_id) VALUES ("7", "read_a_book", "3");

INSERT INTO userslist (id, name, checklist_1, checklist_2, checklist_3) VALUES ("1", "Nrupul", "1", "0", "3");
INSERT INTO userslist (id, name, checklist_1, checklist_2, checklist_3) VALUES ("2", "Asheesh", "0", "2", "0");
INSERT INTO userslist (id, name, checklist_1, checklist_2, checklist_3) VALUES ("3", "Yogesh", "0", "0", "3");
INSERT INTO userslist (id, name, checklist_1, checklist_2, checklist_3) VALUES ("4", "Prateek", "1", "2", "0");
INSERT INTO userslist (id, name, checklist_1, checklist_2, checklist_3) VALUES ("5", "Amit", "1", "0", "3");

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM checklists where id = "1";
SELECT * FROM checklists where checklist = "1";

SELECT * FROM tasklist where checklist_id = "3";
SELECT * FROM tasklist where id = "3";

SELECT * FROM userslist where id = "3";
SELECT * FROM userslist where id = "1";

```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql

UPDATE checklists SET checklist = "Experiment list" where id = "1";
UPDATE checklists SET checklist = "Daily list" where id = "1";

UPDATE tasklist SET task = "biceps" where id = "4";
UPDATE tasklist SET task = "dinner" where id = "1";

UPDATE userslist SET name = "Soumik" where id = "1";
UPDATE userslist SET name = "Albert" where name = "Yogesh";

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql

DELETE FROM checklists where id = "1";
DELETE FROM checklists where checklist = "Weekly task";

DELETE FROM tasklist where task = "cardio";
DELETE FROM tasklist where id = "1";

DELETE FROM userslist where id = "1";
DELETE FROM userslist where name = "Amit";
```

**Empty Tables**

```sql

TRUNCATE TABLE checklists;
TRUNCATE TABLE tasklist;
TRUNCATE TABLE userslist;
```

**Delete Tables**

```sql

 DROP TABLE checklists;
 DROP TABLE tasklist;
 DROP TABLE userslist;


```

**Delete Database**

```sql

DROP DATABASE masai
```
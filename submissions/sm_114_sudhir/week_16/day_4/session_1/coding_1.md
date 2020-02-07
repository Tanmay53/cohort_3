## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE country_list;

```

**Create Tables**

```sql
CREATE TABLE country_data (
    -> country_id char(3),
    -> country_name varchar(50),
    -> continent_id char(3));

CREATE TABLE continent_data (
    -> continent_id char(3),
    -> continent_name varchar(50));

CREATE TABLE city_data (
    -> city_id char(3),
    -> city_name varchar(50),
    -> country_id char(3));

```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO country_data (country_id, country_name, continent_id) VALUES ("1", "Algeria", "1"),("2", "Egypt", "1"), ("3", "Austria", "2"), ("4", "Belgium", "2"), ("5", "Israel", "3");

INSERT INTO continent_data (continent_id, continent_name)
    -> VALUES ("1", "Africa"), ("2", "Europe"), ("3", "Asia");

INSERT INTO city_data (city_id, city_name, country_id) VALUES
    -> ("1", "Algiers", "1"), ("2", "Oran", "1"), ("3", "6th of October", "2"), ("4", "Akjmim", "2"), ("5", "Vienna", "3");

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM city_data WHERE country_id=1;
SELECT * FROM city_data WHERE city_id=1;

SELECT * FROM country_data WHERE continent_id=2;
SELECT * FROM country_data WHERE country_name="Egypt";

SELECT * FROM continent_data WHERE continent_name="Europe";
SELECT * FROM continent_data WHERE continent_id="3";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE city_data SET city_name = "vienna" WHERE country_id="3";
UPDATE city_data SET country_id = "5" WHERE country_id="3";

UPDATE country_data SET country_name="Pakistan" WHERE country_id = 1
UPDATE country_data SET continent_id="3" WHERE country_name="Pakistan";

UPDATE continent_data SET continent_name="africa" WHERE continent_name="Africa";
UPDATE continent_data SET continent_name="asia" WHERE continent_id = 1;
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM continent_data WHERE continent_id=1;
DELETE FROM continent_data WHERE continent_name="asia";

DELETE FROM country_data WHERE continent_id = 3;
DELETE FROM country_data WHERE country_id = 1;

DELETE FROM city_data WHERE city_name="vienna";
DELETE FROM city_data WHERE city_id=1

```

**Empty Tables**

```sql
TRUNCATE TABLE city_data;
TRUNCATE TABLE country_data;
TRUNCATE TABLE continent_data;
```

**Delete Tables**

```sql
DROP TABLE city_data;
DROP TABLE country_data;
DROP TABLE continent_data;
```

**Delete Database**

```sql
DROP DATABASE country_list;
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE users_data;
```

**Create Tables**

```sql
CREATE TABLE checklist (
    -> id char(3),
    -> user_checklist varchar(50));

CREATE TABLE task (
    -> id char(3),
    -> task varchar(50),
    -> checklist_id varchar(50));

CREATE TABLE username (
    -> id char(3),
    -> username varchar(50),
    -> checklist_id_1 char(3),
    -> checklist_id_2 char(3),
    -> checklist_id_3 char(3));

```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO username (id, username, checklist_id_1, checklist_id_2, checklist_id_3) VALUES ("1", "Ashish", "1", "2", null),("2", "Ravi", null, "2", "3"),("3", "Abhinav", "1", null, "3"),("4", "Sabbu", "1", "2", null),("5", "Ravi", null, "2", "3");

INSERT INTO task (id, task , checklist_id)
    -> VALUES ("1", "Eat", "1"),("2", "Code", "1"),("3", "Fixing Network", "2"),("4", "Fixing Sever", "2"),("5", "Yoga", "3");

INSERT INTO checklist (id, user_checklist)
    -> VALUES ("1", "Todos"),("2", "Co-ordination"),("3", "Trouble Shooting");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql

```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
SELECT * FROM checklist WHERE id=1;
SELECT * FROM checklist WHERE user_checklist="co-ordination";

SELECT * FROM task WHERE checklist_id = 1;
SELECT * FROM task WHERE task = "eat";;

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM username WHERE id=1;
DELETE FROM username WHERE username="ravi";

DELETE FROM task WHERE checklist_id=1;
DELETE FROM task WHERE task = "yoga";

DELETE FROM checklist WHERE id=1;
DELETE FROM checklist WHERE user_checklist="todos;
```

**Empty Tables**

```sql
TRUNCATE TABLE checklist;
TRUNCATE TABLE task;
TRUNCATE TABLE username;
```

**Delete Tables**

```sql
DROP TABLE task;
DROP TABLE username;
DROP TABLE checklist;
```

**Delete Database**

```sql
DROP DATABASE users_data;
```

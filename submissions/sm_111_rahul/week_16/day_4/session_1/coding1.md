<!-- @format -->

## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE country_data;
```

**Create Tables**

```sql
CREATE TABLE country_list(country_id char(3), country_name varchar(255), continent_id char(3));

CREATE TABLE continent_list(countinent_id char(3), continent_name varchar(255));

CREATE TABLE city_list(city_id char(3), city_name varchar(255), country_id char(3));

```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO country_list (country_id, country_name, continent_id)
VALUES ("1","india","1"),("2","pakistan","1"),("3","france","5"),("4","canada","4"),("5","argentina","3");

INSERT INTO continent_list (continent_id, continent_name)
VALUES ("1","asia"),("2","africa"),("3","south america"),("4","north america"),("5","europe");

INSERT INTO city_list (city_id, city_name, country_id)
VALUES ("1","Kolkata","1"),("2","Paris","3"),("3","Lahore","2"),("4","ottawa","4"),("5","buenos aires","5");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM country_data WHERE continent_code = 1;
SELECT * FROM country_data WHERE country_code = 1;
SELECT * FROM country_data WHERE continent_name = "africa";
SELECT * FROM country_data WHERE continent_id = "1";
SELECT * FROM city_list WHERE country_id = "3";
SELECT * FROM city_list WHERE city_id = "3";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE continent_list SET continent_name = "africa" WHERE countinent_id = "2";
UPDATE continent_list SET continent_name = "South America" WHERE countinent_name = "south america";
UPDATE city_list SET city_name = "kolkata" WHERE city_id = "1";
UPDATE city_list SET city_name = "lahore" WHERE city_id = "2";
UPDATE country_code SET country_name ="India" WHERE continent_code = "1"
UPDATE country_code SET country_name ="Pakistan" WHERE continent_code = "2"
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM city_list WHERE city_name = "Paris";
DELETE FROM city_list WHERE city_id = "1";
DELETE FROM country_data WHERE continent_code = "4";
DELETE FROM country_data WHERE country_code = "5";
DELETE FROM continent_list WHERE continent_name = "asia";
DELETE FROM continent_list WHERE countinent_id = "";
```

**Empty Tables**

```sql
TRUNCATE TABLE country_data;
TRUNCATE TABLE city_list;
TRUNCATE TABLE continent_list;
```

**Delete Tables**

```sql
DROP TABLE city_list;
DROP TABLE country_data;
DROP TABLE continent_list;
```

**Delete Database**

```sql
DROP DATABASE country_data ;
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE user_cheklist;
```

**Create Tables**

```sql
CREATE TABLE checklist_type( id char(3), checklist_name varchar(100));
CREATE TABLE task_list( task_id char(3), task_name varchar(100), checklist_id char(3));
CREATE TABLE user_list(user_id char(3), user_name varchar(100), checklist1 char(3), checklist2 char(3), checklist3 char(3));
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO checklist_type (id, checklist_name) VALUES ("1","Todo_list"),("2","coordination_list"),("3","fix_list");
INSERT INTO task_list (task_id, task_name, checklist_id) VALUES ("1","eat","1"),("2","code","1"),("3","fix laptop","3"),("4","meditation","2");
INSERT INTO user_list (user_id, user_name, checklist1, checklist2, checklist3) VALUES ("1","rahul","1","2","3"),("2","sudhir","1","2","3"),("3","ashish","1","not","3"),("4","rakesh","1","not","not");
```

**Read Data (From all tables using atleast 2 different WHERE condition)**

```sql
SELECT * FROM user_list WHERE user_name = "rahul";
SELECT * FROM user_list WHERE checklist2 = "2";
SELECT * FROM task_list WHERE task_name = "meditation";
SELECT * FROM task_list WHERE task_id = "2";
SELECT * FROM checklist_type WHERE checklist_name = "todo_list";
SELECT * FROM checklist_type WHERE id = "3";
```

**Update Data (All tables using atleast 2 different WHERE condition and changing atleast 2 different values)**

```sql
UPDATE user_list SET user_name = "Rahul" WHERE user_id = "2";
UPDATE user_list SET user_name = "Ashish" WHERE user_name = "sudhir";
UPDATE task_list SET task_name = "go to market" WHERE task_id = "2";
UPDATE task_list SET task_name = "go to library" WHERE task_name = "eat";
UPDATE checklist_type SET checklist_name = "discipline" WHERE checklist_id = "2";
UPDATE checklist_type SET checklist_name = "todo list" WHERE checklist_id = "3";

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM user_list WHERE user_name = "rahul";
DELETE FROM user_list WHERE checklist2 = "not";
DELETE FROM task_list WHERE task_name = "meditation";
DELETE FROM task_list WHERE task_id = "3";
DELETE FROM checklist_type WHERE id = "1";
DELETE FROM checklist_type WHERE checklist_name = "coordination_list";
```

**Empty Tables**

```sql
TRUNCATE TABLE user_list;
TRUNCATE TABLE task_list;
TRUNCATE TABLE checklist_type;
```

**Delete Tables**

```sql
DROP TABLE user_list;
DROP TABLE task_list;
DROP TABLE checklist_type;
```

**Delete Database**

```sql
DROP DATABASE user_checklist;
```

## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE masai_coding;
```

**Create Tables**

```sql
CREATE TABLE continent(id int(2),continent_name char(15));
CREATE TABLE countries (country_id int(2),country_name char(20),id int(2));
CREATE TABLE cities(city_id int(4),city_name (20),country_id(2),id (2));
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continent (id, continent_name) VALUES (1, ASIA);
INSERT INTO continent (id, continent_name) VALUES (2, "AFRICA");
INSERT INTO continent (id, continent_name) VALUES (3, "EUROPE");
INSERT INTO continent (id, continent_name) VALUES (4, "AUSTRALIA");
INSERT INTO continent (id, continent_name) VALUES (5, "NORTH AMERICA");
INSERT INTO continent (id, continent_name) VALUES (6, "SOUTH AMERICA");	
INSERT INTO continent (id, continent_name) VALUES (7, "ANTARCTICA");

INSERT INTO countries (country_id, country_name, id) VALUES (1,"INDIA",1);
INSERT INTO countries (country_id, country_name, id) VALUES (2,"JAPAN",1);	
INSERT INTO countries (country_id, country_name, id) VALUES (4,"NORWAY",3);


INSERT INTO cities (city_id, city_name, country_id, id) VALUES (1, "Nagpur", 1, 1);
INSERT INTO cities (city_id, city_name, country_id, id) VALUES (5, "MOSCOW", 3, 3);
INSERT INTO cities (city_id, city_name, country_id, id) VALUES (3, "TOKYO", 2, 1);

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM cities WHERE city_id > 3;
SELECT * FROM cities WHERE city_id <= 3;
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE cities SET city_name="JAIPUR" WHERE city_id = 2;
UPDATE cities SET city_name="MAURITIOUS" WHERE city_id = 5;

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM cities WHERE id = 3;
DELETE FROM cities WHERE country_id = 1;
```

**Empty Tables**

```sql
TRUNCATE TABLE cities;
TRUNCATE TABLE countries;
TRUNCATE TABLE continent;

```

**Delete Tables**

```sql
DROP TABLE cities;
DROP TABLE countries;
DROP TABLE continent;
```

**Delete Database**

```sql
DROP DATABASE masai_coding
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE user_checklist;
```

**Create Tables**

```sql
CREATE TABLE user(user_id int(2),checklist(100);
CREATE TABLE checklist(checklist_id int(10),checklist char(100),user_id int(4));
CREATE TABLE task (task_id int(4), task_name(100),checklist_id(4));
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO user (user_id, username) VALUES (1, "SAGAR");
INSERT INTO user (user_id, username) VALUES (2, "PANKAJ");
INSERT INTO user (user_id, username) VALUES (4, "KUMAR");
INSERT INTO user (user_id, username) VALUES (5, "KESHAV");

INSERT INTO checklist (checklist_id, checklist, user_id) VALUES (1, "OFFICE", 2);
INSERT INTO checklist (checklist_id, checklist, user_id) VALUES (2, "HOME", 1);
INSERT INTO checklist (checklist_id, checklist, user_id) VALUES (3, "HOME", 1);

INSERT INTO task (task_id, task_name, checklist_id) VALUES (1, "Cook Food", 2);
INSERT INTO task (task_id, task_name, checklist_id) VALUES (2, "Clean floor", 3);
INSERT INTO task (task_id, task_name, checklist_id) VALUES (3, "Collect records", 1);

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM task WHERE task_name = "Cook Food";
SELECT * FROM task WHERE task_id = 3;

```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE task SET task_name = 'Collect Journals' WHERE task_id = 3;
UPDATE task SET task_name = 'Wash clothes' WHERE task_id = 1;

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM task WHERE task_id = 1;
DELETE FROM checklist WHERE checklist_id = 2;

```

**Empty Tables**

```sql
TRUNCATE TABLE user;
TRUNCATE TABLE checklist;
TRUNCATE TABLE task;
```

**Delete Tables**

```sql
DROP TABLE user;
DROP TABLE checklist;
DROP TABLE task;

```

**Delete Database**

```sql
DROP DATABASE user_checklist;
```

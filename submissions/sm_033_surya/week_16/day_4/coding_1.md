## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE continentsdata;
```

**Create Tables**

```sql
CREATE TABLE continents;
CREATE TABLE countries;
CREATE TABLE cities;
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continents (id,continentname) VALES("1","Asia");
INSERT INTO continents (id,continentname) VALES("2","Africa");
INSERT INTO continents (id,continentname) VALES("3","Antarctica");
INSERT INTO continents (id,continentname) VALES("4","Europe");
INSERT INTO continents (id,continentname) VALES("5","NorthAmerica");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT id FROM continents WHERE continentname = "ASIA";
SELECT continentname FROM continents WHERE id = "4";
SELECT countryId FROM countries WHERE contryName = "India";
SELECT countryName FROM countries WHERE countryId = "6";
SELECT cityId FROM cities WHERE cityName = "Bangalore";
SELECT cityName FROM cities WHERE cityId = "7";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE continent SET id = "2" WHERE continentname = "Asia"; 
UPDATE continent SET cotinentname = "Africa" WHERE id = "1";
UPDATE countries SET countryId = "4" WHERE countryName = "India"; 
UPDATE countries SET countryName = "Bagladesh" WHERE countryId = "3";
UPDATE cities SET cityId = "4" WHERE cityName = "Bangalore"; 
UPDATE cities SET cityName = "Hyderabad" WHERE cityId = "4";

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE  FROM  continent WHERE continentname = "Asia"; 
DELETE  FROM  continent WHERE id = "1";
DELETE  FROM  countries WHERE countryName = "India"; 
DELETE  FROM  countries WHERE id = "3";
DELETE  FROM  cities WHERE cityName = "Bangalore"; 
DELETE  FROM  cities WHERE cityId = "4";
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
DROP DATABASE continentsdata;
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE userchecklist;
```

**Create Tables**

```sql
CREATE TABLE userstable;
CREATE TABLE checklists;
CREATE TABLE task;
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO userstable (id,username) VALES("1","user1");
INSERT INTO userstable (id,username) VALES("2","user2");
INSERT INTO userstable (id,username) VALES("3","user3");
INSERT INTO userstable (id,username) VALES("4","user4");
INSERT INTO userstable (id,username) VALES("5","user5");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT id FROM userstable WHERE username = "user4";
SELECT username FROM userstable WHERE id = "4";
SELECT checklistId FROM checklists WHERE checklistname = "checklist4";
SELECT checklistname FROM checklists WHERE checklistId = "2";
SELECT taskId FROM task WHERE taskname = "task9";
SELECT taskname FROM task WHERE taskId = "9";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE userstable SET id = "5" WHERE username = "user3"; 
UPDATE userstable SET username = "user5" WHERE id = "3";
UPDATE checklists SET checklistId = "4" WHERE checklistname = "checklist2"; 
UPDATE checklists SET checklistname = "checklist4" WHERE checklistId = "2";
UPDATE task SET taskId = "6" WHERE taskname = "task4"; 
UPDATE task SET taskname = "task6" WHERE taskId = "4";
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE  FROM  userstable WHERE username = "user5"; 
DELETE  FROM  userstable WHERE id = "3";
DELETE  FROM  checklists WHERE checklistname = "checklist2"; 
DELETE  FROM  checklists WHERE checklistId = "5";
DELETE  FROM  task WHERE taskname = "task3"; 
DELETE  FROM  task WHERE taskId = "7";
```

**Empty Tables**

```sql
TRUNCATE TABLE userstable;
TRUNCATE TABLE checklists;
TRUNCATE TABLE task;
```

**Delete Tables**

```sql
DROP TABLE userstable;
DROP TABLE checklists;
DROP TABLE task;
```

**Delete Database**

```sql
DROP DATABASE userchecklist;
```

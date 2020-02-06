## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE world
```

**Create Tables**

```sql
CREATE TABLE continents(
    -> Id num,
    -> Continents varchar(25)
    -> );

CREATE  TABLE countries(
    -> Id int,
    -> Country varchar(20),
    -> Continent_Id int);

CREATE TABLE cities (
    -> Id int,
    -> City varchar(20),
    -> Country_Id int);


```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continents (Id,Continents) VALUES (1,"Africa"),(2, "Antarctica"),(3,"Asia"),(4,"Europe"),(5,"North America"),(6,"South America");

INSERT INTO countries (Id, Country, Continent_Id) VALUES (1,"Afghanistan",3),(2,"Canada",5),(3,"USA",5),(4,"Mexico",5),(5,"India",3),(6,"Pakistan",3),(7,"Nepal",3),(8,"China",3),(9,"Egypt",1);

INSERT INTO cities (Id, City, Country_Id) VALUES (1,"Mumbai",5),(2,"Kolkata",5),(3,"Toronto",2),(4,"Kathmandu",7),(5,"Beijing",8),(6,"Shanghai",8),(7,"Bengaluru",5);

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT Country FROM countries WHERE Continent_Id = 3 AND Id > 4;

SELECT * FROM cities WHERE Country_Id = (SELECT Id FROM countries WHERE Country = "India");

SELECT Country FROM countries WHERE Continent_Id = (SELECT Id FROM continents WHERE Continents = "Asia");

```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE cities
    -> SET City="New Delhi"
    -> WHERE id = 1;

UPDATE continents
    -> SET continents="ASIA"
    -> WHERE continents="Asia";

UPDATE countries
    -> SET country="INDIA"
    -> WHERE country="India" AND Id=5;

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM continents WHERE id=6;

DELETE FROM countries WHERE id>3 AND Continent_Id=1;

DELETE FROM cities WHERE City = "Bengaluru";
```

**Empty Tables**

```sql
TRUNCATE TABLE cities;

TRUNCATE TABLE countries;

TRUNCATE TABLE continents;

```

**Delete Tables**

```sql
DROP TABLE continents;
DROP TABLE cities;
DROP TABLE countries;

```

**Delete Database**

```sql
DROP DATABASE world;

```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE masai;

```

**Create Tables**

```sql
 CREATE TABLE user(
    -> id int,
    -> username varchar(20),
    -> sprint int
    -> location varchar(20)
    );
CREATE TABLE checklists(
    -> Id int,
    -> checklist varchar(10),
    -> user_Id int);

CREATE TABLE tasks (
    -> Id int,
    -> Tasks varchar(20),
    -> Checklist_ID int);

```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO user (id,username,sprint,location) VALUES (1,"Mihir",7,"Patna"),(2,"Rohit",7,"Bengaluru"),(3,"Suyash",6,"Patna"),(4,"Dipanshu prajapati",4,"Patna"),(5,"Gaurav Arya",7,"Bengaluru"),(6,"ahish",7,"Patna"),(7,"Sudhir",7,"Patna");

INSERT INTO checklists (Id, checklist,user_Id) VALUES (1,"W7D1S1",1),(2,"W8D5S2",1),(2,"W8D5S2",1),(2,"W8D5S2",1),(2,"W8D5S2",1),(2,"W8D5S2",1),(2,"W8D5S2",1);

INSERT INTO tasks (Id,Tasks,Checklist_ID) VALUES (1,"React-1",1),(2,"React-route",1),(3,"React-Redux",1),(4,"Git cmd-1",2),(5,"Git cmd-2",2),(6,"React-Bootstrap",2);

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM user WHERE sprint=7 AND location="Patna";

SELECT * FROM tasks WHERE Checklist_ID = (SELECT id FROM checklists WHERE checklist="W7D1S1");

SELECT * FROM checklists WHERE user_Id = 1;

```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE checklists
    -> SET user_Id=2
    -> WHERE checklist = "W8D5S2";

UPDATE tasks
    -> SET Checklist_ID=2
    -> WHERE Checklist_ID=1;

UPDATE user
    -> SET username="Mihir Kumar"
    -> WHERE id=1 AND username="Mihir";

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM checklists WHERE Id=2;

DELETE FROM user WHERE username="Mihir Kumar";

DELETE FROM tasks WHERE Tasks = "React-1";
```

**Empty Tables**

```sql
TRUNCATE TABLE checklists;

TRUNCATE TABLE user;

TRUNCATE TABLE tasks;
```

**Delete Tables**

```sql
DROP TABLE checklists;
DROP TABLE user;
DROP TABLE tasks;
```

**Delete Database**

```sql
DROP DATABASE masai;

```

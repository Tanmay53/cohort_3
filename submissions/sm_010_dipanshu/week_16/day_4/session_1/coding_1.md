## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE fsd21
```

**Create Tables**

```sql
CREATE TABLE continents (continent_id VARCHAR(1), continent_name VARCHAR(15))
CREATE TABLE countries (country_id VARCHAR(5), country_name VARCHAR(30), continent_id(1))
CREATE TABLE cities (city_id VARCHAR(10), city_name VARCHAR(30), country_id VARCHAR(5))
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continents VALUES (1,"Asia")
INSERT INTO continents VALUES (2,"Africa")
INSERT INTO continents VALUES (3,"Australia")
INSERT INTO continents VALUES (4,"Antarctica")
INSERT INTO continents VALUES (5,"Europe")
INSERT INTO continents VALUES (6,"North America")
INSERT INTO continents VALUES (7,"South America")

INSERT INTO countries VALUES (1,"India",1)
INSERT INTO countries VALUES (2,"China",1)
INSERT INTO countries VALUES (3,"South Africa",2)
INSERT INTO countries VALUES (4,"Kenya",2)
INSERT INTO countries VALUES (5,"Australia",3)
INSERT INTO countries VALUES (6,"United States Base",4)
INSERT INTO countries VALUES (7,"New Zealand Base",4)
INSERT INTO countries VALUES (8,"Germany",5)
INSERT INTO countries VALUES (9,"France",5)
INSERT INTO countries VALUES (10,"United States",6)
INSERT INTO countries VALUES (11,"Canada",6)
INSERT INTO countries VALUES (12,"Brazil",7)
INSERT INTO countries VALUES (13,"Argentina",7)

INSERT INTO cities VALUES(1,"Delhi",1)
INSERT INTO cities VALUES(2,"Beijing",2)
INSERT INTO cities VALUES(3,"Johannesburg",3)
INSERT INTO cities VALUES(4,"Nairobi",4)
INSERT INTO cities VALUES(5,"Berlin",5)
INSERT INTO cities VALUES(6,"Paris",6)
INSERT INTO cities VALUES(7,"Texas",7)
INSERT INTO cities VALUES(8,"Toronto",8)
INSERT INTO cities VALUES(9,"Rio De Janeiro",9)
INSERT INTO cities VALUES(10,"Salta",10)
INSERT INTO cities VALUES(11,"Sydney",11)
INSERT INTO cities VALUES(12,"Arrival Heights",12)
INSERT INTO cities VALUES(13,"Amundsen Scott",13)
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM continents WHERE continent_name = "Asia"
SELECT * FROM continents WHERE continent_id = 5

SELECT * FROM countries WHERE country_name = "India"
SELECT * FROM countries WHERE country_name = "India"

SELECT * FROM cities where city_name = "Berlin"
SELECT * FROM cities where country_id = 7
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE continents SET continent_name="Dipanshu" WHERE continent_id=1
UPDATE continents SET continent_id=9 WHERE continent_name="Dipanshu"

UPDATE countries SET country_name="Sabharwal" WHERE country_id=1 AND continent_id=1
UPDATE countries SET continent_id=9 WHERE country_id=1 AND country_name="Sabharwal";

UPDATE cities SET city_name="Masai School" WHERE city_id=1 AND country_id=1
UPDATE cities SET city_id = 10 WHERE city_name="Masai School" AND country_id=1
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM continents WHERE continent_name = "Dipanshu"
DELETE FROM continents WHERE continent_id = 2

DELETE FROM countries WHERE country_name = "Sabharwal"
DELETE FROM countries WHERE continent_id = 4
```

**Empty Tables**

```sql
TRUNCATE TABLE continents
TRUNCATE TABLE countries
TRUNCATE TABLE cities
```

**Delete Tables**

```sql
DROP TABLE continents
DROP TABLE countries
DROP TABLE cities
```

**Delete Database**

```sql
DROP DATABASE fsd21
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE fsd22
```

**Create Tables**

```sql
CREATE TABLE users (user_id VARCHAR(10), user_name VARCHAR(30))
CREATE TABLE todos (todo_id VARCHAR(10), todo_name VARCHAR(30), user_id VARCHAR(10))
CREATE TABLE tasks (task_id VARCHAR(10), task VARCHAR(30), todo_id VARCHAR(10))
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO users VALUES (22,"Dipanshu")
INSERT INTO users VALUES (33,"Himanshu")
INSERT INTO users VALUES (44,"Atul")
INSERT INTO users VALUES (55,"Sagar")
INSERT INTO users VALUES (66,"Deepanshu")

INSERT INTO todos VALUES (1,"Buy groceries",22);
INSERT INTO todos VALUES (2,"Order food",33);
INSERT INTO todos VALUES (3,"Read book",44)
INSERT INTO todos VALUES (4,"Contact classmate",55)
INSERT INTO todos VALUES (5,"Watch movie",66)

INSERT INTO tasks VALUES (1,"Eggs, Milk",1)
INSERT INTO tasks VALUES (2,"Pizza and Pasta",2)
INSERT INTO tasks VALUES (3,"Rich Dad Poor Dad",3)
INSERT INTO tasks VALUES (4,"Ghodu",4)
INSERT INTO tasks VALUES (5,"Forest Gump",5)
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM users WHERE user_id=22
SELECT * FROM users WHERE user_name="Dipanshu"

SELECT * FROM todos WHERE todo_id=1
SELECT * FROM todos WHERE user_id="44"

SELECT * FROM tasks WHERE task_id=1
SELECT * FROM tasks WHERE todo_id=5
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE users SET user_name="Sabharwal" WHERE user_id=22
UPDATE users SET user_id=11 WHERE user_name="Sabharwal"

UPDATE todos SET todo_name="Buy daily items" WHERE user_id=22
UPDATE todos SET user_id=11 WHERE todo_name="Buy daily items"

UPDATE tasks SET task="Soap and Shampoo" WHERE todo_id=1
UPDATE tasks SET task="Soap, Shampoo and Comb" WHERE task_id=1
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM users WHERE user_name="Sabharwal"
DELETE FROM users WHERE user_id=33

DELETE FROM todos WHERE todo_id=1
DELETE FROM todos WHERE user_id=33

DELETE FROM tasks WHERE task_id=1
DELETE FROM tasks WHERE todo_id=2
```

**Empty Tables**

```sql
TRUNCATE TABLE users
TRUNCATE TABLE todos
TRUNCATE TABLE tasks
```

**Delete Tables**

```sql
DROP TABLE users
DROP TABLE todos
DROP TABLE tasks
```

**Delete Database**

```sql
DROP DATABASE fsd22
```

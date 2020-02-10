## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE my_database;
CREATE DATABASE country;
CREATE DATABASE my_cities;
```

**Create Tables**

```sql
CREATE TABLE continent (
    -> id int(5),
    -> continent char(20),
    -> continent_codes char(20)
    -> );

CREATE TABLE country (
    -> id int(5),
    -> country_name char(20),
    -> country_codes char(5),
    -> continent_codes char(5)
    -> );

CREATE TABLE cities (
    -> id int(5),
    -> city_name char(50),
    -> city_code char(20),
    -> country_code char(20),
    -> continent_code char(20)
    -> );
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continent (id,continent,continent_codes) VALUES (1,"Africa","CN_1"),(2,"America","CN_2"),(3,"Antarctica","CN_3"),(4,"Asia","CN_4"),(5,"Australia","CN_5"),(6,"Europe","CN_6");

INSERT INTO country (id,country_name,country_codes,continent_codes) VALUES (1,"Botswana","CU_1","CN_1"),(2,"Cameroon","CU_2","CN_1"),(3,"India","CU_3","CN_4"),(4,"Japan","CU_4","CN_4"),(5,"Kiribati","CU_5","CN_5"),(6,"Colombia","CU_6","CN_2"),(7,"Canada","CU_7","CN_2"),(8,"Kazakhstan","CU_8","CN_6"),(9,"Turkey","CU_9","CN_6");

INSERT INTO cities (id, city_name, city_code, country_code, continent_code) VALUES (1,"Mumbai","CS_1","CU_3","CN_4"),(2,"Francistown","CS_2","CU_1","CN_1"),(3,"London","CS_3","CU_5","CN_5"),(4,"Istanbul","CS_4","CU_9","CN_6"),(5,"Vancouver","CS_5","CU_7","CN_2");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT continent_codes FROM continent WHERE id = 2;
SELECT continent_codes FROM continent WHERE id % 2 = 0;

SELECT id FROM country WHERE country_name = "India" AND country_codes ="CU_5" OR continent_codes = "CN_4";
SELECT id FROM country WHERE country_name = "India" AND (country_codes ="CU_5" OR continent_codes = "CN_4");

SELECT city_name FROM cities WHERE country_code = "CU_3";
SELECT city_name FROM cities WHERE id % 2 = 0;
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE continent SET id = id + 1;
UPDATE continent SET id = id - 1 WHERE continent = "Africa";

UPDATE country SET continent_codes = "_even" WHERE id % 2 = 0;
UPDATE country SET id = id * 5 WHERE id % 2 = 1;

UPDATE cities SET id = id % 2;
 UPDATE cities SET id = 100 WHERE id = 0;
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM continent WHERE id % 2 = 1;
DELETE FROM continent;

DELETE FROM country WHERE id % 5 = 0 OR continent_codes = "ven";
DELETE FROM country WHERE id % 5 = 0 AND country_codes = "CU_5";

DELETE FROM cities WHERE id % 2 = 0;
DELETE FROM cities WHERE country_code = "CU_7";
```

**Empty Tables**

```sql
TRUNCATE continet;
TRUNCATE country;
TRUNCATE my_cities;
```

**Delete Tables**

```sql
DROP TABLE continet;
DROP TABLE country;
DROP TABLE my_cities;
```

**Delete Database**

```sql
DROP DATABASE my_database;
DROP DATABASE country;
DROP DATABASE my_cities;
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql

```

**Create Tables**

```sql

```

**Create Data (Atleast 5 rows in a table)**

```sql

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql

```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql


```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql

```

**Empty Tables**

```sql

```

**Delete Tables**

```sql

```

**Delete Database**

```sql

```

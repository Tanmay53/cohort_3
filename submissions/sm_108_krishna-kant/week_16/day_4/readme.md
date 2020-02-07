## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE Continent_Data
```

**Create Tables**

```sql
CREATE TABLE continents ( _id CHAR(4), name VARCHAR(50), created_at DATETIME default CURRENT_TIMESTAMP);
CREATE TABLE countries ( _id CHAR(4), name VARCHAR(50),country_code CHAR(2) ,continent_id CHAR(4) );
CREATE TABLE cities (_id CHAR(4) , name VARCHAR(20), country_code CHAR(2), continent_id CHAR(4));
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continents (_id,name,created_at) values("CN_1","Africa",default);
INSERT INTO countries (_id,name,country_code,continent_id) VALUES("CO_1", "India","IN","CN_2");
INSERT INTO cities (_id,name,country_code,continent_id) values("CI_4","Cairo","EG","CN_1");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM continents;
SELECT * FROM cities;
SELECT * FROM countries;
SELECT * FROM countries WHERE continent_id = "CN_2";
SELECT name FROM cities WHERE continent_id = "CN_1" and country_code = "AL";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE cities SET continent_id = "CN_3" where country_code = "IN";
UPDATE countries SET country_code = "KL" where name = "Sri Lanka";
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM countries WHERE continent_id = "CN_2";
DELETE FROM countries WHERE name = "Russia";
DELETE FROM cities WHERE _id = "CI_4";
DELETE FROM cities WHERE country_code = "DK";
```

**Empty Tables**

```sql
TRUNCATE countries;
TRUNCATE cities;
TRUNCATE continents;
```

**Delete Tables**

```sql
DROP TABLE countries;
DROP TABLE cities;
DROP TABLE continents;
```

**Delete Database**

```sql
DROP DATABASE Continent_Data;
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

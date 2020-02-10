## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```SQL
CREATE DATABASE Continents;
```

**Create Tables**

```sql
CREATE TABLE Continent (_id varchar(5), Continent varchar(20), Area INT(20));

CREATE TABLE Country (_id varchar(5), Country varchar(20), Continent_id  varchar(10));

CREATE TABLE City (_id varchar(5), City varchar(20),  Continent_id varchar(10), Country_id varchar(10));

```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO Continent (_id, Continent, Area) VALUES ("C_1", "Africa", 30370000), ("C_2", "Antarctica", 14000000), ("C_3", "Asia", 44579000), ("C_4", "Europe", 10180000), ("C_5", "North America", 24709000);

INSERT INTO Country (_id, Country, Continent_id) VALUES ("CON_1", "Algeria", "C_1"), ("CON_2", "France", "C_2"), ("CON_3", "India", "C_3"), ("CON_4", "Armenia", "C_4"), ("CON_5", "Canada", "C_5");

INSERT INTO City (_id, City, Continent_id, Country_id) VALUES ("CT_1", "Oran", "C_1", "CON_1"), ("CT_2", "Cannes", "C_2", "CON_2"), ("CT_3", "New Delhi", "C_3", "CON_3"), ("CT_4", "Kapan", "C_4", "CON_4"), ("CT_5", "Toranto", "C_5", "CON_5");

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql

SELECT * FROM Continent WHERE Area >= 30370000;

SELECT * FROM Country WHERE Continent_id="C_1";

SELECT * FROM City WHERE _id = "CT_5";



```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE Continent SET Area=Area+800 WHERE _id="C_2";

UPDATE Country SET Country="Greenland" WHERE _id="CON_5";

UPDATE City SET City="Mumbai" WHERE Continent_id="C_3";

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM Continent WHERE _id = "C_001";

DELETE FROM Country WHERE Continent_id = "C_4";

DELETE FROM City WHERE City="Kapan";


```

**Empty Tables**

```sql
TRUNCATE Continent;
TRUNCATE Country;
TRUNCATE City;

```

**Delete Tables**

```sql
DROP TABLE Continent;
DROP TABLE Country;
DROP TABLE City;

```

**Delete Database**

```sql
DROP DATABASE Continets;

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

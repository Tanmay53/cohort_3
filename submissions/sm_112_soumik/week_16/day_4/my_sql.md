## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql

CREATE DATABASE locations ;

```

**Create Tables**

```sql

CREATE TABLE continent ( id char(6) , continent varchar(50)) ;
CREATE TABLE country (id char(6) , country varchar(50) , continent varchar(50) )
CREATE TABLE city (id char(6) , city varchar(50) , country varchar(50) )

```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continent (id ,continent) VALUES ("1","Asia"),("2","EUROPE") ;
INSERT INTO continent (id ,continent) VALUES ("3","Austraila"),("4","Africa") ;
INSERT INTO country (id ,country,continent) VALUES ("1","India","Asia"),("2","China","Asia") ;
INSERT INTO city (id ,city,country) VALUES ("1","Kolkata","India"),("2","Delhi","India") ;

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM city WHERE country = "India" ;
SELECT * FROM country WHERE id="1" ;


```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql

UPDATE continent SET continent="Europe" WHERE continent ="EUROPE" ;
UPDATE country SET id=001 WHERE id="1" ;
UPDATE city SET city="Calcutta" WHERE city ="Kolkata" ;

```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql

DELETE FROM continent where continents ="America"
DELETE FROM continent WHERE id="2" ;
DELETE FROM country WHERE country ="India" ;


```

**Empty Tables**

```sql
TRUNCATE TABLE city ;
TRUNCATE TABLE country ;
TRUNCATE TABLE continent ;



```

**Delete Tables**

```sql
DROP TABLE continent ;
DROP TABLE city ;
DROP TABLE country ;

```

**Delete Database**

```sql
DROP DATABASE locations ;

```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE user ;


```

**Create Tables**

```sql
CREATE TABLE user_name (id char(6) ,name varchar(50) ,user_name varchar(50) ) ;
CREATE TABLE task (id char(6) ,user_name varchar(50) ,task varchar(50) ,is_done varchar(5) ) ;


```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO user_name (id,name,user_name) VALUES (1,"Soumik","sou_mik"),(2,"rahul","k_rahul"),(3,"sudhanshu","sudh_sarkar")
INSERT INTO task (id,user_name,task,is_done) VALUES (1,"sou_mik","eat food"false),(2,"k_rahul","sleep","false"),(3,"sudh_sarkar","play football",false);

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM task WHERE is_done ="false" ;
SELECT * FROM user_name WHERE name ="Soumik" ;


```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE task SET is_done = false where id = 1 ;
UPDATE task SET task = "completed" where task = "play football" ;


```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM task where is_done=true ;
DELETE FROM task where task="completed" ;

```

**Empty Tables**

```sql
TRUNCATE TABLE task ;
TRUNCATE TABLE user_name ;

```

**Delete Tables**

```sql

DROP TABLE task ;
DROP TABLE user_name ;

```

**Delete Database**

```sql
DROP DATABASE user ;

```


### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE continents
```

**Create Tables**

```sql
CREATE TABLE continents (continent_id int(10), continent_name varchar(20) );

CREATE TABLE countries (country_id int(100),country_name varchar(255),continent_id int(1));

CREATE TABLE cities ( city_id int(),city_name varchar(255),country_id int());
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continents (continent_id, continent_name) VALUES ("1", "Asia");
INSERT INTO continents (continent_id, continent_name) VALUES ("2", "Africa");
INSERT INTO continents (continent_id, continent_name) VALUES ('3', 'North America');
INSERT INTO continents (continent_id, continent_name) VALUES ('4', 'South America');
INSERT INTO continents(continent_id, continent_name) VALUES ('5', 'Antarctica');
INSERT INTO continents(continent_id, continent_name) VALUES ('6', 'Europe');
INSERT INTO continents (continent_id, continent_name) VALUES ('7', 'Australia');


INSERT INTO countries (country_id, country_name, continent_id) VALUES ("91", "India", "1");
INSERT INTO countries (country_id, country_name, continent_id) VALUES ("92", "Pakistan", "1");
INSERT INTO countries (country_id, country_name, continent_id) VALUES ("86", "China", "1");
INSERT INTO countries (country_id, country_name, continent_id) VALUES ("44", "United Kingdom", "6");
INSERT INTO countries (country_id, country_name, continent_id) VALUES ("61", "Australia", "7");
INSERT INTO countries (country_id, country_name, continent_id) VALUES ("254", "Kenya", "2");


INSERT INTO cities (city_id, city_name, country_id) VALUES ("1", "Nagpur", "91");
INSERT INTO cities (city_id, city_name, country_id) VALUES ("2", "Lahore", "92");
INSERT INTO cities (city_id, city_name, country_id) VALUES ("3", "Bengaluru", "91");
INSERT INTO cities (city_id, city_name, country_id) VALUES ("4", "Wuhan", "86");
INSERT INTO cities (city_id, city_name, country_id) VALUES ("5", "Reading", "44");
INSERT INTO cities (city_id, city_name, country_id) VALUES ("6", "Perth", "61");

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM continents WHERE continent_id=1;
SELECT * FROM countries WHERE continent_id=1;
SELECT city_name FROM cities WHERE country_id=91;
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE cities SET country_id=88 WHERE city_id=4;
UPDATE countries SET country_name="Rwanda" WHERE country_id=254;
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM countries WHERE continent_id=1;
DELETE FROM cities WHERE city_name="Lahore";
```

**Empty Tables**

```sql
TRUNCATE TABLE countries;
```

**Delete Tables**

```sql
DROP TABLE continents;
```

**Delete Database**

```sql
DROP DATABASE continents;
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE checklists;
```

**Create Tables**

```sql
CREATE TABLE users ( user_id INT, user_name VARCHAR(255) );
CREATE TABLE tasks ( task_id INT, task_name VARCHAR(255), checklist_id INT );
CREATE TABLE checklists ( checklist_id INT, checklist  VARCHAR(255), user_id INT );
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO users(user_name, user_id) VALUES ("Chinmay", 1), ("Sagar", 2), ("Mukund", 3), ("Piyush", 4), ("Shaktimaan",5);
INSERT INTO tasks (task_id, task_name, checklist_id) VALUES (1,"Eat Idli",1), (2, "Eat fish fry", 1),( 3," Complete flask api task", 3),( 4," Complete react frontend task", 3);

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT task_name FROM tasks WHERE checklist_id = 1;
SELECT task_name FROM tasks WHERE task_id = 1;
SELECT * FROM users WHERE user_id=4;
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE tasks SET task_name="Upload flask api task to git" WHERE task_id=3;
UPDATE users SET user_name="Shaktimaan aka Gangadhar" WHERE user_name="Shaktimaan";
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM users WHERE user_name="Chinmay";
DELETE FROM tasks WHERE checklist_id=3;
```

**Empty Tables**

```sql
TRUNCATE TABLE tasks;
```

**Delete Tables**

```sql
DROP TABLE tasks;
```

**Delete Database**

```sql
DROP DATABASE checklists;
```

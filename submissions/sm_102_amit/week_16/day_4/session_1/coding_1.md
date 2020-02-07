# Week 16 Day 4

## FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE world;
```

**Create Tables**

```sql
CREATE TABLE continent (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, continent_name VARCHAR(255) NOT NULL, is_active TINYINT(1) UNSIGNED DEFAULT 1 NOT NULL, created_on DATETIME DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

CREATE TABLE country (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, continent_id INT(11) UNSIGNED NOT NULL, country_name VARCHAR(255) NOT NULL, country_code CHAR(2) NOT NULL, is_active TINYINT(1) UNSIGNED DEFAULT 1 NOT NULL, created_on DATETIME DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

CREATE TABLE city (id int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, continent_id INT(11) UNSIGNED NOT NULL, country_id INT(11) UNSIGNED NOT NULL, city_name VARCHAR(255) NOT NULL, city_code CHAR(3) NOT NULL, latitude VARCHAR(25), longitude VARCHAR(25), is_active TINYINT(1) UNSIGNED NOT NULL DEFAULT 1, created_on DATETIME DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continent(continent_name, is_active) VALUES ("Africa", 1), ("Asia", 1), ("Australia", 0), ("Europe", 1), ("North America", 0), ("South America", 1);

INSERT INTO country(continent_id, country_name, country_code) VALUES (2, "India", "IN"), (2, "Sri Lanka", "LK"), (3, "Australia", "AU"), (5, "Canada", "CA"), (4, "Spain", "SP"), (1, "Egypt", "EG"), (6, "Brazil", "BR"), (5, "Mexico", "MX"), (4, "France", "FR");

INSERT INTO city(continent_id, country_id, city_name, city_code, latitude, longitude) VALUES (2, 1, "Patna", "PAT", "25.478416", "87.245914"), (2, 1, "Mumbai", "MUM", NULL, NULL), (2, 1, "New Delhi", "DEL", NULL, NULL), (4, 5, "Madrid", "MDR", NULL, NULL);

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM continent;
SELECT * FROM country;
SELECT * FROM city;

SELECT * FROM continent WHERE is_active = 1;
SELECT * FROM country WHERE continent_id = 2 AND is_active = 1;
SELECT * FROM city WHERE continent_id = 2 AND country_id = 1;

```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE continent SET is_active = 1 WHERE is_active = 0;
UPDATE country SET is_active = 0 WHERE id = 2;
UPDATE city SET is_active = 0;
UPDATE city SET is_active = 1 WHERE id = 1;
UPDATE city SET latitude = 14.8745345, longitude = 52.781456, is_active = 1 WHERE is_active = 0 and continent_id = 2;
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM continent WHERE is_active = 0;
DELETE FROM country WHERE is_active = 0 AND continent_id = 2;
DELETE FROM city WHERE is_active = 1 AND country_id = 1 AND latitude IS NULL AND longitude IS NULL;
```

**Empty Tables**

```sql
TRUNCATE continent;
TRUNCATE country;
TRUNCATE city;
```

**Delete Tables**

```sql
DROP TABLE continent, country, city;
```

**Delete Database**

```sql
DROP DATABASE world;
```

## FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE checklist;
```

**Create Tables**

```sql
CREATE TABLE users (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, is_active TINYINT(1) UNSIGNED DEFAULT 1 NOT NULL, created_on DATETIME DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

CREATE TABLE todolist (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, user_id INT(11) UNSIGNED NOT NULL, todolist_name VARCHAR(255) NOT NULL, is_active TINYINT(1) UNSIGNED DEFAULT 1 NOT NULL, created_on DATETIME DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

CREATE TABLE task( id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, user_id INT(11) UNSIGNED NOT NULL, todo_id INT(11) UNSIGNED NOT NULL, todo VARCHAR(255) NOT NULL, priority ENUM('high', 'medium', 'low') NOT NULL, due_date DATE NOT NULL, is_completed TINYINT(1) UNSIGNED NOT NULL DEFAULT 0, is_active TINYINT(1) UNSIGNED NOT NULL DEFAULT 1, created_on DATETIME DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO users(username, password, name, is_active) VALUES ("amit1607", "1234567", "Amit Kumar", 1), ("amit_kr", "1234567", "Amit Kumar", 1), ("mihirdas12", "1234567", "Mihir Das", 0), ("krishna785", "1234567", "Krishna Sharma", 1), ("rahul55", "1234567", "Rahul Sharma", 0);

INSERT INTO todolist(user_id, todolist_name, is_active) VALUES (1, "Todolist - 1", 1), (1, "Todolist - 2", 1), (2, "Todolist - 1", 1), (4, "Todolist - 1", 0), (2, "Todolist - 2", 0);

INSERT INTO task(user_id, todo_id, todo, priority, due_date) VALUES (1, 1, "Lorem ipsum dolor sit amet", "low", "2020-01-22"), (1, 1, "Duis aute irure dolor", "high", "2019-12-26"), (4, 2, "Sed ut perspiciatis", "high", "2020-02-10"), (2, 3, "Lorem ipsum dolor sit", "medium", "2019-04-02"), (4, 4, "Duis aute irure", "low", "2019,11-03");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM users;
SELECT * FROM todolist;
SELECT * FROM task;

SELECT * FROM users WHERE is_active = 1 AND name = "Amit Kumar";
SELECT * FROM todolist WHERE is_active = 1 AND user_id = 2;
SELECT * FROM todolist WHERE is_active = 1 AND todolist_name = "Todolist - 1";
SELECT * FROM task WHERE user_id = 1 AND priority = "low";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE users SET is_active = 0 WHERE id = 2;
UPDATE todolist SET todolist_name = "Todolist - New" WHERE user_id = 2 AND is_active = 1;
UPDATE task SET is_completed = 1 WHERE user_id = 1 AND priority = "low";
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM users WHERE name = "Amit Kumar" AND is_active = 0;
DELETE FROM todolist WHERE todolist_name = "Todolist - 2" AND user_id = 2;
DELETE FROM task WHERE is_completed = 1 AND priority = "low" AND user_id  = 1;
```

**Empty Tables**

```sql
TRUNCATE users;
TRUNCATE todolist;
TRUNCATE task;
```

**Delete Tables**

```sql
DROP TABLE users, todolist, task;
```

**Delete Database**

```sql
DROP DATABASE checklist;
```

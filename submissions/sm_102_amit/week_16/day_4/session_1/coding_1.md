## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

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

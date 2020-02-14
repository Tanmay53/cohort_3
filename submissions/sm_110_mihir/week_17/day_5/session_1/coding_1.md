### Week 17 Day 5 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_17/day_5/session_1`

### FSD.SQL.5.1

Table - `students_marks`

Average maths marks of all the female students

```sql
mysql> SELECT AVG(maths) FROM students_marks WHERE gender="Female";
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english

```sql
mysql> SELECT AVG(maths), AVG(science), AVG(english) FROM students_marks WHERE gender="Male" AND maths>85 AND science>85 AND english>85;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
mysql> SELECT AVG(maths), AVG(science), AVG(english) FROM students_marks WHERE maths BETWEEN 50 AND 75  AND english BETWEEN 50  AND 75;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
mysql> SELECT AVG(maths+science+english) AS total_avg FROM students_marks WHERE class IN ("I","II","III","IV","V")
    -> AND maths>50 AND science>50 AND english>50;
```

Average subjects scores of all the female students from grade X section A who scored less that 25 in all subjects

```sql
mysql> SELECT AVG(maths), AVG(science),AVG(english) FROM students_marks WHERE gender="Female" AND class="X" AND section="A" AND maths>25 AND english>25 AND science>25;
```

Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
mysql> SELECT AVG(maths),AVG(science),AVG(english) FROM students_marks
    -> WHERE section="A"
    -> AND maths<50 AND science<50 AND english<50;

```

Average total marks of Students from section C whose more that 75 in all the subjects

```sql
mysql> SELECT AVG(maths+english+science) AS total_avg FROM students_marks WHERE section="c"  AND maths>75 AND science>75 AND english>75;

```

Students who will fall in page 1 if ordered by increasing order of total marks scored (Assume 10 results per page)

```sql
mysql> SELECT * FROM students_marks ORDER BY (maths+english+science) LIMIT 0,10;

```

Students who will fall in page 6 if ordered by descreasing order of average marks scored (Assume 20 results per page)

```sql
mysql> SELECT AVG(maths+english+science) AS total_avg FROM students_marks WHERE section="c"  AND maths>75 AND science>75 AND english>75;

```

Female Students who will fall in page 2 if ordered by increasing order of total marks scored (Assume 5 results per page)

```sql
mysql> SELECT * FROM students_marks WHERE gender="Female"
    -> ORDER BY (maths+science+english) LIMIT 5,5;

```

Male Students who will fall in page 4 if ordered by decreasing order of average marks (Assume 15 results per page)

```sql
mysql> SELECT * FROM students_marks WHERE gender="Male" ORDER BY ((maths+science+english)/3) DESC  LIMIT 35,15;

```

### FSD.SQL.5.2

Table - `employee_salary`

Names of all the departments

```sql
mysql> SELECT DISTINCT(department) FROM employee_salary;

```

Names of all the companies

```sql
mysql> SELECT DISTINCT(company) FROM employee_salary;

```

Total salaries all of Women in Engineering who earn less than one million

```sql
mysql> SELECT SUM(salary) AS total_salary FROM employee_salary WHERE gender="Female" AND salary<1000000 AND department="Engineering";

```

Company and department where people make less than 80k

```sql
mysql> SELECT DISTINCT company,department FROM employee_salary WHERE salary<80000;

```

Average salary of people who belong Accounting and Legal who make less than 100k

```sql
mysql> SELECT AVG(salary) FROM employee_salary WHERE department IN ("Accounting","Legal") AND salary<100000;

```

Average salary top 10 earning Men

```sql

mysql> SELECT AVG(salary) FROM (SELECT salary FROM employee_salary WHERE gender="Male" ORDER BY salary DESC LIMIT 10) AS top_men_salary;


```

Total salary of bottom 10 earning Women

```sql
mysql> SELECT SUM(salary) FROM (SELECT salary FROM employee_salary WHERE gender="Female" ORDER BY salary ASC LIMIT 10) AS bottom_women_salary;


```

Average salary of Engineering people

```sql
mysql> SELECT AVG(salary) FROM employee_salary WHERE department="Engineering";

```

Average salary of the Women ranked 30 to 50 in terms of salary earned

```sql
mysql> SELECT AVG(salary) FROM (SELECT salary FROM employee_salary WHERE gender="Female" ORDER BY salary DESC LIMIT 30,20) AS women_rank_30_50;


```

Total Salary of Men ranked 50 to 100 in terms of salary earned

```sql
mysql> SELECT SUM(salary) FROM (SELECT salary FROM employee_salary WHERE gender="Male" ORDER BY salary DESC LIMIT 50,50) AS men_salary_50_100;

```

Total salary of bottom 50 earning women in Engineering

```sql
mysql> SELECT SUM(salary) FROM
    -> (SELECT salary FROM employee_salary
    -> WHERE gender="Female" AND department="Engineering"
    -> ORDER BY salary LIMIT 50)
    -> AS bottom50_er_women;

```

Average salary of the top 50 earning men in Human Resources

```sql
mysql> SELECT AVG(salary) FROM
    -> (SELECT salary FROM employee_salary
    -> WHERE gender="Male" AND department="Human Resources"
    -> ORDER BY salary DESC LIMIT 50)
    -> AS top50_er_men;

```

### FSD.SQL.5.3

Table - `cars_data`

Names of all the cars makers

```sql
mysql> SELECT DISTINCT car_make from cars_data;

```

List of all the car colors

```sql
mysql> SELECT DISTINCT car_color FROM cars_data;

```

Average age of all the Honda cars

```sql
mysql> SELECT AVG(YEAR(CURDATE())-purchase_year) AS avg_age FROM cars_data WHERE car_make="Honda";

```

### FSD.SQL.5.4

Table - `users_data`

List all the available shirt sizes

```sql
mysql> SELECT DISTINCT shirt_size FROM user_data;

```

List all the Language names

```sql
mysql> SELECT DISTINCT language FROM user_data;

```

Count all the females whose name end with vowels

```sql
mysql> SELECT COUNT(id) FROM user_data WHERE gender="Female" AND (name LIKE "%a" OR name LIKE "%e" OR name LIKE "%i" OR name LIKE "%o" OR name LIKE "%u") ;

```

List all the males whose name has a vowel as the 2nd character

```sql
mysql> SELECT * FROM user_data WHERE gender="Male" AND (name LIKE "_a%" OR name LIKE "_e%" OR name LIKE "_i%" OR name LIKE "_o%" OR name LIKE "_u%") ;

```

List all the users whose name starts and ends with the letter `a`

```sql
mysql> SELECT name FROM user_data WHERE name LIKE "a%a";

```

Count of all users who have the letter `z` in their name

```sql
mysql> SELECT COUNT(id) FROM user_data WHERE name LIKE "%z%";

```

Count of all male users who have the word `dev` in their names

```sql
mysql> SELECT COUNT(id) FROM user_data WHERE gender="Male" AND name LIKE "%dev%";

```

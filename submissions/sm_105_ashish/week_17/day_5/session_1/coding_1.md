### Week 17 Day 5 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_17/day_5/session_1`

### FSD.SQL.5.1

Table - `students_marks`

Average maths marks of all the female students

```sql
SELECT AVG(maths) FROM students_marks WHERE gender = "Female";

```

Average marks subject wise of all male students who scored more that 85 in maths, science and english

```sql
SELECT AVG(maths), AVG(science) ,AVG(english) FROM students_marks WHERE gender = "male" AND maths > 85 AND science > 85 AND english > 85;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
SELECT AVG(maths), AVG(science) ,AVG(english) FROM students_marks WHERE gender = "male" AND maths BETWEEN 50 AND 75  AND english BETWEEN 50 AND 75;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
SELECT AVG(maths+science+english) as total from students_marks WHERE class IN("I","II","III","IV","V") AND maths > 50 AND science > 50 AND english > 50;

```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
SELECT AVG(maths), AVG(science) ,AVG(english) FROM students_marks WHERE gender = "female" AND maths <25   AND english < 25 AND science < 25 AND class = "X";
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
SELECT AVG(maths), AVG(science) ,AVG(english) FROM students_marks WHERE  maths <50   AND english < 50 AND science < 50 AND section = "A";
```

Average total marks of Students from section C whose more that 75 in all the subjects

```sql
SELECT AVG(maths + science + english) as total FROM students_marks WHERE  maths >75   AND english > 75 AND science > 75 AND section = "C";
```

Students who will fall in page 1 if ordered by increasing order of total marks scored (Assume 10 results per page)

```sql
SELECT  name ,(maths + science + english) as total FROM students_marks ORDER BY total ASC LIMIT 10;
```

Students who will fall in page 6 if ordered by descreasing order of average marks scored (Assume 20 results per page)

```sql
SELECT  * FROM students_marks ORDER BY  (maths + science + english)/3 DESC LIMIT 100,20;
```


Female Students who will fall in page 2 if ordered by increasing order of total marks scored (Assume 5 results per page)

```sql
SELECT  * FROM students_marks WHERE gender = "Female" ORDER BY  (maths + science + english) ASC LIMIT 5,5;
```

Male Students who will fall in page 4 if ordered by decreasing order of average marks (Assume 15 results per page)

```sql
SELECT  * FROM students_marks WHERE gender = "Male" ORDER BY  (maths + science + english)/3 DESC LIMIT 45,15;
```

### FSD.SQL.5.2

Table - `employee_salary`

Names of all the departments

```sql
SELECT DISTINCT department FROM employee_salary;

```

Names of all the companies

```sql
SELECT DISTINCT company FROM employee_salary;
```

Total salaries all of Women in Engineering who earn less than one million

```sql
SELECT SUM(salary) FROM (SELECT salary FROM employee_salary WHERE gender = "Female" AND salary < 1000000) AS womensEngineer;
```

Company and department where people make less than 80k

```sql
SELECT company,department FROM employee_salary WHERE salary < 80000;
```

Average salary of people who belong Accounting and Legal who make less than 100k 

```sql
SELECT AVG(salary) FROM employee_salary WHERE department IN ("Accounting","Legal") AND salary < 100000;
```

Average salary of top 10 earning Men

```sql
SELECT AVG(salary) FROM (SELECT salary from employee_salary WHERE gender = "male" ORDER BY salary DESC LIMIT 10) AS TOP10MEN;
```

Total salary of bottom 10 earning Women

```sql
SELECT SUM(salary) FROM (SELECT salary from employee_salary WHERE gender = "male" ORDER BY salary ASC LIMIT 10) AS BOTTOM10WOMEN;
```

Average salary of  Engineering people

```sql
SELECT AVG(salary) FROM (SELECT salary FROM employee_salary WHERE department = "Engineering") AS Engineers;
```

Average salary of the Women ranked 30 to 50 in terms of salary earned

```sql
SELECT AVG(salary) FROM (SELECT salary FROM employee_salary ORDER BY salary DESC LIMIT 30,50) AS women30to50;
```

Total Salary of Men ranked 50 to 100 in terms of salary earned

```sql
SELECT SUM(salary) FROM (SELECT salary FROM employee_salary WHERE gender="male" ORDER BY salary DESC LIMIT 50,100) AS 50to100mens;
```

Total salary of bottom 50 earning women in Engineering

```sql
SELECT SUM(salary) FROM (SELECT salary FROM employee_salary WHERE gender="female" AND department = "Engineering" ORDER BY salary ASC LIMIT 50) AS BOTTOM50WOMEN;
```

Average salary of the top 50 earning men in Human Resources

```sql
SELECT AVG(salary) FROM (SELECT salary FROM employee_salary WHERE gender="male" AND department = "Human Resources" ORDER BY salary DESC LIMIT 50) AS TOP50MEN;
```

### FSD.SQL.5.3

Table - `cars_data`

Names of all the cars makers
```sql
SELECT DISTINCT company FROM cars_data; 
```

List of all the car colors
```sql
SELECT DISTINCT car_color FROM cars_data; 
```

Average age of all the Honda cars 
```sql
SELECT AVG(2020-purchase_year) FROM cars_data WHERE car_make="Honda";
```


### FSD.SQL.5.4

Table - `user_data`

List all the available shirt sizes

```sql
SELECT DISTINCT shirt_size FROM user_data;

```

List all the country names 

```sql
SELECT DISTINCT language FROM user_data;

```

Count all the females whose name end with vowels

```sql
SELECT  COUNT(id) from user_data WHERE gender = "female" AND (name LIKE "%a" OR name LIKE "%e" OR name LIKE "%o" OR name LIKE  "%i" OR name LIKE  "%u");
```

List all the males whose name has a vowel as the 2nd character

```sql
SELECT  * from user_data WHERE gender="male" AND (name LIKE "_a%" OR name LIKE "_e%" OR name LIKE "_o%" OR name LIKE  "_i%" OR name LIKE  "_u%");
```

List all the users whose name starts and ends with the letter `a`

```sql
SELECT  * from user_data WHERE name LIKE "a%" AND name LIKE "%a";
```

Count of all users who have the letter `z` in their name

```sql
SELECT  count(id) from user_data WHERE name LIKE "%z%";
```

Count of all male users who have the word `dev` in their names

```sql
SELECT  name from user_data WHERE name LIKE "%dev%";
```
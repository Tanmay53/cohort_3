### Week 17 Day 5 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_17/day_5/session_1`

### FSD.SQL.5.1

Table - `students_marks`

Average maths marks of all the female students

```
SELECT AVG(maths) FROM students_marks WHERE gender = 'Female';
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english

```
 SELECT AVG(maths) "Maths Average", AVG(science) as "Science Average", AVG
(english) "English Average" FROM students_marks WHERE gender = 'Male' AND englis
h > 85 AND maths > 85 AND science > 85;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```
SELECT AVG(maths), AVG(english) FROM students_marks WHERE (maths BETWEEN
50 AND 75) AND (english BETWEEN 50 AND 75);
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```
SELECT SUM(english + maths + science) AS Total, AVG(english + maths + science) AS Average  FROM students_marks WHERE maths > 50 AND english > 50 AND science > 50 AND class IN ('I', 'II', 'III', 'IV', 'V')
```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```
SELECT AVG(english + maths + science) FROM students_marks WHERE
gender = 'Female' AND class = 'X' AND section = 'A' AND (maths < 25 AND english
 < 25 AND science < 25);
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```
SELECT AVG(maths), AVG(english), AVG(science) FROM students_marks WHERE
section = 'A' AND maths < 50 AND english < 50 AND science < 50;
```

Average total marks of Students from section C whose more that 75 in all the subjects

```
SELECT SUM(maths + english + science) as "Total Marks", AVG(maths + english + science) AS 'Average' FROM students_marks WHERE section ='C' AND maths >
75 AND english > 75 AND science > 75;
```

Students who will fall in page 1 if ordered by increasing order of total marks scored (Assume 10 results per page)

```
SELECT *, (maths + english + science) AS Total  FROM students_marks ORDER BY Total ASC LIMIT 10
```

Students who will fall in page 6 if ordered by descreasing order of average marks scored (Assume 20 results per page)

```
SELECT *, (maths + english + science) / 3 as Average FROM students_marks ORDER BY Average Desc LIMIT 80, 20;
```


Female Students who will fall in page 2 if ordered by increasing order of total marks scored (Assume 5 results per page)

```
SELECT *, (maths + english + science) AS Total FROM students_marks WHERE gender = 'Female' ORDER BY Total ASC LIMIT 5,5;
```

Male Students who will fall in page 4 if ordered by decreasing order of average marks (Assume 15 results per page)

```
SELECT *, (english + maths + science) / 3 AS Average  FROM students_marks WHERE gender = 'Male' ORDER BY Average DESC LIMIT 45, 15;
```

### FSD.SQL.5.2

Table - `employee_salary`

Names of all the departments

```
SELECT DISTINCT department FROM employee_salary;
```

Names of all the companies

```
SELECT DISTINCT company FROM employee_salary;
```

Total salaries all of Women in Engineering who earn less than one million

```
SELECT SUM(salary) FROM employee_salary WHERE gender = 'Female' AND department = 'Engineering' AND salary < 1000000;
```

Company and department where people make less than 80k

```
SELECT company, department FROM employee_salary WHERE salary < 80000;
```

Average salary of people who belong Accounting and Legal who make less than 100k 

```
SELECT AVG(salary) FROM employee_salary WHERE department IN ('Accounting', 'Legal') AND salary < 100000;
```

Average salary top 10 earning Men

```
SELECT SUM(salary) FROM (SELECT salary FROM employee_salary ORDER BY salary DESC LIMIT 10) AS temp;
```

Total salary of bottom 10 earning Women

```
SELECT SUM(salary) AS "Total Sarlary" FROM (SELECT salary FROM employee_salary ORDER BY salary ASC LIMIT 10) AS temp;
```

Average salary of  Engineering people

```
SELECT AVG(salary) FROM employee_salary WHERE department = 'Engineering'
```

Average salary or the Women ranked 30 to 50 in terms of salary earned

```
SELECT AVG(salary) AS Average  FROM (SELECT * FROM employee_salary WHERE gender = 'Female' LIMIT 29, 21) AS temp;
```

Total Salary of Men ranked 50 to 100 in terms of salary earned

```
SELECT SUM(salary) FROM (SELECT salary FROM employee_salary WHERE gender = 'Male' ORDER BY salary DESC LIMIT 49, 51) as temp
```

Total salary of bottom 50 earning women in Engineering

```
SELECT SUM(salary) FROM (SELECT salary FROM employee_salary WHERE gender = 'Female' AND department = 'Engineering' ORDER BY salary ASC  LIMIT 50) as temp
```

Average salary of the top 50 earning men in Human Resources

```
SELECT AVG (salary) FROM (SELECT salary FROM employee_salary WHERE gender = 'Male' AND department = 'Human Resources' ORDER BY salary DESC LIMIT 50) as temp;
```

### FSD.SQL.5.3

Table - `cars_data`

Names of all the cars makers
```
SELECT DISTINCT name FROM cars_data;
```

List of all the car colors
```
SELECT DISTINCT car_color FROM cars_data;
```

Average age of all the Honda cars 
```
SELECT AVG(2020 - purchase_year) 'Average Age' FROM cars_data WHERE
car_make = 'Honda';
```


### FSD.SQL.5.4

Table - `users_data`

List all the available shirt sizes

```
 SELECT DISTINCT shirt_size FROM user_data;
```

List all the country names 

```
```

Count all the females whose name end with vowels

```
SELECT COUNT(id) FROM user_data WHERE gender = 'Female' AND (name LIKE '%a' OR name LIKE '%e' OR name LIKE '%i' OR name LIKE '%o' OR name LIKE
'%u' );
```

List all the males whose name has a vowel as the 2nd character

```
SELECT * FROM user_data WHERE gender = 'Male' AND (name LIKE '_a%' OR  name LIKE '_e%' OR name LIKE '_i%' OR name LIKE '_o%' OR name LIKE '_u%');
```

List all the users whose name starts and ends with the letter `a`

```
SELECT * FROM user_data WHERE name LIKE 'a%a';
```

Count of all users who have the letter `z` in their name

```
SELECT * FROM user_data WHERE name LIKE '%z%';
```

Count of all male users who have the word `dev` in their names

```
SELECT * FROM user_data WHERE gender = 'Male' AND name LIKE '%dev%'; 
```
### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
SELECT AVG(maths),class FROM students_marks WHERE gender = 'Female' GROUP BY class;
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
SELECT AVG(maths),AVG(science),AVG(english),section FROM students_marks WHERE gender
= 'Male' AND (maths > 85 AND science > 85 AND english > 85) GROUP BY section;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
SELECT AVG(maths),AVG(science),AVG(english) FROM students_marks WHERE (maths BETWEEN 50 AND 75) AND (english BETWEEN 50 AND 75);
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
SELECT AVG(maths+science+english),class FROM students_marks WHERE maths > 50 AND science > 50 AND english > 50 AND class IN ('I','II','III','IV','V') GROUP BY class;
```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
SELECT AVG(maths),AVG(science),AVG(english) as avg_subject_score FROM students_marks WHERE gender = 'Female' AND class = 'X' AND section = 'A' AND maths < 25 AND science < 25 AND english < 25;
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
SELECT AVG(maths),AVG(english),AVG(science) FROM students_marks WHERE section = 'A' AND maths < 50 AND english < 50 AND science < 50;
```

Grade wise average total marks of Students from section C

```sql
SELECT AVG(maths+science+english) as avg_total,class FROM students_marks WHERE section = 'C' GROUP BY class;
```


Female Students count by grade and section

```sql
SELECT COUNT(*),class,section FROM students_marks WHERE gender = 'Female' GROUP BY class,section;
```

Top to bottom averge total marks of all male students by grade and section

```sql
SELECT AVG(maths+science+english) as avg_total,class,section FROM students_marks WHERE gender = 'Male' GROUP BY class,section ORDER BY avg_total DESC;
```

### FSD.SQL.6.2

Table - `employee_salary`

Department wise average salaries

```sql
SELECT AVG(salary),department FROM employee_salary GROUP BY department;
```

Company wise average salaries

```sql
SELECT AVG(salary),company FROM employee_salary GROUP BY company;
```

Company and department wise count of people who make less than one million

```sql
SELECT COUNT(*),company,department FROM employee_salary WHERE salary < 1000000 GROUP BY company,department;
```

Average salary of people who belong Engineering  who make less than 100k 

```sql
SELECT AVG(salary) FROM employee_salary WHERE department = 'Engineering' AND salary < 100000;
```

Comapny wise average salary of  Engineering people who earn more than 100k

```sql
SELECT AVG(salary),company FROM employee_salary WHERE department = 'Engineering' AND salary > 100000 GROUP BY company;
```

Department wise total salary of women 

```sql
SELECT SUM(salary),department FROM employee_salary WHERE gender = 'Female' GROUP BY department;
```

Company wise average salary of men in Human Resources

```sql
SELECT AVG(salary),company FROM employee_salary WHERE gender = 'Male' AND department = 'Human Resources' GROUP BY company;
```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make
```sql
SELECT COUNT(*),car_make FROM cars_data GROUP BY car_make;
```

List of all the car colors whose count is more 50
```sql
SELECT car_color FROM (SELECT COUNT(*) as cnt,car_color FROM cars_data GROUP BY car_color) as cnt_table WHERE cnt > 50;
```

Country wise average age of all cars
```sql
SELECT AVG(2020-purchase_year),country FROM cars_data GROUP BY country;
```


### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users 

```sql
SELECT COUNT(*),shirt_size FROM user_data GROUP BY shirt_size;
```

Count of users segregated by language and gender

```sql
SELECT COUNT(*),language,gender FROM user_data GROUP BY gender,language;
```

Count all the females segregrated by shirt sizes

```sql
SELECT COUNT(*),shirt_size FROM user_data WHERE gender = 'Female' GROUP BY shirt_size;
```


Count of all male users who wear the size `2XL`

```sql
SELECT COUNT(*),shirt_size FROM user_data WHERE gender = 'Male' AND shirt_size = '2XL';
```
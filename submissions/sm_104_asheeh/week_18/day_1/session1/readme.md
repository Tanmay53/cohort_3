### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
SELECT COUNT(*), AVG(maths) as maths, gender, class from students_marks WHERE gender = "female" GROUP BY class;
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
SELECT AVG(maths) as avg_maths, AVG(english) as avg_english, AVG(science), section FROM (SELECT * from students_marks where gender = "male" AND maths > 85 AND english > 85 AND science > 85) as sum GROUP BY section;

```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
SELECT AVG(maths) AS avg_maths, AVG(english) AS avg_english, AVG(science) AS avg_science FROM (SELECT * FROM students_marks WHERE (maths BETWEEN 50 AND 75) AND (english BETWEEN 50 AND 75)) as sub_table;

```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
SELECT AVG(maths + english + science) AS avg_total FROM (SELECT * FROM students_marks WHERE class IN ("I", "II", "III", "IV", "V") AND (maths > 50 AND science > 50 AND english > 50)) as sub_table;

```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
SELECT AVG(maths) as avg_maths, AVG(english) as avg_english, AVG(science) as avg_science FROM (SELECT * FROM students_marks WHERE gender = "female" AND class = "X" AND section = "A" AND (maths <25 AND science < 25 AND english < 25)) as sub_table;

```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
SELECT AVG(maths) as avg_maths, AVG(english) as avg_english, AVG(science) as avg_science FROM (SELECT * FROM students_marks WHERE section = "A" AND (maths < 50 AND english < 50 AND science < 50)) as sub_table;
```

Grade wise average total marks of Students from section C

```sql
SELECT AVG(maths + english + science) as avg_total, class FROM (SELECT * FROM students_marks WHERE section = "C") as sub_table GROUP BY class;
```


Female Students count by grade and section

```sql
SELECT COUNT(*) as cnt, class, section, gender FROM students_marks WHERE gender = "female" GROUP BY class, section, gender;
```

Top to bottom averge total marks of all male students by grade and section

```sql
SELECT AVG(maths + science + english) as avg_total, class, section, gender FROM students_marks WHERE gender = "male" GROUP BY class, section, gender ORDER BY avg_total DESC;

```

### FSD.SQL.6.2

Table - `employee_salary`

Department wise average salaries

```sql
SELECT AVG(salary), department FROM employee_salary GROUP BY department;
```

Company wise average salaries

```sql
SELECT AVG(salary), company FROM employee_salary GROUP BY company;
```

Company and department wise count of people who make less than one million

```sql
SELECT COUNT(*) as cnt, company, department FROM employee_salary WHERE salary < 1000000 GROUP BY company, department
```

Average salary of people who belong Engineering  who make less than 100k 

```sql
SELECT AVG(salary) as avg_salary, department FROM employee_salary WHERE salary < 100000 GROUP BY department HAVING department = "ENGINEERING";
```

Comapny wise average salary of  Engineering people who earn more than 100k

```sql
SELECT AVG(salary) as avg_salary, company, department FROM employee_salary WHERE salary > 100000 GROUP BY company, department HAVING department = "Engineering";
```

Department wise total salary of women 

```sql
SELECT SUM(salary) as total_salary, department FROM employee_salary WHERE gender = "female" GROUP BY department;
```

Company wise average salary of men in Human Resources

```sql
SELECT AVG(salary) as avg_salary, company FROM employee_salary WHERE (department = "Human Resources" AND gender = "male") GROUP BY company;
```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make
```sql
SELECT COUNT(*) as cnt, car_make FROM cars_data GROUP BY car_make;
```

List of all the car colors whose count is more 50
```sql
SELECT COUNT(*) as cnt, car_color FROM cars_data GROUP BY car_color HAVING cnt > 50;
```

Country wise average age of all cars
```sql
SELECT AVG(2020 - purchase_year) as avg_age, country FROM cars_data GROUP BY country;
```


### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users 

```sql
SELECT COUNT(id) as cnt, shirt_size FROM user_data GROUP BY shirt_size;
```

Count of users segregated by language and gender

```sql
SELECT COUNT(id) as cnt, language, gender FROM user_data GROUP BY language, gender;
```

Count all the females segregrated by shirt sizes

```sql
SELECT COUNT(id) as cnt, shirt_size FROM user_data WHERE gender = "female" GROUP BY shirt_size;
```


Count of all male users who wear the size `2XL`

```sql
SELECT COUNT(id) as cnt FROM user_data WHERE (gender = "male" AND shirt_size = "2XL");
```
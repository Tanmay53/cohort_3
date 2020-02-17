### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
SELECT AVG(maths),class FROM students_marks  WHERE gender="Female" GROUP BY class;
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
SELECT AVG(maths),AVG(science),AVG(english),section FROM students_marks WHERE gender="Male" AND maths > 85 AND english > 85 AND science > 85 GROUP BY section;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
SELECT AVG(maths),AVG(english) FROM students_marks WHERE maths BETWEEN 50 AND 75 AND english BETWEEN 50 AND 75;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
SELECT AVG(maths+science+english) FROM (SELECT * FROM students_marks WHERE maths > 50 AND science > 50 AND english > 50)as moretable WHERE class BETWEEN "I" AND "V";
```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
SELECT AVG(maths),AVG(science),AVG(english) FROM (SELECT  * FROM students_marks WHERE (maths < 25 AND english < 25 AND science < 25) )as newtable WHERE class = "X" AND section = "A" AND gender="Female";
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
SELECT AVG(maths),AVG(science),AVG(english) FROM (SELECT  * FROM students_marks WHERE (maths < 50 AND english < 50 AND science < 50) )as newtable WHERE section = "A";
```

Grade wise average total marks of Students from section C

```sql
SELECT AVG(science+english+maths)as avgtotal,class FROM students_marks WHERE section = "c" GROUP BY class;
```


Female Students count by grade and section

```sql
SELECT COUNT(*),class,section FROM students_marks WHERE gender = "Female" GROUP BY class,section;
```

Top to bottom averge total marks of all male students by grade and section

```sql
SELECT AVG(maths+english+science)as avgtotal,class,section FROM students_marks GROUP BY class,section ORDER BY avgtotal DESC;
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
SELECT count(*),company,department FROM (SELECT * FROM employee_salary WHERE salary < 1000000)as newtable GROUP BY company,department;
```

Average salary of people who belong Engineering  who make less than 100k 

```sql
SELECT AVG(salary) FROM (SELECT * FROM employee_salary WHERE salary < 100000 AND department = "Engineering")as engineertable;
```

Comapny wise average salary of  Engineering people who earn more than 100k

```sql
SELECT AVG(salary),company FROM (SELECT * FROM employee_salary WHERE salary > 100000)as engineertable GROUP BY company;
```

Department wise total salary of women 

```sql
SELECT SUM(salary),department FROM employee_salary WHERE gender = "Female" GROUP BY department;
```

Company wise average salary of men in Human Resources

```sql
SELECT AVG(salary),company FROM employee_salary WHERE department = "Human Resources" GROUP BY company;
```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make
```sql
SELECT COUNT(*),car_make FROM cars_data GROUP BY car_make;
```

List of all the car colors whose count is more 50
```sql
SELECT COUNT(*)as count,car_color FROM cars_data GROUP BY car_color HAVING count > 50;
```

Country wise average age of all cars
```sql
SELECT AVG(2020-purchase_year),country FROM cars_data GROUP BY country;
```


### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users 

```sql
SELECT count(*),shirt_size FROM user_data GROUP BY shirt_size;
```

Count of users segregated by language and gender

```sql
SELECT count(*),language,gender FROM user_data GROUP BY language,gender;
```

Count all the females segregrated by shirt sizes

```sql
SELECT count(*),shirt_size FROM user_data WHERE gender = "Female" GROUP BY shirt_size;
```


Count of all male users who wear the size `2XL`

```sql
SELECT count(*) FROM user_data WHERE gender = "Male" AND shirt_size = "2XL";

```
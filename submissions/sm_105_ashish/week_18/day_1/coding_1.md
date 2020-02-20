### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
 SELECT AVG(maths) ,class from students_marks WHERE gender = "Female" GROUP BY class;
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
SELECT AVG(maths),AVG(science),AVG(english) ,section FROM students_marks WHERE gender = "male" and maths > 85 and science > 85 and english > 85 GROUP BY section;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
SELECT AVG(maths),AVG(english),AVG(science) FROM (SELECT * FROM students_marks WHERE maths > 50 AND maths < 75 AND english > 50 and english < 75) as newtable;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
SELECT AVG(maths+science+english) ,class FROM students_marks WHERE class IN("I","II","III","IV","V") AND maths > 50 AND science > 50 AND english > 50 GROUP BY class;
```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
SELECT AVG(maths),AVG(english),AVG(science) FROM students_marks WHERE class ="X" AND section ="A" AND maths < 25 AND science < 25  AND english < 25 AND gender = "female";
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
SELECT AVG(maths),AVG(english),AVG(science) FROM students_marks WHERE class ="X" AND section ="A" AND maths < 50 AND science < 50  AND english < 50;
```

Grade wise average total marks of Students from section C

```sql
SELECT AVG(science + maths + english),class from students_marks WHERE section = "C" GROUP by class;
```


Female Students count by grade and section

```sql
SELECT COUNT(*) ,section,class FROM students_marks GROUP BY section,class;
```

Top to bottom averge total marks of all male students by grade and section

```sql
SELECT AVG(maths + science + english) AS avgtotal,class,section FROM students_marks WHERE gender = "male" GROUP BY class , section ORDER BY avgtotal DESC;
```

### FSD.SQL.6.2

Table - `employee_salary`

Department wise average salaries

```sql
SELECT AVG(salary),department from employee_salary GROUP BY department;
```

Company wise average salaries

```sql
SELECT AVG(salary),company from employee_salary GROUP BY company;
```

Company and department wise count of people who make less than one million

```sql
SELECT count(*) ,company,department from employee_salary
WHERE salary < 1000000 GROUP BY company,department;
```

Average salary of people who belong Engineering  who make less than 100k 

```sql
SELECT AVG(salary) FROM employee_salary WHERE department = "Engineering" AND salary < 100000;
```

Comapny wise average salary of  Engineering people who earn more than 100k

```sql
SELECT AVG(salary),company FROM employee_salary WHERE department = "Engineering" AND salary > 100000 GROUP BY company;
```

Department wise total salary of women 

```sql
SELECT SUM(salary),department FROM employee_salary WHERE gender="female" GROUP BY department;
```

Company wise average salary of men in Human Resources

```sql
SELECT AVG(salary),company FROM employee_salary WHERE gender ="male" AND department ="Human Resources" GROUP BY company;
```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make
```sql
SELECT count(*),car_make FROM cars_data GROUP BY car_make;
```

List of all the car colors whose count is more 50
```sql
SELECT count(*) as colorcount,car_color FROM cars_data GROUP BY car_color HAVING colorcount > 50;
```

Country wise average age of all cars
```sql
SELECT AVG(2020-purchase_year) , country from cars_data GROUP BY country;
```


### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users 

```sql
SELECT count(*),shirt_size FROM user_data GROUP BY shirt_size;
```

Count of users segregated by language and gender

```sql
SELECT count(*) , language,gender FROM user_data GROUP BY language, gender;
```

Count all the females segregrated by shirt sizes

```sql
SELECT count(*) , shirt_size FROM user_data WHERE gender = "Female" GROUP BY shirt_size;
```


Count of all male users who wear the size `2XL`

```sql
SELECT COUNT(*) , shirt_size FROM user_data WHERE gender="male" AND shirt_size="2XL";
```
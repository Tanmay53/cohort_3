### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
mysql> SELECT AVG(maths),class,gender FROM students_marks GROUP BY class,gender HAVING gender="Female";

```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
mysql> SELECT AVG(maths),AVG(science),AVG(english),section FROM (SELECT * FROM students_marks WHERE maths>85 AND science>85 AND english>85) as topper GROUP BY section,gender HAVING gender="Male" ;

```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
mysql> SELECT AVG(maths),AVG(science),AVG(english) FROM students_marks WHERE maths BETWEEN 50 AND 75 AND english BETWEEN 50 AND 75;

```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
mysql> SELECT AVG(maths+science+english),class FROM (SELECT * FROM students_marks WHERE class IN ('I','II','III','IV','V') AND maths>50 AND english>50 AND science>50) as grp GROUP BY class;

```

Average subjects scores of all the female students from grade X section A who scored less that 25 in all subjects

```sql
mysql> SELECT AVG(maths),AVG(science),AVG(english) FROM (SELECT * FROM students_marks WHERE maths<25 AND science<25 AND english<25) as bottom GROUP BY gender,class,section HAVING gender="Female" AND class="X" AND section="A";

```

Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
mysql> SELECT AVG(maths),AVG(science),AVG(english) FROM (SELECT * FROM students_marks WHERE maths<50 AND english<50 AND science<50) AS mediocre GROUP BY section HAVING section="A";

```

Grade wise average total marks of Students from section C

```sql
mysql> SELECT AVG(maths+science+english),class,section FROM students_marks GROUP BY class,section HAVING section="C";

```

Female Students count by grade and section

```sql
mysql> SELECT COUNT(*) cnt,gender,class,section FROM students_marks GROUP BY class,section,gender HAVING gender="Female";

```

Top to bottom averge total marks of all male students by grade and section

```sql
mysql> SELECT AVG(maths+science+english) AS total_avg,gender,class,section as total_avg FROM students_marks  GROUP BY gender,class,section HAVING gender="Male" ORDER BY total_avg DESC;
```

### FSD.SQL.6.2

Table - `employee_salary`

Department wise average salaries

```sql
mysql> SELECT AVG(salary),department FROM employee_salary GROUP BY department;

```

Company wise average salaries

```sql
mysql> SELECT AVG(salary),department FROM employee_salary GROUP BY department;

```

Company and department wise count of people who make less than one million

```sql
mysql> SELECT COUNT(*),company,department FROM (SELECT * FROM employee_salary WHERE salary<1000000) as below_million GROUP BY company,department;

```

Average salary of people who belong to Engineering who make less than 100k

```sql
mysql> SELECT AVG(salary) FROM (SELECT salary,department FROM employee_salary WHERE salary < 100000) as below_100k GROUP BY department HAVING department="Engineering";

```

Comapny wise average salary of Engineering people who earn more than 100k

```sql
mysql> SELECT AVG(salary),company FROM (SELECT * FROM employee_salary WHERE salary > 100000) as above_100k GROUP BY company,department HAVING department="Engineering";

```

Department wise total salary of women

```sql
mysql> SELECT AVG(salary),department,gender FROM employee_salary GROUP BY gender,department HAVING gender="Female";

```

Company wise average salary of men in Human Resources

```sql
mysql> SELECT AVG(salary),company,gender FROM employee_salary GROUP BY gender,company,department HAVING gender="Male" AND department="Human Resources";

```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make

```sql
mysql> SELECT COUNT(*) as total_cars,car_make FROM cars_data GROUP BY car_make;

```

List of all the car colors whose count is more 50

```sql
mysql> SELECT total,car_color FROM (SELECT COUNT(*) as total,car_color FROM cars_data GROUP BY car_color) AS color_count WHERE total>50;

```

Country wise average age of all cars

```sql
mysql> SELECT country,AVG(YEAR(CURDATE())-purchase_year) as avg_age FROM cars_data GROUP BY country;

```

### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users

```sql
mysql> SELECT shirt_size,COUNT(*) AS users FROM user_data GROUP BY shirt_size;
```

Count of users segregated by language and gender

```sql
mysql> SELECT language,gender,COUNT(*) FROM user_data GROUP BY language,gender;


```

Count all the females segregrated by shirt sizes

```sql
mysql> SELECT shirt_size,COUNT(*) AS female_users FROM user_data GROUP BY shirt_size,gender HAVING gender="Female";

```

Count of all male users who wear the size `2XL`

```sql
mysql> SELECT COUNT(*) 2XL_male_users FROM user_data GROUP BY shirt_size,gender HAVING gender="male" AND shirt_size="2XL";

```

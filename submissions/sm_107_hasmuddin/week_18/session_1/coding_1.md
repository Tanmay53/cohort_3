### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
SELECT  AVG(maths) as avg, class FROM students_marks WHERE gender="Female" GROUP BY class;
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
SELECT class,  AVG(maths) as math_avg, AVG(science) as science_avg, AVG(english) as english_avg FROM (SELECT * FROM students_marks WHERE gender="Male" AND science > 85 AND maths > 85 AND english > 85) as student GROUP BY class;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
SELECT AVG(maths), AVG(science), AVG(english) FROM ( SELECT * FROM students_marks WHERE (maths BETWEEN 50 AND 75 ) AND (english BETWEEN 50 AND 75) ) AS avg_table;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
SELECT AVG(maths+science+english) as avg_total FROM (SELECT * FROM students_marks WHERE class IN ("I", "II", "III", "IV", "V") AND (maths>50 AND science>50 AND english > 50)) as total_avg_till_five;
```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
SELECT AVG(maths), AVG(science), AVG(maths) FROM ( SELECT * FROM students_marks WHERE gender="Female" AND class ="X" AND (maths<25 AND science <25 AND english < 25)) as avg_X_grade;
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
SELECT AVG(maths), AVG(science), AVG(maths) FROM (SELECT * FROM students_marks WHERE  section="A"  AND (maths<50 AND science <50 AND english < 50)) as avg_section_A;
```

Grade wise average total marks of Students from section C

```sql
SELECT class, AVG(maths+science+english) as avg_total FROM (SELECT * FROM students_marks WHERE section="C" ) AS section GROUP BY class;
```


Female Students count by grade and section

```sql
SELECT class, section,  COUNT(*) FROM (SELECT * FROM students_marks WHERE gender="Female") as grade_by_female GROUP BY class, section ;
```

Top to bottom averge total marks of all male students by grade and section

```sql
SELECT class, section,  AVG(english+maths+science) as avg_total FROM (SELECT *  FROM studeks WHERE gender="Male") as grade_by_top_to_bottom GROUP BY class, section ORDER BY avg_total DESC;

```

### FSD.SQL.6.2

Table - `employee_salary`

Department wise average salaries

```sql
SELECT department, AVG(salary) FROM (SELECT * FROM employee_salary) as departments GROUP BY department;
```

Company wise average salaries

```sql
SELECT company, AVG(salary) FROM (SELECT * FROM employee_salary) as departments GROUP BY company;
```

Company and department wise count of people who make less than one million

```sql
SELECT company, department , COUNT(*) as employee_count FROM (SELECT * FROM employee_salary WHERE salary < 1000000) as salary_emp GROUP BY company, department;
```

Average salary of people who belong Engineering  who make less than 100k 

```sql
SELECT AVG(salary), department FROM (SELECT * FROM employee_salary WHERE department="Engineering" AND salary < 100000) as engi_avg;
```

Comapny wise average salary of  Engineering people who earn more than 100k

```sql
SELECT AVG(salary), department, company FROM (SELECT * FROM employee_salary WHERE department="Engineering" AND salary > 100000) as engi_avg GROUP BY company;
```

Department wise total salary of women 

```sql
SELECT SUM(salary),gender, department FROM (SELECT * FROM employee_salary WHERE gender="Female") as women_salary GROUP BY department;
```

Company wise average salary of men in Human Resources

```sql
SELECT AVG(salary),gender, company FROM (SELECT * FROM employee_salary WHERE gender="Male" AND department="Human Resources") as MEN_avg_salary GROUP BY company;
```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make
```sql
SELECT car_make, COUNT(*) as car_count FROM (SELECT * FROM cars_data) as cars GROUP BY car_make;
```

List of all the car colors whose count is more 50
```sql
SELECT COUNT(car_color) as color_count , car_color FROM cars_data GROUP BY car_color HAVING color_count > 50;

```

Country wise average age of all cars
```sql
SELECT count(*) , country,  AVG(2020-purchase_year) as car_avg_age FROM cars_data GROUP BY country;
```


### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users 

```sql
SELECT count(shirt_size) as count_size , shirt_size FROM user_data GROUP BY shirt_size;
```

Count of users segregated by language and gender

```sql

```

Count all the females segregrated by shirt sizes

```sql
SELECT shirt_size, COUNT(*) as female_count FROM user_data WHERE gender="Female" GROUP BY shirt_size;
```


Count of all male users who wear the size `2XL`

```sql
SELECT COUNT(*) male_shirt_count FROM user_data WHERE gender="Male" AND shirt_size="XL";
```
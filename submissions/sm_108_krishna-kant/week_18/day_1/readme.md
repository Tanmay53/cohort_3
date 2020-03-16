### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
SELECT AVG(maths),class FROM students_marks WHERE GENDER = "Female" GROUP BY class;
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
SELECT AVG(maths) , AVG(science), AVG(english), section FROM students_marks WHERE gender = "Male" AND (maths > 85 AND english > 85 AND science > 85) GROUP BY section;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
select AVG(maths) , AVG(english),AVG(science) from (select *  FROM students_marks WHERE (maths BETWEEN 50 AND 75) AND (english BETWEEN 50 AND 75)) as total;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
select AVG(maths+science+english) as total, class from students_marks where class in ("I","II","III","IV","V") and (maths > 50 and science > 50 and english > 50) group by class;
```

Average subjects scores of all the female students from grade X section A who scored less that 25 in all subjects

```sql
select AVG(maths) , AVG(science), AVG(english) from students_marks where gender = "Female" and class="X" and section = "A" and (maths < 25 and science < 25 and english < 25) group by maths,english,science;
```

Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
select  AVG(maths), AVG(english),AVG(science)  from students_marks where section = "A" and (maths < 50 and science < 50 and english < 50);
```

Grade wise average total marks of Students from section C

```sql
select avg(maths+science+english),class from students_marks where section = "C" group by class;
```

Female Students count by grade and section

```sql
select count(class) , count(section),class,section from students_marks where gender = "Female" group by class , section;z`
```

Top to bottom averge total marks of all male students by grade and section

```sql
select AVG(maths+science+english) as avg_total ,class,section from students_marks where gender="Male" group by class,section order by avg_total desc;
```

### FSD.SQL.6.2

Table - `employee_salary`

Department wise average salaries

```sql
select avg(salary) , department  from employee_salary group by department;
```

Company wise average salaries

```sql
select avg(salary) , company  from employee_salary group by company;
```

Company and department wise count of people who make less than one million

```sql
select count(id) , department,company from employee_salary where salary < 1000000 group by company ,department;
```

Average salary of people who belong Engineering who make less than 100k

```sql
select avg(salary) from employee_salary where department ="Engineering" and salary < 100000;
```

Comapny wise average salary of Engineering people who earn more than 100k

```sql
select avg(salary),company from employee_salary where department ="Engineering" and salary > 100000 group by company;
```

Department wise total salary of women

```sql
select SUM(salary) , department from employee_salary where gender = "Female" group by department;
```

Company wise average salary of men in Human Resources

```sql
select AVG(salary),company from employee_salary where gender = "Male" and department = "Human Resources" group by company;
```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make

```sql
select count(id) , car_make from cars_data group by car_make;
```

List of all the car colors whose count is more 50

```sql
select count(id) as count_color,car_color from cars_data group by car_color having count_color > 50;
```

Country wise average age of all cars

```sql
select round(avg(2020-purchase_year),2),country from cars_data group by country;
```

### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users

```sql
select count(id) , shirt_size from user_data group by shirt_size;
```

Count of users segregated by language and gender

```sql
select count(id) ,language,gender from user_data group by language,gender;
```

Count all the females segregrated by shirt sizes

```sql
select count(id) , shirt_size from user_data where gender = "Female" group by shirt_size;
```

Count of all male users who wear the size `2XL`

```sql
select count(id),shirt_size from user_data where gender ="Male" and shirt_size = "2XL" group by shirt_size;
```

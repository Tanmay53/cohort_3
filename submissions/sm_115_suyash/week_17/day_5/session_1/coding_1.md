### Week 17 Day 5 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_17/day_5/session_1`

### FSD.SQL.5.1

Table - `students_marks`

Average maths marks of all the female students

```sql
SELECT AVG(maths) as Average Maths FROM students_marks WHERE gender = "Female";
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english

```sql
SELECT AVG(maths) as Math_avg, AVG(science) as Sci_avg, AVG(english) as Eng_avg FROM students_marks WHERE gender = "Male" AND maths > 85 AND science > 85 AND english > 85;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
SELECT AVG(maths) as Maths_avg, AVG(science) as Sci_avg, AVG(english) as Eng_avg FROM students_marks WHERE english BETWEEN 50 AND 75 AND maths BETWEEN 50 AND 75;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
select avg(maths+science+english)/3 as Total_avg from students_marks where class in ("I","II","III","IV","V") and maths > 50 and science > 50 and english > 50;
```

Average subjects scores of all the female students from grade X section A who scored less that 25 in all subjects

```sql
select avg(maths+science+english)/3 as Total_avg from students_marks where class = "X" and section = "A" and gender = "Female" and maths < 25 and science < 25 and english < 25;
```

Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
select avg(maths+english+science)/3 from students_marks where section = "A" and maths < 50 and science < 50 and english < 50;
```

Average total marks of Students from section C whose more that 75 in all the subjects

```sql
select avg(maths+science+english)/3 from students_marks where section = "C" and maths > 75 and science > 75 and english > 75;
```

Students who will fall in page 1 if ordered by increasing order of total marks scored (Assume 10 results per page)

```sql
select (maths+science+english) as total_marks  from students_marks order by total_marks asc limit 10;
```

Students who will fall in page 6 if ordered by descreasing order of average marks scored (Assume 20 results per page)

```sql
select (maths+english+science)/3 as total_marks from students_marks order by total_marks desc limit 100,20;
```

Female Students who will fall in page 2 if ordered by increasing order of total marks scored (Assume 5 results per page)

```sql
select (maths+science+english) as total_marks from students_marks where gender = "Female" order by total_marks asc limit 5,5;
```

Male Students who will fall in page 4 if ordered by decreasing order of average marks (Assume 15 results per page)

```sql

```

### FSD.SQL.5.2

Table - `employee_salary`

Names of all the departments

```sql

select department from employee_salary;
```

Names of all the companies

```sql
select company from employee_salary;
```

Total salaries all of Women in Engineering who earn less than one million

```sql
select sum(salary) from employee_salary where gender = "Female" and department = "Engineering" and salary < 1000000;
```

Company and department where people make less than 80k

```sql
select company,department from employee_salary where salary < 80000;
```

Average salary of people who belong Accounting and Legal who make less than 100k

```sql
select avg(salary) from employee_salary where department in ("Legal", "Accounting") and salary < 100000;
```

Average salary top 10 earning Men

```sql
select salary from avg(employee_salary) where gender = "Male" order by salary desc limit 10;
```

Total salary of bottom 10 earning Women

```sql
select sum(salary) from employee_salary where gender = "Female" order by salary asc limit 10;
```

Average salary of Engineering people

```sql
select avg(salary) from employee_salary where department = "Engineering";
```

Average salary of the Women ranked 30 to 50 in terms of salary earned

```sql
select avg(salary) from (select * from employee_salary where gender = "Female" order by salary desc limit 30,20) as top_salary ;
```

Total Salary of Men ranked 50 to 100 in terms of salary earned

```sql
select avg(salary) from (select * from employee_salary where gender = "Male" order by salary desc limit 50,50) as top_men_salary;
```

Total salary of bottom 50 earning women in Engineering

```sql
select sum(salary) from (select * from employee_salary where gender = "Female" and department = "Engineering" order by salary asc limit 0,49) as min_female_salary;
```

Average salary of the top 50 earning men in Human Resources

```sql
select * from (select * from employee_salary where gender = "Male" and department = "Human Resources" order by salary desc limit 0,50) as avg_top_50_salary_human_res;
```

### FSD.SQL.5.3

Table - `cars_data`

Names of all the cars makers

```sql
select car_make from cars_data;
```

List of all the car colors

```sql
select car_color from cars_data;
```

Average age of all the Honda cars

```sql
select avg(purchase_year) from cars_data where car_make = "Honda";
```

### FSD.SQL.5.4

Table - `users_data`

List all the available shirt sizes

```sql
select shirt_size from user_data;
```

List all the country names

```sql

```

Count all the females whose name end with vowels

```sql
select name from user_data where (name like "%a" or name like "%e" or name like "%i" or name like "%o" or name like "%u") and gender = "Female";
```

List all the males whose name has a vowel as the 2nd character

```sql
select * from user_data where gender = "Male" and (name like "%a_" or name like "%e_" or name like "%i" or name like "%o" or name like "%u");
```

List all the users whose name starts and ends with the letter `a`

```sql
select * from user_data where name like "a%a" limit 10;
```

Count of all users who have the letter `z` in their name

```sql
select count(id) from user_data where name like "%z%";
```

Count of all male users who have the word `dev` in their names

```sql
select count(id) from user_data where gender = "Male" and name like "%dev%";
```

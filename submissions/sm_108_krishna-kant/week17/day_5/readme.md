### Week 17 Day 5 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_17/day_5/session_1`

### FSD.SQL.5.1

Table - `students_marks`

Average maths marks of all the female students

```sql
select avg(maths) from students_marks where gender = "Female";
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english

```sql
select avg(maths),avg(science), avg(english) from students_marks where gender= "Male" and (maths>85 and science > 85 and english > 85);
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
select avg(maths),avg(science), avg(english) from students_marks where (english between 50 and 75) and (maths between 50 and 75) ;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
select name, (maths+science+english)/3 as total_average from students_marks where class in ("I","II","III","IV","V") and (maths > 50 and science > 50 and english > 50);
```

Average subjects scores of all the female students from grade X section A who scored less that 25 in all subjects

```sql
select name , (maths+science+english)/3 as total_average from students_marks where (gender="Female" and class="X" and section="A") and (maths < 25 and science < 25 and english < 25);
```

Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
select name ,(maths+science+english)/3 as average_marks from students_marks where section ="A" and (maths < 50 and science < 50 and english < 50);
```

Average total marks of Students from section C whose more that 75 in all the subjects

```sql
select name, (maths+science+english)/3 as average_marks from students_marks where section ="C" and (maths > 75 and science > 75 and english > 75);
```

Students who will fall in page 1 if ordered by increasing order of total marks scored (Assume 10 results per page)

```sql
select name , (maths+science+english) as total from students_marks order by total limit 10;
```

Students who will fall in page 6 if ordered by descreasing order of average marks scored (Assume 20 results per page)

```sql
select name , (maths+science+english)/3 as average from students_marks order by average desc limit 100,20;
```

Female Students who will fall in page 2 if ordered by increasing order of total marks scored (Assume 5 results per page)

```sql
select name, (science+ maths +english) as total from students_marks where gender = "Female" order by total limit 5,5;
```

Male Students who will fall in page 4 if ordered by decreasing order of average marks (Assume 15 results per page)

```sql
select name, (science+ maths +english)/3 as average from students_marks where gender = "Male" order by average desc limit 45,15;
```

### FSD.SQL.5.2

Table - `employee_salary`

Names of all the departments

```sql
select distinct(department) from employee_salary;
```

Names of all the companies

```sql
select distinct(company) from employee_salary;
```

Total salaries all of Women in Engineering who earn less than one million

```sql
select sum(salary) as total_salary from employee_salary where gender = "Female" and department="Engineering" and salary < 1000000;
```

Company and department where people make less than 80k

```sql
select company , department from employee_salary where salary < 80000;
```

Average salary of people who belong Accounting and Legal who make less than 100k

```sql
select avg(salary) as avg_salary from employee_salary where department in ("Legal","Accounting") and salary < 100000;
```

Average salary top 10 earning Men

```sql
 select avg(top_ten) as top_ten_avg from (select salary as top_ten from employee_salary where gender="Male" order by salary desc limit 10) as top_salary;
```

Total salary of bottom 10 earning Women

```sql
select sum(bottom) from (select salary as bottom from employee_salary where gender = "Female" order by salary limit 10) as bottom_ten;
```

Average salary of Engineering people

```sql

```

Average salary or the Women ranked 30 to 50 in terms of salary earned

```sql

```

Total Salary of Men ranked 50 to 100 in terms of salary earned

```sql

```

Total salary of bottom 50 earning women in Engineering

```sql

```

Average salary of the top 50 earning men in Human Resources

```sql

```

### FSD.SQL.5.3

Table - `cars_data`

Names of all the cars makers

```sql

```

List of all the car colors

```sql

```

Average age of all the Honda cars

```sql

```

### FSD.SQL.5.4

Table - `users_data`

List all the available shirt sizes

```sql

```

List all the country names

```sql

```

Count all the females whose name end with vowels

```sql

```

List all the males whose name has a vowel as the 2nd character

```sql

```

List all the users whose name starts and ends with the letter `a`

```sql

```

Count of all users who have the letter `z` in their name

```sql

```

Count of all male users who have the word `dev` in their names

```sql

```

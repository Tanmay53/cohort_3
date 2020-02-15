### Week 17 Day 5 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_17/day_5/session_1`

### FSD.SQL.5.1

Table - `students_marks`

Average maths marks of all the female students

```sql
select avg(maths) from students_marks where gender = 'Female';
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english

```sql
select avg(maths) as AvgMaths, avg(science) as AvgScience, avg(english) as AvgEnglish from students_marks where gender = 'Male' and maths > 85 and science > 85 and english > 85;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
select avg(maths) as AvgMaths, avg(english) as AvgEnglish from students_marks where maths between 50 and 75 and english between 50 and 75;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
select avg(maths + science + english) as TotalAverage from students_marks where class in ('I', 'II', 'III', 'IV', 'V') and english > 50 and maths > 50 and science > 50;
```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
select avg(maths) as AvgMaths, avg(science) as AvgScience, avg(english) as AvgEnglish from students_marks where gender = 'Female' and class = 'X' and section = 'A' and maths < 25 and english < 25 and science < 25;
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
select avg(maths) as AvgMaths, avg(science) as AvgScience, avg(english) as AvgEnglish from students_marks where section = 'A' and maths < 50 and science < 50 and english < 50;
```

Average total marks of Students from section C whose more that 75 in all the subjects

```sql
select avg(maths + science + english) as TotalAverage from students_marks where section = 'C' and maths > 75 and science > 75 and english > 75;
```

Students who will fall in page 1 if ordered by increasing order of total marks scored (Assume 10 results per page)

```sql
select * from students_marks order by (science + maths + english), id limit 10;
```

Students who will fall in page 6 if ordered by descreasing order of average marks scored (Assume 20 results per page)

```sql
select * from students_marks order by (science + maths + english)/3 desc, id limit 100, 20;
```


Female Students who will fall in page 2 if ordered by increasing order of total marks scored (Assume 5 results per page)

```sql
select * from students_marks where gender = 'Female' order by (science + maths + english), id limit 5, 5;
```

Male Students who will fall in page 4 if ordered by decreasing order of average marks (Assume 15 results per page)

```sql
select * from students_marks where gender = 'Male' order by (science + maths + english)/3 desc, id limit 45, 15;
```

### FSD.SQL.5.2

Table - `employee_salary`

Names of all the departments

```sql
select distinct department from employee_salary;
```

Names of all the companies

```sql
select distinct company from employee_salary;
```

Total salaries all of Women in Engineering who earn less than one million

```sql
select sum(salary) from employee_salary where gender = 'Female' and department = 'Engineering' and salary < 1000000;
```

Company and department where people make less than 80k

```sql
select company, department from employee_salary where salary < 80000;
```

Average salary of people who belong Accounting and Legal who make less than 100k 

```sql
select avg(salary) from employee_salary where department in ('Accounting', 'Legal') and salary < 100000;
```

Average salary top 10 earning Men

```sql
select avg(salary) from (select * from employee_salary where gender = 'Male' order by salary desc limit 10) as topMale;
```

Total salary of bottom 10 earning Women

```sql
select sum(salary) from (select * from employee_salary where gender = 'Female' order by salary limit 10) as bottomFemale;
```

Average salary of  Engineering people

```sql
select avg(salary) from employee_salary where department = 'Engineering';
```

Average salary or the Women ranked 30 to 50 in terms of salary earned

```sql
select avg(salary) from (select * from employee_salary where gender = 'Female' order by salary desc limit 29, 21) as rank;
```

Total Salary of Men ranked 50 to 100 in terms of salary earned

```sql
select sum(salary) from (select * from employee_salary where gender = 'Male' order by salary limit 49, 51) as maleRanking;
```

Total salary of bottom 50 earning women in Engineering

```sql
select sum(salary) from (select * from employee_salary where gender = 'Female' and department = 'Engineering' order by salary limit 50) as bottom50;
```

Average salary of the top 50 earning men in Human Resources

```sql
select avg(salary) from (select * from employee_salary where gender = 'Male' and department = 'Human Resources' order by salary desc limit 50) as top50Male;
```

### FSD.SQL.5.3

Table - `cars_data`

Names of all the cars makers
```sql
select distinct car_make from cars_data;
```

List of all the car colors
```sql
select distinct car_color from cars_data;
```

Average age of all the Honda cars 
```sql
select avg(2020 - purchase_year) as averageAge from cars_data where car_make = 'Honda';
```


### FSD.SQL.5.4

Table - `users_data`

List all the available shirt sizes

```sql
select distinct shirt_size from user_data;
```

List all the country names 

```sql
select distinct language from user_data;
```

Count all the females whose name end with vowels

```sql
select * from user_data where gender = 'Female' and (name like '%a' or name like '%e' or name like '%i' or name like '%o' or name like '%u');
```

List all the males whose name has a vowel as the 2nd character

```sql
select * from user_data where gender = 'Male' and (name like '_a%' or name like '_e%' or name like '_i%' or name like '_o%' or name like '_u%');
```

List all the users whose name starts and ends with the letter `a`

```sql
select * from user_data where name like 'a%a';
```

Count of all users who have the letter `z` in their name

```sql
select count(*) from user_data where name like '%z%';
```

Count of all male users who have the word `dev` in their names

```sql
select count(*) from user_data where gender = 'Male' and name like '%dev%';
```
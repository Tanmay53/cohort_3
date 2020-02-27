### Week 17 Day 5 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_17/day_5/session_1`

### FSD.SQL.5.1

Table - `students_marks`

Average maths marks of all the female students

```sql
select avg(maths) from students_marks where gender="female";
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english

```sql
 select avg(maths),avg(english),avg(science) from students_marks  where gender="male" and maths>85 and english >85 and science>85;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
select avg(maths),avg(english) from students_marks where maths between 50 and 75 and english between 50 and 75;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
select avg(maths),avg(english),avg(science) from students_marks where class in ("I","II","III","IV","V") and maths>50 and english>50 and science>50;
```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
 select avg(maths),avg(science),avg(english) from students_marks where gender="female" and class="x" and section="a" and maths<25 and english<25 and science<25;
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
select avg(maths),avg(english),avg(science) from students_marks where section="a" and maths<50 and english<50 and science<50;
```

Average total marks of Students from section C whose more that 75 in all the subjects

```sql
 select avg(maths+english+science) from students_marks where section="c" and maths>75 and english>75 and science>75;
```

Students who will fall in page 1 if ordered by increasing order of total marks scored (Assume 10 results per page)

```sql
 select * from students_marks order by (maths+english+science) asc limit 10;
```

Students who will fall in page 6 if ordered by descreasing order of average marks scored (Assume 20 results per page)

```sql
 select * from students_marks order by (maths+english+science)/3 desc limit 100 ,20;
```


Female Students who will fall in page 2 if ordered by increasing order of total marks scored (Assume 5 results per page)

```sql
 select * from students_marks where gender="female" order by (maths+english+science) asc limit 5,5;
```

Male Students who will fall in page 4 if ordered by decreasing order of average marks (Assume 15 results per page)

```sql
 select * from students_marks where gender="male" order by (maths+english+science)/3 desc limit 45,15;
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
select sum(salary) from employee_salary where department="engineering" and salary <1000000 and gender="female";
```

Company and department where people make less than 80k

```sql
select distinct company,department from employee_salary where salary <80000;
```

Average salary of people who belong Accounting and Legal who make less than 100k 

```sql
select avg(salary) from employee_salary where department in ("accounting","legal") and salary<100000;
```

Average salary top 10 earning Men

```sql
select avg(salary) from (select * from employee_salary where gender="male" order by salary desc limit 10) as Temp_table;
```

Total salary of bottom 10 earning Women

```sql
select avg(salary) from(select * from employee_salary where gender="female" order by salary desc limit 10) as temp_table;
```

Average salary of  Engineering people

```sql
 select avg(salary) from employee_salary where department="engineering";
```

Average salary of the Women ranked 30 to 50 in terms of salary earned

```sql
select avg(salary) from (select * from employee_salary where gender="female" limit 29,21)as temp_table;
```

Total Salary of Men ranked 50 to 100 in terms of salary earned

```sql
select sum(salary) from (select * from employee_salary where gender="male"order by salary desc  limit 49,50 )as temp_table;
```

Total salary of bottom 50 earning women in Engineering

```sql
 select avg(salary) from (select * from employee_salary where gender="female" and department="engineering"  order by salary asc limit 50)as temp_table;
```

Average salary of the top 50 earning men in Human Resources

```sql
select avg (salary) from (select * from employee_salary where gender="male" and department="human resources" order by salary desc limit 50)as temp_table;
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

```


### FSD.SQL.5.4

Table - `users_data`

List all the available shirt sizes

```sql
select distinct shirt_size from user_data;
```

List all the country names 

```sql

```

Count all the females whose name end with vowels

```sql
select * from user_data where gender="female" and name like "%i" or name like "%a" or name like "%e" or name like "%o" or name like "%u";
```

List all the males whose name has a vowel as the 2nd character

```sql
 select * from user_data where gender="male" and name like "_a%" or name like "_e%" or name like "_i%" or name like "_o%" or name like "_u%";
```

List all the users whose name starts and ends with the letter `a`

```sql
 select * from user_data where name like "a%" and name like "%a";
```

Count of all users who have the letter `z` in their name

```sql
select * from user_data where name like "%z%";
```

Count of all male users who have the word `dev` in their names

```sql
select * from user_data where gender="male" and  name like "%dev%";
```
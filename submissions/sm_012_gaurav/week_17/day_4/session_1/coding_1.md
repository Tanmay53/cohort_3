### Week 17 Day 4 Session 1

**The given test database has two tables write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_17/day_4/session_1`

### FSD.SQL.4.1

Table - `students_marks`

Count of all the female students

```sql
select count(id) from students_marks where gender =  'Female';
```

Count of all male students who scored more that 85 in maths, science and english

```sql
select count(id) from students_marks where gender = 'Male' and maths > 85 and science > 85 and english > 85;
```

Count of all students who scored between 50 and 75 marks in maths and english

```sql
select count(id) from students_marks where maths between 50 and 75 and english between 50 and 75;
```

Count of students from class I to class V who score more that 50 in all subjects

```sql
select count(id) from students_marks where (class = 'I' or class = 'II' or class = 'III' or class = 'IV' or class = 'V') and (maths > 50 and science > 50 and english > 50);
```

Find all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
select * from students_marks where gender = 'Female' and class = 'X' and section = 'A' and maths < 25 and english < 25 and science < 25;
```

Top 3 students in grade V based on maths score

```sql
select * from students_marks where class = 'V' order by maths desc limit 3;
```

Bottom 5 students in grade I based on science score

```sql
select * from students_marks where class = 'I' order by science limit 5;
```

Students from section A who scored less than 50 in all the subjects

```sql
select * from students_marks where section = 'A' and maths < 50 and science < 50 and english < 50;
```

Students from section C who scored more that 75 in all the subjects

```sql
select * from students_marks where section = 'C' and maths > 75 and english > 75 and science > 75;
```

Students who will fall in page 3 if ordered by increasing order of maths scores (Assume 10 results per page)

```sql
select * from students_marks order by maths,id limit 20, 10;
```

Students who will fall in page 5 if ordered by descreasing order of science scores (Assume 20 results per page)

```sql
select * from students_marks order by science desc,id limit 80, 20;
```


Female Students who will fall in page 4 if ordered by increasing order of science scores and maths scores (Assume 5 results per page)

```sql
select * from students_marks where gender = 'Female' order by science, maths, id limit 15, 5;
```

Male Students who will fall in page 3 if ordered by decreasing order of science, maths and english scores (Assume 15 results per page)

```sql
select * from students_marks where gender = 'Male' order by science desc, maths desc, english desc, id limit 30, 15;
```

### FSD.SQL.4.2

Table - `employee_salary`

Count of Men in Engineering

```sql
select count(id) from employee_salary where gender = 'Male' and department = 'Engineering';
```

Count of Women in Engineering who earn less than one million

```sql
select count(id) from employee_salary where gender = 'Female' and salary < 1000000;
```

Count of people make less than 80k

```sql
select count(id) from employee_salary where salary < 80000;
```

People who belong Accounting and Legal who make less than 100k 

```sql
select * from employee_salary where (department = 'Accounting' or department = 'Legal') and salary < 100000;
```

Top 10 earning Men

```sql
select * from employee_salary where gender = 'Male' order by salary desc limit 10;
```

Bottom 10 earning Women

```sql
select * from employee_salary where gender = 'Female' order by salary limit 10;
```

Top 5 earning Engineering people

```sql
select * from employee_salary where department = 'Engineering' order by salary desc limit 5;
```

Bottom 5 earning Legal people

```sql
select * from employee_salary where department = 'Legal' order by salary limit 5;
```

Women ranked 30 to 50 in terms of salary earned

```sql
select * from employee_salary where gender = 'Female' order by salary desc limit 29, 21;
```

Men ranked 50 to 100 in terms of salary earned

```sql
select * from employee_salary where gender = 'Male' order by salary desc limit 49, 51;
```

Bottom 50 earning women in Engineering

```sql
select * from employee_salary where gender = 'Female' and department = 'Engineering' order by salary limit 50;
```

Top 50 earning men in Human Resources

```sql
select * from employee_salary where gender = 'Male' and department = 'Human Resources' order by salary desc limit 50;
```
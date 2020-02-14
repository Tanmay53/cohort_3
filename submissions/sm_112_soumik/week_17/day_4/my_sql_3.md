### Week 17 Day 4 Session 1

**The given test database has two tables write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_17/day_4/session_1`

### FSD.SQL.4.1

Table - `students_marks`

Count of all the female students

```sql
select count(id) from students_marks where gender = "Female" ;


```

Count of all male students who scored more that 85 in maths, science and english

```sql
select count(id) from students_marks where gender="Male" AND maths > 85 AND science > 85 AND english > 85 ;


```

Count of all students who scored between 50 and 75 marks in maths and english

```sql
select count(id) from students_marks WHERE maths BETWEEN 50 AND 75 AND english BETWEEN 50 AND 75 ;


```

Count of students from class I to class V who score more that 50 in all subjects

```sql
select count(id) from students_marks WHERE class IN ("I","II","III","IV","V") AND maths > 50 AND science > 50 AND english > 50 ;


```

Find all the female students from grade X section A who scored less that 25 in all subjects

```sql
select count(id) from students_marks where gender = "Female" AND class ="X" AND maths < 25 AND english < 25 AND sci
ence < 25 ;


```

Top 3 students in grade V based on maths score

```sql
select *  from students_marks where class="V" ORDER BY maths DESC LIMIT 3;


```

Bottom 5 students in grade I based on science score

```sql
select *  from students_marks where class="I" ORDER BY science ASC LIMIT 5;


```

Students from section A who scored less than 50 in all the subjects

```sql
select *  from students_marks where section="A" AND maths <50 AND science < 50 AND english <50 ;

```

Students from section C who scored more that 75 in all the subjects

```sql
select *  from students_marks where section="C" AND maths > 75 AND science > 75 AND english > 75 ;


```

Students who will fall in page 3 if ordered by increasing order of maths scores (Assume 10 results per page)

```sql
select *  from students_marks ORDER BY maths ASC LIMIT 20,10;


```

Students who will fall in page 5 if ordered by descreasing order of science scores (Assume 20 results per page)

```sql
select *  from students_marks ORDER BY science DESC LIMIT 80,20;


```

Female Students who will fall in page 4 if ordered by increasing order of science scores and maths scores (Assume 5 results per page)

```sql
select *  from students_marks ORDER BY science ASC,maths ASC LIMIT 15,5 ;

```

Male Students who will fall in page 3 if ordered by decreasing order of science, maths and english scores (Assume 15 results per page)

```sql
select *  from students_marks ORDER BY science DESC,maths DESC ,english DESC LIMIT 30,15 ;


```

### FSD.SQL.4.2

Table - `employee_salary`

Count of Men in Engineering

```sql
select COUNT(id) FROM employee_salary WHERE gender = "Male";

```

Count of Women in Engineering who earn less than one million

```sql
select COUNT(id) FROM employee_salary WHERE gender = "Female" AND Salary < 1000000;


```

Count of people make less than 80k

```sql
select COUNT(id) FROM employee_salary WHERE  Salary < 80000 ;


```

People who belong Accounting and Legal who make less than 100k

```sql
select COUNT(id) FROM employee_salary WHERE  Salary < 80000 ;


```

Top 10 earning Men

```sql
select *  FROM employee_salary WHERE gender="male" ORDER BY salary DESC LIMIT 10 ;


```

Bottom 10 earning Women

```sql
select *  FROM employee_salary WHERE gender="Female" ORDER BY salary ASC LIMIT 10 ;


```

Top 5 earning Engineering people

```sql
select *  FROM employee_salary WHERE department ="Engineering"  ORDER BY salary DESC LIMIT 5 ;


```

Bottom 5 earning Legal people

```sql
select *  FROM employee_salary WHERE department ="Legal"  ORDER BY salary ASC LIMIT 5 ;

```

Women ranked 30 to 50 in terms of salary earned

```sql
select *  FROM employee_salary WHERE gender="Female" LIMIT 29,21


```

Men ranked 50 to 100 in terms of salary earned

```sql
select *  FROM employee_salary LIMIT 49,51


```

Bottom 50 earning women in Engineering

```sql
 select *  FROM employee_salary WHERE gender="female" AND department="Engineering" ORDER BY salary ASC LIMIT 50 ;

```

Top 50 earning men in Human Resources

```sql
 select *  FROM employee_salary WHERE gender="Male" AND department="Human Resources" ORDER BY salary DESC LIMIT 50 ;

```

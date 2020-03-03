### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
select class, avg(maths) as avg_maths from students_marks where gender = 'Female' group by class;
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
select section, avg(maths) as avg_maths, avg(science) as avg_science, avg(english) as avg_english from students_marks where maths > 85 and science > 85 and english > 85 group by section;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
select avg(maths) as avg_maths, avg(science) as avg_science, avg(english) as avg_english from students_marks where maths between 50 and 75 and english between 50 and 75;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
select avg(science + maths + english) as avg_total from students_marks where class in ('I', 'II', 'III', 'IV', 'V') and maths > 50 and science > 50 and english > 50;
```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
select avg(maths) as avg_maths, avg(science) as avg_science, avg(english) as avg_english from students_marks where class = 'X' and section = 'A' and maths < 25 and science < 25 and english < 25;
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
select avg(maths) as avg_maths, avg(science) as avg_science, avg(english) as avg_english from students_marks where section = 'A' and maths < 50 and english < 50 and science < 50;
```

Grade wise average total marks of Students from section C

```sql
select class, avg(science + maths + english) from students_marks where section = 'C' group by class;
```


Female Students count by grade and section

```sql
select class, section, count(*) from students_marks where gender = 'Female' group by class, section;
```

Top to bottom averge total marks of all male students by grade and section

```sql
select class, section, avg(science + maths + english) as avg_total from students_marks where gender = 'Male' group by class, section order by avg_total desc;
```

### FSD.SQL.6.2

Table - `employee_salary`

Department wise average salaries

```sql
select department, avg(salary) as avg_salary from employee_salary group by department;
```

Company wise average salaries

```sql
select company, avg(salary) as avg_salary from employee_salary group by company;
```

Company and department wise count of people who make less than one million

```sql
select company, department, count(*) from employee_salary where salary < 1000000 group by company, department;
```

Average salary of people who belong Engineering  who make less than 100k 

```sql
select avg(salary) from employee_salary where department = 'Engineering' and salary < 100000;
```

Comapny wise average salary of  Engineering people who earn more than 100k

```sql
select company, avg(salary) as avg_salary from employee_salary where department = 'Engineering' and salary > 100000 group by company;
```

Department wise total salary of women 

```sql
select department, sum(salary) as total_salary from employee_salary where gender = 'Female' group by department;
```

Company wise average salary of men in Human Resources

```sql
select company, avg(salary) as avg_salary from employee_salary where gender = 'Men' and department = 'Human Resources' group by company;
```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make
```sql
select car_make, count(*) from cars_data group by car_make;
```

List of all the car colors whose count is more 50
```sql
select car_color from (select car_color, count(*) as cnt from cars_data group by car_color) where cnt > 50;
```

Country wise average age of all cars
```sql
select country, avg(2020 - purchase_year) as avg_age from cars_data group by country;
```


### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users 

```sql
select shirt_size, count(*) as cnt_users from user_data group by shirt_size;
```

Count of users segregated by language and gender

```sql
select language, gender, count(*) as cnt_users from user_data group by language, gender;
```

Count all the females segregrated by shirt sizes

```sql
select shirt_size, count(*) as cnt_female from user_data where gender = 'Female' group by shirt_size;
```


Count of all male users who wear the size `2XL`

```sql
select count(*) from user_data where shirt_size = '2XL' and gender = 'Male';
```
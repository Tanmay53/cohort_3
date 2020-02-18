### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
select avg(maths),class,gender from students_marks where gender = "Female" group by class;
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
select avg(maths), avg(science), avg(english),section from students_marks where gender = "Male" and maths > 85 and science > 85 and english > 85 group by section;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
select avg(maths), avg(science), avg(english) from students_marks where maths between 50 and 75 and english between 50 and 75;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
select avg(maths+science+english) as avg_class,class from (select * from students_marks where maths > 50 and science > 50 and english > 50 and class in ("I", "II", "III", "IV", "V")) as avg_all_class group by class;
```

Average subjects scores of all the female students from grade X section A who scored less that 25 in all subjects

```sql
select avg(maths+science+english) from students_marks where gender = "Female" and class = "X" and (maths < 25 and science < 25 and english);
```

Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
select avg(maths), avg(english), avg(science) from students_marks where section = "A" and (maths < 50 and science < 50 and english < 50);
```

Grade wise average total marks of Students from section C

```sql
select avg(maths+science+english),class from (select * from students_marks where section = "C") as class_avg group by class;
```

Female Students count by grade and section

```sql
select count(*),class,section from (select * from students_marks where gender = "Female") as count_females group by class,section;
```

Top to bottom averge total marks of all male students by grade and section

```sql
select avg(maths+science+english) as sum_all_sub,class,section from (select * from students_marks where gender = "Male") as all_males group by class, section order by sum_all_sub desc;
```

### FSD.SQL.6.2

Table - `employee_salary`

Department wise average salaries

```sql
 select avg(salary),department from employee_salary group by department;
```

Company wise average salaries

```sql
select avg(salary), company from employee_salary group by company;
```

Company and department wise count of people who make less than one million

```sql
select count(*),company,department from (select * from employee_salary where salary > 1000000) as count_by_comp_dep group by company,department;
```

Average salary of people who belong Engineering who make less than 100k

```sql
select avg(salary) from (select * from employee_salary where department = "Engineering" and salary > 100000) as avg_salary_100k;
```

Comapny wise average salary of Engineering people who earn more than 100k

```sql
select avg(salary), company from (select * from employee_salary where department = "Engineering" and salary > 100000) as avg_salary_eng_100k group by company;
```

Department wise total salary of women

```sql
select sum(salary),department from (select * from employee_salary where gender = "Female") as women_salary group by department;
```

Company wise average salary of men in Human Resources

```sql
 select avg(salary),company from (select * from employee_salary where gender = "Male" and department = "Human Resources") as avg_human group by company;
```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make

```sql
 select count(*),car_make from cars_data group by car_make;
```

List of all the car colors whose count is more 50

```sql
select count(*) as color_cnt from cars_data group by car_color having color_cnt > 50;
```

Country wise average age of all cars

```sql
select avg(2020 - purchase_year),country from cars_data group by country;
```

### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users

```sql
 select count(name), shirt_size from user_data group by shirt_size;
```

Count of users segregated by language and gender

```sql
select count(*),language,gender from user_data group by language, gender;
```

Count all the females segregrated by shirt sizes

```sql
select count(*),shirt_size,gender from user_data where gender = "Female" group by shirt_size;
```

Count of all male users who wear the size `2XL`

```sql
 select count(*) from user_data where shirt_size = "2XL";
```

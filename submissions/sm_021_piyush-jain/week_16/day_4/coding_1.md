## Week 16 Day 4

Submission folder `submissions/<your_folder>/week_16/day_4/session_1`

https://github.com/masai-school/full-stack-dev-1910/blob/master/week_16/day_3/coding_1.md

- Write the queries for the schema designed in the previous session
- Fill the queries in the space provide, one query per line

**NOTE: Test the queries in your machine before submission**

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
create database session1
```

**Create Tables**

```sql
create table continent(cont_id char(6),name varchar(20));
```

**Create Data (Atleast 5 rows in a table)**

```sql
insert into countries (count_id,name)values("count_1","INDIA");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
select * from continent where cont_id ="cont_1";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
update countries set name ="USA" where name="PAK";
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
Delete from countries where count_id="count_2";
```

**Empty Tables**

```sql
TRUNCATE table cities;
```

**Delete Tables**

```sql
drop table cities
```

**Delete Database**

```sql
drop database session1
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
create database session2
```

**Create Tables**

```sql
create table users(user_id char(6),person varchar(20));
```

**Create Data (Atleast 5 rows in a table)**

```sql
insert into users(user_id,person)values("user_1","piyush");
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
select * from checklists where check_id="check_4";
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
update tasks set task="crud" where task_id="task_1"
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
delete from tasks where task="crud"
```

**Empty Tables**

```sql
truncate table checklists
```

**Delete Tables**

```sql
drop table tasks
```

**Delete Database**

```sql
drop database session2
```

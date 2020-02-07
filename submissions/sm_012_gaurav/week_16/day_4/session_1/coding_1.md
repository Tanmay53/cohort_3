## Week 16 Day 4

### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```
create database continent_session;
```

**Create Tables**

```
create table continent(id int, continent_name varchar(30));
create table country(id int, country_name varchar(50), continent_id int);
create table city(id int, city_name varchar(100), country_id int);
```

**Create Data (Atleast 5 rows in a table)**

```
insert into continent (id, continent_name) values (1, 'Asia');
insert into continent (id, continent_name) values (2, 'Europe');
insert into continent (id, continent_name) values (3, 'Antarctica');
insert into continent (id, continent_name) values (4, 'Australia');
insert into continent (id, continent_name) values (5, 'Africa');
insert into continent (id, continent_name) values (6, 'North America');
insert into continent (id, continent_name) values (7, 'South America');

insert into country(id, country_name, continent_id) values (1, 'India', 1);
insert into country(id, country_name, continent_id) values (2, 'Germany', 2);
insert into country(id, country_name, continent_id) values (3, 'Australia', 4);
insert into country(id, country_name, continent_id) values (4, 'South Africa', 5);
insert into country(id, country_name, continent_id) values (5, 'Canada', 6);
insert into country(id, country_name, continent_id) values (6, 'Brazil', 7);

insert into city(id, city_name, country_id) values (1, 'Bengaluru', 1);
insert into city(id, city_name, country_id) values (2, 'Jaipur', 1);
insert into city(id, city_name, country_id) values (3, 'Vacha', 2);
insert into city(id, city_name, country_id) values (4, 'Sydney', 3);
insert into city(id, city_name, country_id) values (5, 'Queenstown', 4);
insert into city(id, city_name, country_id) values (6, 'Toronto', 5);
insert into city(id, city_name, country_id) values (7, 'Rio De Janeiro', 6);
```

**Read Data (From all tables using atleast 2 different where condition)**

```
select * from continent where continent_name = 'Asia';
select * from continent where id = 5;

select * from country where continent_id = 7;
select * from country where country_name = 'Canada';

select * from city where country_id = 1;
select * from city where city_name = 'Sydney';
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```
update continent set continent_name = 'Africa' where id = 3;
update continent set id = 12 where continent_name = 'North America';

update country set country_name = 'USA' where country_name = 'Canada';
update country set id = 16 where country_name = 'Germany';

update city set city_name = 'Mumbai' where city_name = 'Jaipur';
update city set id = 12 where country_id = '6';
```

**Delete Data (From all tables using atleast 2 different where condition)**

```
delete from continent where continent_name = 'Europe';
delete from continent where id = 12;

delete from country where id = 16;
delete from country where continent_id = 4;

delete from city where country_id = 1;
delete from city where city_name = 'Toronto';
```

**Empty Tables**

```
truncate table continent;
truncate table country;
truncate table city;
```

**Delete Tables**

```
drop table continent;
drop table country;
drop table city;
```

**Delete Database**

```
drop database continent_session;
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```
create database checklist_session;
```

**Create Tables**

```
create table users(id int, first_name varchar(50), last_name varchar(50));
create table checklist(id int, checklist_name varchar(50), user_id int);
create table task(id int, task_name varchar(50), checklist_id int);
```

**Create Data (Atleast 5 rows in a table)**

```
insert into users(id, first_name, last_name) values (1, 'Mark', 'Smith');
insert into users(id, first_name, last_name) values (2, 'Johny', 'Bravo');
insert into users(id, first_name, last_name) values (3, 'Alucard', 'Donovan');
insert into users(id, first_name, last_name) values (4, 'Patrick', 'Bezos');
insert into users(id, first_name, last_name) values (5, 'Elon', 'Musk');

insert into checklist(id, checklist_name, user_id) values (1, 'House', 1);
insert into checklist(id, checklist_name, user_id) values (2, 'Packing', 1);
insert into checklist(id, checklist_name, user_id) values (3, 'Camping', 2);
insert into checklist(id, checklist_name, user_id) values (4, 'Moving', 3);
insert into checklist(id, checklist_name, user_id) values (5, 'Car', 4);
insert into checklist(id, checklist_name, user_id) values (6, 'Spaceship', 5);

insert into task (id, task_name, checklist_id) values (1, 'Clean', 1);
insert into task (id, task_name, checklist_id) values (2, 'Umbrella', 2);
insert into task (id, task_name, checklist_id) values (3, 'Truck', 3);
insert into task (id, task_name, checklist_id) values (4, 'Tyre', 4);
insert into task (id, task_name, checklist_id) values (5, 'Brakes', 4);
insert into task (id, task_name, checklist_id) values (6, 'Fuel', 5);
insert into task (id, task_name, checklist_id) values (7, 'Controls', 5);
```

**Read Data (From all tables using atleast 2 different where condition)**

```
select * from users where first_name = 'Elon';
select * from users where last_name = 'Smith';

select * from checklist where checklist_name = 'Spaceship';
select * from checklist where user_id = 1;

select * from task where id = 3;
select * from task where checklist_id = 5;
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```
update users set last_name = 'Elric' where first_name = 'Elon';
update users set first_name = 'Edward' where last_name = 'Bravo';

update checklist set user_id = 1 where checklist_name = 'Camping';
update checklist set checklist_name = 'Backpack' where user_id = 3;

update task set task_name = 'Deo' where checklist_id = 3;
update task set id = 12 where task_name = 'Tyre';
```

**Delete Data (From all tables using atleast 2 different where condition)**

```
delete from users where last_name = 'Bezos';
delete from users where first_name = 'Mark';

delete from checklist where user_id = 1;
delete from checklist where checklist_name = 'Backpack';

delete from task where id = 12;
delete from task where checklist_id = 5;
```

**Empty Tables**

```
truncate table users;
truncate table checklist;
truncate table task;
```

**Delete Tables**

```
drop table users;
drop table checklist;
drop table task;
```

**Delete Database**

```
drop database checklist_session;
```

### Week 18 Day 2

**SQL Tables & Queries**

Submission folder `submissions/<your_folder>/week_18/day_2/session_1`

Blog Application

```
A user can create mulitple blogs each can be from a different category, a user can also write as many comments he wants to on a certain blog
```

#### FSD.SQL.8.1

Tables Creation Queries

```mysql
create table catagories(
    -> id smallint not null auto_increment,
    -> catagory varchar(255) not null,
    -> primary key(id)
    -> );

create table user_name(
    -> id smallint not null auto_increment,
    -> name varchar(255) not null,
    -> primary key(id)
    -> );
create table blog_name ( id smallint auto_increment not null , blog_name  varchar(255) not null ,primary key(id));

create table users( id smallint not null auto_increment , created_at timestamp ,user_name smallint ,catagory smallint not null,blog smallint not null ,comments varchar(255),primary key(id) ,foreign key(user_name) references user_name(id) , foreign key(blog) references blog_name(id),
    -> foreign key(catagory) references catagories(id));
```

#### FSD.SQL.8.2

User Creation Queries

```mysql

insert into user_name (name) values ("Soumik"),("Acharjee") ;
insert into user_name (name) values ("Soumik"),("Acharjee");
insert into users (user_name,catagory,blog,comments,created_at) values (1,1,1,"Well Done",NOW());


```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
insert into blog_name (blog_name) values ("My First BLog on React") ;

```

#### FSD.SQL.8.4

Comment Creation Queries

```
insert into comments (comments) values ("WELL Writtens")  where user_name = 1;

```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
select * from blogs where user =1

```

#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
select * from blogs where id = 1

```

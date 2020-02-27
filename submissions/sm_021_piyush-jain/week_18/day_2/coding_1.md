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

```

#### FSD.SQL.8.2

User Creation Queries

```mysql
 create table user(id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,name varchar(20) NOT NULL,email varchar(30) NOT NULL,DOB DATE,DEPARTMENT VARCHAR(20))AUTO INCREMENT=1;
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
create table blog(id integer NOT NULL AUTO_INCREMENT PRIMARY KEY,NAME VARCHAR(20), date DATE, WEB_NAME VARCHAR(20))AUTO_INCREMENT=1;
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
 create table comment (id integer not null AUTO_INCREMENT PRIMARY KEY,blog_id int,user_id int,category_id int,COMMENT_NAME VARCHAR(20) NOT NULL, COMMENT_PERSON VARCHAR(20) NOT NULL,FOREIGN KEY(blog_id)references blog(id),FOREIGN KEY(user_id) references blog(user_id),FOREIGN KEY(category_id) references blog(category_id))AUTO_INCREMENT=1;
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
select * from blog where id="1" and user_id=1;
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
select * from blog where category_id="1" ;
```
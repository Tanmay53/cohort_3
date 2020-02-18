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
create table users (
id int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR(255) ,
email VARCHAR(255),
gender ENUM("Male","Female","Others"),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
is_verified ENUM("TRUE","FALSE"),
password VARCHAR(255),
profile_img VARCHAR(255));

CREATE TABLE catagory (
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255));

CREATE TABLE blogs (
id INT(11) NOT NULL AUTO_INCREMENT,
title VARCHAR(255),
catagory INT(11) NOT NULL,
author_id INT(11) NOT NULL,
body TEXT,
comment_count INT(11),
like_count INT(11),
isPublished ENUM("TRUE","FALSE"),
draft ENUM("TRUE","FALSE"),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id),
FOREIGN KEY (catagory) REFERENCES catagory(id),
FOREIGN KEY (author_id) REFERENCES users(id));

create table comments (
id INT(11) NOT NULL AUTO_INCREMENT,
blog_id INT(11) NOT NULL,
author_id INT(11) UNSIGNED NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
comment_body TEXT,
PRIMARY KEY (id) ,
FOREIGN KEY (blog_id) REFERENCES blogs(id),
FOREIGN KEY (author_id) REFERENCES users(id));

```

#### FSD.SQL.8.2

User Creation Queries

```mysql
insert into users (id,name,email,gender,is_verified,password,profile_img) values(1,"Krishna Kant Sharma","rohansharma.8574@gmail.com","Male","False","SAHjhsjhajh1h2j12hj1h212","/user/images/id1.png");
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
insert into blogs (id,title,catagory,body,comment_count,like_count,isPublished,draft,author_id) values(1,"Javascript Pattern: Module pattern", 2,"Blog Body 1", 0,0,"FALSE","TRUE",1);
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
insert into comments (id,blog_id,author_id,comment_body) values(1,1,1,"This is a comment");
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
Select * from blogs where author_id = <users:id>
```

#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
Select * from blogs where catagory = <catagory:id>
```

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
CREATE TABLE students(
    id int,
    name varchar(255),
    class varchar(255),
    section char(6)
);
```

#### FSD.SQL.8.2

User Creation Queries

```mysql
CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY(id)
    );
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
CREATE TABLE blogs(
    id int NOT NULL AUTO_INCREMENT, 
    blog_name varchar(255) NOT NULL, 
    user_id int, category varchar(255), 
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES users(id) 
    );
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
CREATE TABLE comments( 
    id int NOT NULL AUTO_INCREMENT, 
    blog_id int, 
    comment varchar(255) NOT NULL,
    PRIMARY KEY(id), 
    FOREIGN KEY(blog_id) REFERENCES blogs(id) 
    );
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
SELECT * FROM blogs WHERE name = "india";
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
SELECT * FROM blogs WHERE category= "History";
```
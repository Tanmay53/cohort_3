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
CREATE TABLE users(id int NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL,PRIMARY KEY(id));

CREATE TABLE categories( id int(10) NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL,PRIMARY KEY(id));

CREATE TABLE blogs( id int(100) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL,category_id int(10), user_id int(10),PRIMARY KEY (id) , FOREIGN KEY(category_id) REFERENCES categories(id), FOREIGN KEY (user_id) REFERENCES users(id) );

CREATE TABLE comments( id int(30) NOT NULL AUTO_INCREMENT,comment MEDIUMTEXT NOT NULL,blog_id int(20),PRIMARY KEY (id),FOREIGN KEY (blog_id) REFERENCES blogs(id));
```

#### FSD.SQL.8.2

User Creation Queries

```mysql
INSERT INTO users (id,name) VALUES (1,'Sagar');
INSERT INTO users (id,name) VALUES (id,'Kumar');
INSERT INTO users (id,name) VALUES (id,'Dimitri');
INSERT INTO users (id,name) VALUES (id,'Trusha');
INSERT INTO users (id,name) VALUES (id,'Rob');

```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
INSERT INTO blogs (id,name,category_id,user_id) VALUES (id,'blog_1',2,1);
INSERT INTO blogs (id,name,category_id,user_id) VALUES (id,'blog_2',4,2);
INSERT INTO blogs (id,name,category_id,user_id) VALUES (id,'blog_3',6,2);
INSERT INTO blogs (id,name,category_id,user_id) VALUES (id,'blog_4',3,4);
INSERT INTO blogs (id,name,category_id,user_id) VALUES (id,'blog_4',1,5);
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
INSERT INTO comments (comment,blog_id) VALUES ('This blog is wonderfull!!',3);
INSERT INTO comments (comment,blog_id) VALUES ('Amazing Blog!',2);
INSERT INTO comments (comment,blog_id) VALUES ('Need More Improvement!',1);
INSERT INTO comments (comment,blog_id) VALUES ('No clarity in content',4);
INSERT INTO comments (comment,blog_id) VALUES ('Good Fitness Oriented Blog',5);
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
SELECT * FROM blogs WHERE user_id = 2;
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
SELECT * FROM blogs WHERE category_id = 4;
```
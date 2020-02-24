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
CREATE TABLE users (id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, PRIMARY KEY(id) );

CREATE TABLE category (id TINYINT NOT NULL AUTO_INCREMENT, category VARCHAR(50) NOT NULL, PRIMARY KEY(id) );

CREATE TABLE blogs (id INT NOT NULL AUTO_INCREMENT,user_id SMALLINT UNSIGNED NOT NULL,category_id TINYINT,title VARCHAR(255) NOT NULL ,content VARCHAR(255) NOT NULL ,created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,PRIMARY KEY(id), FOREIGN KEY(user_id) REFERENCES users(id), FOREIGN KEY (category_id) REFERENCES category(id));

CREATE TABLE comments (id INT NOT NULL AUTO_INCREMENT, blog_id INT, comment VARCHAR(255) NOT NULL ,added_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY(id), FOREIGN KEY (blog_id) REFERENCES blogs(id);
```

#### FSD.SQL.8.2

User Creation Queries

```mysql
INSERT INTO users (name) VALUES ('ASHISH'),("MANISH"),("SUDHIR"),("NRUPUL"),("PRATEEK");
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
 INSERT INTO blogs (user_id,category_id,title,content) VALUES (1,2,"EMERGENCY PERIOD IN INDIA","PRIME MINISTER OF INDIA INDIRA GANDHI DECLARED EMEGENCY IN INDIA AROUND 1976"),(2,1,"STEM CELL","STEM CELL IS THE PART OF OUR CELLULAR SYSTEM WHICH MUTATES ITSELF TO GENERATE THE NEW CELL");
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
INSERT INTO comments (blog_id,comment) VALUES (1,"comment 1 is added"),(2,"comment on blog id 2 is added");
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
SELECT content FROM blogs WHERE user_id =(SELECT id FROM users WHERE name ="ASHISH");
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
SELECT content FROM blogs WHERE category_id =(SELECT id FROM category WHERE category ="TECHNOLOGY");
```
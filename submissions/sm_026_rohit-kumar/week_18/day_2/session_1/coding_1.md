### Week 18 Day 2

**SQL Tables & Queries**

Submission folder `submissions/<your_folder>/week_18/day_2/session_1`

Blog Application

```
A user can create mulitple blogs each can be from a different category, a user can also write as many comments he wants to on a certain blog
```

#### FSD.SQL.8.1

Tables Creation Queries

```
CREATE TABLE user(
 -> user_id BIGINT UNSIGNED AUTO_INCREMENT,
 -> name VARCHAR(100) NOT NULL,
 -> email VARCHAR(100) NOT NULL,
 -> username VARCHAR(15) NOT NULL,
 -> password VARCHAR(50) NOT NULL,
 -> joined_on DATETIME,
 -> PRIMARY KEY(user_id));

CREATE TABLE blog ( blog_id BIGINT UNSIGNED AUTO_INCREMENT, 
 -> category_id INT NOT NULL, 
 -> user_id BIGINT UNSIGNED NOT NULL, 
 -> title VARCHAR(200), 
 -> heading varchar(200) NOT NULL, 
 -> body VARCHAR(1000), 
 -> created_on DATETIME,
 -> PRIMARY KEY (blog_id), 
 -> FOREIGN KEY(category_id) REFERENCES category(category_id), 
 -> FOREIGN KEY(user_id) REFERENCES user(user_id));

 CREATE TABLE comment ( comment_id BIGINT UNSIGNED AUTO_INCREMENT, 
 -> blog_id BIGINT UNSIGNED NOT NULL, 
 -> user_id BIGINT UNSIGNED NOT NULL, 
 -> commented_on DATETIME, 
 -> PRIMARY KEY (comment_id), 
 -> FOREIGN KEY (blog_id) REFERENCES blog(blog_id), 
 -> FOREIGN KEY (user_id) REFERENCES user(user_id));
```

#### FSD.SQL.8.2

User Creation Queries

```
INSERT INTO user (name, email, username, password, joined_on) VALUES ("Ramesh", "ramesh@gmail.com", "ramesh@404", "test123", CURDATE())


INSERT INTO user (name, email, username, password, joined_on) VALUES ("Rohit", "rohit@gmail.com", "rohit@404", "test123", CURDATE())
```

#### FSD.SQL.8.3

Blog Creation Queries

```
INSERT INTO blog (category_id, user_id, title, heading, body, created_on) VALUES (1, 1, 'Food blog', 'Best Ever Food', 'SOME INFO ABOUT FOOD', CURDATE());

INSERT INTO blog (category_id, user_id, title, heading, body, created_on) VALUES (2, 2, 'Travel blog', 'Travels Blogs', 'SOME INFO ABOUT TRAVEL', CURDATE());
```

#### FSD.SQL.8.4

Comment Creation Queries

```
INSERT INTO comment (blog_id, user_id, comment, commented_on) VALUES (1,
1, 'nice blog', CURDATE());

INSERT INTO comment (blog_id, user_id, comment, commented_on) VALUES (1,
2, 'Loved your blog', CURDATE());
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```
SELECT blog_id FROM blog WHERE user_id IN (SELECT user_id FROM user WHERE username = 'rohit@404')
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```
SELECT blog_id FROM blog WHERE category_id IN (SELECT category_id FROM category WHERE category IN ('politics', 'music'))
```
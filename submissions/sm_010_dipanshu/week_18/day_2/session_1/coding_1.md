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
CREATE TABLE category (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY (id))

CREATE TABLE user (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY (id))

CREATE TABLE blog (id int NOT NULL AUTO_INCREMENT, user_id int NOT NULL, category_id int NOT NULL, blog_title varchar(255) NOT NULL, blog_content varchar(255), time_created varchar(255) NOT NULL, time_modified varchar(255), PRIMARY KEY (id), FOREIGN KEY(user_id) REFERENCES user(id), FOREIGN KEY (category_id) REFERENCES category(id))

CREATE TABLE comment (id int NOT NULL AUTO_INCREMENT, category_id int NOT NULL, blog_id int NOT NULL, user_id int NOT NULL, comment_content varchar(255) NOT NULL, time_created varchar(255) NOT NULL, time_modified varchar(255), PRIMARY KEY (id), FOREIGN KEY (category_id) REFERENCES category(id), FOREIGN KEY (user_id) REFERENCES user(id), FOREIGN KEY (blog_id) REFERENCES blog(id))
```

#### FSD.SQL.8.2

User Creation Queries

```mysql
INSERT INTO user (name) VALUES ("Dipanshu Sabharwal")

INSERT INTO user (name) VALUES ("Himanshu Sabharwal")
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
INSERT INTO blog (user_id, category_id, blog_title, time_created) VALUES ((select id from user where name = "Dipanshu Sabharwal"), (select id from category where name = "General"), "Modi comes power again", CURDATE())

INSERT INTO blog (user_id, category_id, blog_title, time_created) VALUES ((select id from user where name = "Himanshu Sabharwal"), (select id from category where name = "Sci-Fi"), "Pluto declared a planet again", CURDATE())
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
INSERT INTO comment (category_id, blog_id, user_id, comment_content, time_created) VALUES ((select id from category where name = "General"), (select id from blog where blog_title = "Modi comes to power again"), (select id from user where name = "Gaurav Arya"), "Modi is a fraud", CURDATE());

INSERT INTO comment (category_id, blog_id, user_id, comment_content, time_created) VALUES ((SELECT id FROM category WHERE name = "Sci-Fi"), (SELECT id FROM blog WHERE blog_title = "Pluto declared a planet again"), (SELECT id FROM user WHERE name = "Prabhat Ranjan"), "Pluto is a psuedo planet", CURDATE())
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
SELECT * FROM blog WHERE user_id = (SELECT id FROM user WHERE name = "Dipanshu Sabharwal")
```

#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
SELECT * FROM blog WHERE category_id = (SELECT id FROM category WHERE name = "General")
```

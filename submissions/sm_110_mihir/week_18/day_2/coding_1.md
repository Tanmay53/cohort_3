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
mysql> CREATE TABLE category(
    -> id TINYINT NOT NULL AUTO_INCREMENT,
    -> name VARCHAR(32),
    -> PRIMARY KEY(id));
```

#### FSD.SQL.8.2

User Creation Queries

```mysql
mysql> CREATE TABLE users(
    -> id SMALLINT NOT NULL AUTO_INCREMENT,
    -> name VARCHAR(32),
    -> PRIMARY KEY(id));
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
mysql> CREATE TABLE blogs(
    id SMALLINT NOT NULL AUTO_INCREMENT,
    user_id SMALLINT NOT NULL,
    category_id TINYINT NOT NULL,
    content TEXT NOT NULL,
    published_on DATETIME,
    updated_on DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
mysql> CREATE TABLE comments(
    -> id SMALLINT NOT NULL AUTO_INCREMENT,
    -> blog_id SMALLINT NOT NULL,
    -> user_id SMALLINT NOT NULL,
    -> content TEXT NOT NULL,
    -> created_on DATETIME,
    -> updated_on DATETIME,
    -> PRIMARY KEY (id),
    -> FOREIGN KEY (blog_id) REFERENCES blogs(id),
    -> FOREIGN KEY (user_id) REFERENCES users(id));

```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
mysql> SELECT content FROM blogs WHERE user_id = (SELECT id FROM users WHERE name="Mihir Kumar");

```

#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
mysql> SELECT content FROM blogs WHERE category_id = (
    -> SELECT id FROM category WHERE name="Music");

```

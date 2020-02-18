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
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE category (
    id int NOT NULL AUTO_INCREMENT,
    category varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE blogs (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    category_id int,
    user_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id int NOT NULL AUTO_INCREMENT,
    comment varchar(255),
    blog_id int,
    user_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (blog_id) REFERENCES blogs(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

#### FSD.SQL.8.2

User Creation Queries

```mysql
INSERT INTO users (name) VALUES ("Sudhir"), ("Abhinav"), ("Rahul"),("Asheesh");
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
INSERT INTO blogs (title, category_id, user_id) VALUES ("Redux", 1, 1), ("React", 1, 2), ("Facebook", 2, 3), ("Hello Economy", 3, 4), ("Hello Agriculture", 4, 2);
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
INSERT INTO comments (comment, blog_id, user_id) VALUES
("Redux is used to manage state", 1, 1),
("React is one page application", 1, 2),
("Facebook is social app", 3, 3),
("India economy is not good", 4, 4);
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
 SELECT * FROM blogs WHERE user_id = 1;
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
SELECT * FROM blogs WHERE category_id = "3";
```
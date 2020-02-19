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
CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY (id));

CREATE TABLE categories (id int NOT NULL AUTO_INCREMENT, category varchar(255) NOT NULL, PRIMARY KEY (id));

CREATE TABLE blogs (id int NOT NULL AUTO_INCREMENT, title varchar(255) NOT NULL, created DATETIME DEFAULT CURRENT_TIMESTAMP, category_id int, user_id int, PRIMARY KEY (id), FOREIGN KEY (category_id) REFERENCES categories(id), FOREIGN KEY (user_id) REFERENCES users(id));

CREATE TABLE comments (id int NOT NULL AUTO_INCREMENT, comment varchar(255), user_id int, blog_id int, PRIMARY KEY (id), FOREIGN KEY (user_id) REFERENCES users(id), FOREIGN KEY(blog_id) REFERENCES blogs(id));
```

#### FSD.SQL.8.2

User Creation Queries

```mysql
INSERT INTO users (name) VALUES ("Ashish"),
("Sudhir"), ("Rahul"), ("Mihir");


```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
INSERT INTO blogs (title, category_id, user_id) values ("React", 1, 1), ("Node", 1, 2), ("Globalisation", 2, 3), ("Inflation", 3, 4), ("Decentralisation", 4, 2);
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
INSERT INTO comments (comment, user_id, blog_id) values ("React is used for modularity", 1, 1), ("Globalisation is a 20th century phenomena", 2, 3), ("Node is very powerful", 3, 2), ("Inflation is sometimes beneficial", 4, 4);
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
SELECT * FROM blogs WHERE user_id = 1;
```

#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
SELECT * FROM blogs WHERE category_id = 3;
```
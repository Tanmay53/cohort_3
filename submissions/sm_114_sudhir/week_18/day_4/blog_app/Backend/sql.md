### Week 18 Day 2

**SQL Tables & Queries**

Submission folder `submissions/<your_folder>/week_18/day_2/session_1`

Blog Application

```
A user can create mulitple blogs each can be from a different category, a user can also write as many comments he wants to on a certain blog
```

#### Categories Table

Tables Creation Queries

```sql
CREATE TABLE categories (
    id int NOT NULL AUTO_INCREMENT,
    category varchar(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO categories (category) 
VALUES ("Technology"), ("Social"), ("Sports"), ("Economy"), ("Political");
```

#### Blogs Table

User Creation Queries

```sql
CREATE TABLE blogs(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    category_id int,
    user_id int,
    PRIMARY KEY(id),
    FOREIGN KEY(category_id) REFERENCES categories(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO blogs (title, content, category_id, user_id) 
VALUES ("Hello Title1", "Title Title Title1 Title", 1, 1),
("Hello Title2", "Title Title Title Title2", 3, 2),
("Hello Title3", "Title Title Title Title3", 4, 1);
```

#### Comments Table

```sql
CREATE TABLE comments(
    id int NOT NULL AUTO_INCREMENT,
    comment varchar(255),
    blog_id int,
    user_id int,
    commented_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY (blog_id) REFERENCES blogs(id),
    FOREIGN KEY (user_id) REFERENCES users(id)    
);

INSERT INTO comments (comment, blog_id, user_id) 
VALUES ("Hello comment1", 1, 1);
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql

```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql

```


#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql

```
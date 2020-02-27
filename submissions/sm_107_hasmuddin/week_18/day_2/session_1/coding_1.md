### Week 18 Day 2

**SQL Tables & Queries**

Submission folder `submissions/<your_folder>/week_18/day_2/session_1`

Blog Application

```
A user can create mulitple blogs each can be from a different category, a user can also write as many comments he wants to on a certain blog
```

#### FSD.SQL.8.1

Tables Creation Queries

```sql
CREATE TABLE User (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, gender VARCHAR(10) NOT NULL, country VARCHAR(30) NOT NULL, created_at TIMESTAMP NOT NULL, PRIMARY KEY(id));


CREATE TABLE Category (id INT NOT NULL AUTO_INCREMENT, Category VARCHAR(255) NOT NULL, PRIMARY KEY(id));


CREATE TABLE Blog (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(255) NOT NULL, content VARCHAR(255) NOT NULL, created_at TIMESTAMP NOT NULL, user_id int, Category_id int, PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES User(id), FOREIGN KEY(Category_id) REFERENCES Category(id));

CREATE TABLE Comments(id INT NOT NULL AUTO_INCREMENT, comment VARCHAR(255) NOT NULL, created_at TIMESTAMP NOT NULL, user_id INT, Category_id INT, Blog_id INT, PRIMARY KEY(id),FOREIGN KEY(user_id) REFERENCES User(id), FOREIGN KEY(Category_id) REFERENCES Category(id), FOREIGN KEY(Blog_id) REFERENCES Blog(id));

```

#### FSD.SQL.8.2

User Creation Queries

```sql
INSERT INTO User (name, gender, country) VALUES ('Ayaan', "Male", "India"),('Manish', "Male", "India"), ("Soumik", "Male", "India"), ("Mihir", "Male", "India"), ("Fatima",  "Female", "USA");

```

#### FSD.SQL.8.3

Blog Creation Queries

```sql
INSERT INTO Blog (title, content, user_id, Category_id) VALUES ("Footbal Game", 1, 3), ('Indian Politics', 'dummy text', 2, 1), ("USA NEWS", "dummy text", 3, 2), ('India Won the Match', "dummy text", 2, 3);
```

#### FSD.SQL.8.4

Comment Creation Queries

```sql
INSERT INTO Comments (comment, user_id, Category_id, Blog_id) VALUES('Fav Game', 1, 3, 1), ("Football is my fav game", 1, 3, 1), ("Yahoo India won the match", 2, 3, 4), ('I want to go USA', 3, 2, 3);
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```sql
SELECT * FROM Blog WHERE user_id=2;
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```sql
SELECT * FROM Blog WHERE Category_id=1;
```
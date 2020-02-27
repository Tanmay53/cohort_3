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
User Table:

CREATE TABLE users ( user_id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, email varchar(40) NOT NULL UNIQUE, username varchar(40) NOT NULL UNIQUE, password varchar(40) NOT NULL,mobile varchar(255),about varchar(255), PRIMARY KEY (user_id) )

Category Table:

CREATE TABLE category ( category_id int NOT NULL AUTO_INCREMENT, category varchar(255) NOT NULL UNIQUE, PRIMARY KEY(category_id) );

Blog Table:

CREATE TABLE blog( blog_id int NOT NULL AUTO_INCREMENT, title varchar(255) NOT NULL, blog_body MEDIUMTEXT NOT NULL, category_id int NOT NULL, user_id int NOT NULL, publish_date DATETIME NOT NULL DEFAULT NOW(),update_date DATETIME NOT NULL DEFAULT NOW(), PRIMARY KEY(blog_id),FOREIGN KEY(user_id) REFERENCES users(user_id),FOREIGN KEY(category_id) REFERENCES category(category_id) );

Comment Table:

CREATE TABLE comment ( comment_id int NOT NULL AUTO_INCREMENT, comment varchar(255) NOT NULL, blog_id int NOT NULL, user_id int NOT NULL,comment_date DATETIME NOT NULL DEFAULT NOW(),comment_update_date DATETIME NOT NULL DEFAULT NOW(),PRIMARY KEY(comment_id), FOREIGN KEY(user_id) REFERENCES users(user_id),FOREIGN KEY(blog_id) REFERENCES blog(blog_id));
```

#### FSD.SQL.8.2

User Creation Queries

```mysql
INSERT INTO users(name,email,username,mobile,about,password) VALUES ("Apoorva Krishna","apoorva15997@gmail.com","arkv","9234592345","old soul!","arkv@19"),("Kushal Krishna","kushal@gmail.com","kush","9234592545","coder","kush@19");
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
INSERT INTO blog(title,category_id,user_id,blog_body) VALUES("Indian Economy",4,1,"The economy of India is characterised as a developing market economy. It is the world's fifth-largest economy by nominal GDP and the third-largest by purchasing power parity (PPP). According to the IMF, on a per capita income basis, India ranked 142nd by GDP (nominal) and 119th by GDP (PPP) per capita in 2018.");

INSERT INTO blog(title,category_id,user_id,blog_body) VALUES("Modern Programming",1,2,"Many consider languages like Python, JavaScript as modern programming languages. At the same time, they consider Java as an Old programming language.Most of the mainstream programming languages were developed in the last century, mainly in the 1970s (e.g. C), 1980s (e.g. C++), 1990s (e.g. Java, Python, JavaScript).");
```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
INSERT INTO comment(blog_id,user_id,comment) VALUES(2,1,"Good Job!");
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
SELECT * FROM blog WHERE user_id = 1;
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
SELECT * FROM blog WHERE category_id = 4;
```
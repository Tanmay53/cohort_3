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

create table articles (id int not null primary key auto_increment, data varchar(255) not null, category_id int, user_id int, foreign key(category_id) references categories(id), foreign key (user_id) references users(id));

create table comments ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, data varchar(255) not null, article_id int, user_id int, foreign key (article_id) references articles(id) ,foreign key(user_id) references users(id));

CREATE TABLE CATEGORIES (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, category VARCHAR(50) NOT NULL);

create table users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL);

```

#### FSD.SQL.8.2

User Creation Queries

```mysql
insert into users values (1, "User 1");

insert into users values (2, "User 2");

insert into users values (3, "User 3");

insert into users values (4, "User 4");
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
insert into articles values (1, "Content for sports", 1, 1);

insert into articles values (2, "Content for entertainment", 3, 2);

insert into articles values (3, "Content for science", 4, 4);

insert into articles values (4, "Content for politics", 2, 3);

insert into articles values (5, "More Content for sports", 1, 1);

insert into articles values (6, "More Content for science", 4, 3);

```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql

```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
select * from articles where user_id=(select id from users where name="User 4");
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
select * from articles where category_id=(select id from categories where category="sports");
```
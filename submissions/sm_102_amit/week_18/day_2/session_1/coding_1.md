# Week 18 Day 2

Blog Application

```
A user can create mulitple blogs each can be from a different category, a user can also write as many comments he wants to on a certain blog
```

## FSD.SQL.8.1

Tables Creation Queries

```sql
CREATE TABLE categories(id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, category_name VARCHAR(255) NOT NULL UNIQUE KEY, is_active ENUM("0", "1") NOT NULL DEFAULT "1", is_deleted ENUM("0", "1") NOT NULL DEFAULT "0", created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
```

## FSD.SQL.8.2

User Creation Queries

```sql
CREATE TABLE users(id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL UNIQUE KEY, password VARCHAR(255) NOT NULL, fullname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, gender ENUM("Male", "Female", "Other") NOT NULL, dob DATE NOT NULL, is_active ENUM("0", "1") NOT NULL DEFAULT "1", is_deleted ENUM("0", "1") NOT NULL DEFAULT "0", created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
```

## FSD.SQL.8.3

Blog Creation Queries

```sql
CREATE TABLE blogs(id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, blog_title VARCHAR(255) NOT NULL, blog TEXT NOT NULL, category_id INT(11) UNSIGNED NOT NULL, user_id INT(11) UNSIGNED NOT NULL, published_on DATE NOT NULL, is_active ENUM("0", "1") NOT NULL DEFAULT "1", is_deleted ENUM("0", "1") NOT NULL DEFAULT "0", created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT);
```

## FSD.SQL.8.4

Comment Creation Queries

```sql
CREATE TABLE comments(id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, comment TEXT NOT NULL, blog_id INT(11) UNSIGNED NOT NULL, user_id INT(11) UNSIGNED NOT NULL, published_on DATE NOT NULL, is_active ENUM("0", "1") NOT NULL DEFAULT "1", is_deleted ENUM("0", "1") NOT NULL DEFAULT "0", created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE RESTRICT, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT);
```

## FSD.SQL.8.5

Find Blogs of a particular user

```sql
SELECT * FROM blogs WHERE user_id = 2;
```

## FSD.SQL.8.6

Find Blogs of a particular category

```sql
SELECT * FROM blogs WHERE category_id = 2;
```

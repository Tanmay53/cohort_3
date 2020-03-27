```sql
create table users(
id int not null auto_increment,name varchar(255) not null,
email varchar(255) not null,
salt varchar(255),password_hash varchar(255),
imgurl text,
primary key(id)
);
```


<!-- tweets -->
```sql
create table tweets (
    id int not null auto_increment,
    content varchar(255) not null,
    user_id int not null,
    created_on DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id),
    primary key(id)
);
```

```sql
<!-- followers -->
create table followers (
    id int not null auto_increment,
    follower int not null,
    user int not null,
    primary key(id),
    FOREIGN KEY(follower) REFERENCES users(id),
    FOREIGN KEY(user) REFERENCES users(id)
);
```

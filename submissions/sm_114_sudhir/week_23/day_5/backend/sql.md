<!-- create users -->
create table users(
    id int not null auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    salt varchar(255),
    password_hash varchar(255),
    primary key(id)
);

<!-- cities -->
create table categories (
    id int not null auto_increment,
    category varchar(255) not null,
    primary key(id)
);

INSERT INTO categories (category) 
VALUES ("Food"), ("Mobile"), ("Breakfast"), ("Wine"), ("Fruits");

<!-- buses -->
create table product (
    id int not null auto_increment,
    product varchar(255) not null,
    price int not null,
    category_id int not null,
    primary key(id),
    FOREIGN KEY(category_id) REFERENCES categories(id)
);


INSERT INTO product (product, price, category_id) 
VALUES ("Apple", 200, 5),
("Mango", 150, 5),
("Rice", 190, 1);

<!-- join table -->
select product.id, product, price, categories.category from product join categories on product.category_id = categories.id;

<!-- sort and limit 10-->
SELECT product.id, product, price, categories.category FROM product JOIN categories ON product.category_id = categories.id order by price desc LIMIT 10;

<!-- filter -->
SELECT * FROM (SELECT product.id, product, price, categories.category FROM product JOIN categories ON product.category_id = categories.id) as filter_product WHERE filter_product.category = "Breakfast";
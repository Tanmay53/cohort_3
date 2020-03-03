#### parent table

````sql

CREATE TABLE folders ( id INT NOT NULL AUTO_INCREMENT, folder_name varchar(255) NOT NULL, PRIMARY KEY (id));

CREATE TABLE closure_table ( ancestor_id INT NOT NULL, descendant_id INT NOT NULL, path_length INT NOT NULL, PRIMARY KEY (ancestor_id, descendant_id), FOREIGN KEY (ancestor_id) REFERENCES folders(id), FOREIGN KEY (descendant_id) REFERENCES folders(id));

INSERT INTO folders (folder_name) VALUE ("My Computer"), ("Home"), ("Trash"), ("Personal"), ("Repos"), ("Projects"), ("Submissions");

INSERT INTO closure_table (ancestor_id, descendant_id, path_length) VALUE (1, 1, 0), (1, 2, 1), (1, 3, 1), (1, 4, 1), (1, 5, 2), (1, 6, 2), (1, 7, 3), (2, 2, 0), (2, 5, 1), (2, 6, 1), (2, 7, 2), (3, 3, 0), (4, 4, 0), (5, 5, 0), (5, 7, 1), (6, 6, 0), (7, 7, 0);

INSERT INTO folders (folder_name) VALUE ("sm_104");

insert into closure_table (ancestor_id, descendant_id, path_length) SELECT ancestor_id, 8, path_length + 1 FROM closure_table WHERE descendant_id = 7 UNION ALL SELECT 8, 8, 0;


````

````sql

select * from closure_table join folders on folders.id = descendant_id where ancestor_id = 1 and path_length > 0;

select * from closure_table left join folders on folders.id = closure_table.ancestor_id Where descendant_id = 5 and path_length > 0;
````
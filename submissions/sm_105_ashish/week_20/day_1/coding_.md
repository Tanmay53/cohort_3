#folder management

````sql
CREATE TABLE folder_list( id INT NOT NULL AUTO_INCREMENT, folder_name VARCHAR(255) NOT NULL, PRIMARY KEY(id));

````
````sql
INSERT INTO folder_list (folder_name) VALUES ("MY-PC"),("HOME"),("PERSONAL"),("TRASH"),("PICTURES"),("CODING"),("REPO"),("SUBMISSION");
````

````sql
CREATE TABLE closure_table (ancestor int NOT NULL ,descendent int NOT NULL, length int NOT NULL, PRIMARY KEY(ancestor,descendent), FOREIGN KEY(ancestor) REFERENCES folder_list(id) , FOREIGN KEY(descendent) REFERENCES folder_list(id));

````

````sql
 INSERT INTO closure_table (ancestor, descendent, length) VALUES (1, 1, 0), (1, 2, 1), (1, 3, 1), (1, 4, 1), (1, 5, 2), (1, 6, 2), (1, 7, 3), (2, 2, 0), (2, 5, 1), (2, 6, 1), (2, 7, 2), (3, 3, 0), (4, 4, 0), (5, 5, 0), (5, 7, 1), (6, 6, 0);
````

````sql
INSERT INTO folder_list(folder_name) VALUES ("sm_105");
````


````sql
 INSERT INTO closure_table (ancestor,descendent,length) SELECT ancestor , 9,length+1 FROM closure_table WHERE descendent = 8 UNION ALL SELECT 9,9, 0;

````

````sql
SELECT * FROM closure_table JOIN folder_list ON folder_list.id = ancestor WHERE descendent = 9 AND length > 0;
````

````sql
SELECT * FROM closure_table JOIN folder_list ON folder_list.id = descendent WHERE ancestor = 8 && length > 0
````

````sql
 DELETE FROM closure_table WHERE descendent = 9;

````

````sql
SELECT folder_name ,MAX(length) AS maxpath FROM closure_table JOIN folder_list ON folder_list.id = descendent WHERE ancestor = 1 group by id;

````
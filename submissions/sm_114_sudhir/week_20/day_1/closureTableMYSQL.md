#### CLOSURETABLE
```sql
CREATE DATABASE ClosureTable_folder;

CREATE TABLE folders (
    id int NOT NULL AUTO_INCREMENT,
    folder_name varchar(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO folders (folder_name) 
    VALUES ("My Computer"), ("Home"), ("Trash"),
    ("Personal"), ("Repos"), ("Projects"), ("Submission");

CREATE TABLE Closure_Table (
    ancestor int NOT NULL,
    descendant int NOT NULL,
    length int NOT NULL,
    PRIMARY KEY (ancestor, descendant),
    FOREIGN KEY (ancestor) REFERENCES folders(id),
    FOREIGN KEY (descendant) REFERENCES folders(id)
);

INSERT INTO Closure_Table (ancestor, descendant, length)
VALUES (1, 1, 0), (1, 2, 1), (1, 3, 1), (1, 4, 1),
(1, 5, 2), (1, 6, 2), (1, 7, 3), (2, 2, 0), (2, 5, 1),
(2, 6, 1), (2, 7, 2), (3, 3, 0), (4, 4, 0), (5, 5, 0), (5, 7, 1), (6, 6, 0);  
```
####  Query for descendant
```sql
SELECT * FROM Closure_Table JOIN folders ON (folders.id = descendant) WHERE ancestor = 5 && length > 0;
```

#### Query for Ancentors
```sql
SELECT * FROM Closure_Table JOIN folders ON (folders.id = ancestor) WHERE descendant = 2;
```

#### Insert into new child
```sql
INSERT INTO folders (folder_name)
VALUES ("SM_114");
```
##### Top level folders
```sql
-- find count
SELECT COUNT(descendant) AS des_count, descendant FROM Closure_Table GROUP BY descendant

-- find top level folder
 SELECT * FROM (SELECT COUNT(descendant) AS des_count, descendant FROM Closure_Table GROUP BY descendant) AS des_count_table JOIN folders ON folders.id = des_count_table.descendant WHERE des_count = 1;
```

#### Insert into closure table 
```sql
INSERT INTO Closure_Table (ancestor, descendant, length)  SELECT ancestor, 8, (length+1) FROM Closure_Table WHERE descendant = 7 UNION ALL SELECT 8, 8, 0;
```

#### Find child under the parent
```mysql
SELECT * FROM Closure_Table JOIN folders ON 
(folders.id = descendant) WHERE ancestor = %s and length = 1""", (str(id))
```


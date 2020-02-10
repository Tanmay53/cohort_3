CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE users (user_id  int, user_name varchar(50));

INSERT INTO users (user_id, user_name) VALUES (1, 'Rohit')
INSERT INTO users (user_id, user_name) VALUES (2, 'Mohit') 
INSERT INTO users (user_id, user_name) VALUES  (3, 'Sumit')
INSERT INTO users (user_id, user_name) VALUES (4, 'Amit') 
INSERT INTO users (user_id, user_name) VALUES (5, 'Rajat')

CREATE TABLE checklist (checklist_id int, user_id int, checklist_name varchar(50));

INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (1, 1, 'Gym')
INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (2, 1, 'Food')
INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (3, 1, 'Buy')
INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (4, 2, 'Read')
INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (5, 2, 'Focus On')
INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (6, 2, 'Phones')
INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (7, 3, 'To Do')
INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (8, 4, 'Funny')
INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (9, 4, 'Party')
INSERT INTO checklist (checklist_id, user_id, checklist_name) VALUES (10, 4, 'Exercise')


CREATE TABLE task (task_id int, checklist_id int, task_name varchar(50)); 

INSERT INTO task (task_id, checklist_id, task_name) VALUES  (1, 1, 'Gym Fee') 
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (2, 1, 'Gym Kit')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (3, 1, 'Gym Towel')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (4, 2, 'Chetan Bhagat')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (5, 2, 'Algorithms')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (6, 2, 'Novels')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (7, 2, 'Jokes')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (8, 3, 'Running') 
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (9, 3, 'Jogging') 
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (10, 3, 'Squats') 
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (11, 3, 'Cycling') 
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (12, 3, 'Jumping')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (13, 5, 'Physical Health')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (14, 5, 'Mental Health')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (15, 5, 'Studies') 
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (16, 5, 'Skills')
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (17, 5, 'Conversation') 
INSERT INTO task (task_id, checklist_id, task_name) VALUES  (18, 5, 'Networking')


SELECT * FROM users WHERE user_id = 1
SELECT user_id FROM users WHERE user_name = 'Mohit'

SELECT checklist_name FROM checklist WHERE checklist_id = 1
SELECT checklist_id FROM checklist WHERE checklist_name = 'Exercise'

SELECT task_name FROM task WHERE checklist_id = 1
SELECT task_id, checklist_id FROM task WHERE task_name = 'Novels'


UPDATE users SET user_name = 'Rohit Kumar' WHERE user_id = 1
UPDATE users SET user_id = 6 WHERE user_name = 'Rajat';


UPDATE checklist SET checklist_name = 'New Task' WHERE user_id = 10;
UPDATE checklist SET checklist_name = 'Do Exercise' WHERE checklist_id = 10;

UPDATE task SET task_name = 'No Jogging' WHERE task_name = 'Jogging';
UPDATE task SET task_name = 'NW Task' WHERE task_id = 18;


DELETE FROM users WHERE user_id = 6;
DELETE FROM users WHERE user_name = 'Mohit'

DELETE FROM checklist where checklist_id > 9;
DELETE FROM checklist WHERE checklist_name = 'Funny';

DELETE FROM task WHERE checklist_id = 5;
DELETE FROM task WHERE task_name = 'Jogging';


DELETE FROM users;
TRUNCATE checklist;
TRUNCATE task;

DROP TABLE users;
DROP TABLE checklist;
DROP TABLE task;


DROP DATABASE todo_db;
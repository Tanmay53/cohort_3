### Week 16 Day 5

**The given test database has two tables write the queries for the given scenarios**

### FSD.SQL.3.1

Table - `user_data`

Find all the female users

```sql
SELECT * FROM user_data WHERE gender = "female";
```

Find all the female users who speak one of the two languages Kannada, Hindi

```sql
SELECT *  FROM user_data WHERE gender = "female" AND (language = "Hindi" OR language = "Kannada");

```

Find all the male users who can speak Hindi and female users who can speak Kannada

```sql
SELECT *  FROM user_data WHERE (gender = "female" AND language = "Kannada") OR (gender = "male" AND language = "Hindi");

```

Find all the users who wear the shirt size `S`

```sql
SELECT * FROM user_data WHERE shirt_size = "s";
```

Find all the female users who wear the shirt size `XL`

```sql
SELECT * FROM user_data WHERE gender = "female" AND shirt_size = "Xl";
```

Find all the English speaking male users and Hindi speaking female users

```sql
SELECT *  FROM user_data WHERE (gender = "female" AND language = "Hindi") OR (gender = "male" AND language = "English");

```

Find all the male users who can speak Hindi or English and female users who can speak Kannada or German

```sql
SELECT *  FROM user_data WHERE (gender = "male" AND (language = "Hindi" OR language = "English")) OR (gender = "female" AND (language = "Kannada" OR language = "German"));
```

Find all the female users who can speak Bengali who wear shirt size `XL` and male users who speak German and wear shirt size either `L` or `M`

```sql
SELECT *  FROM user_data WHERE (gender = "female" AND language = "Bengali" AND shirt_size = "XL") OR (gender = "male" AND language = "German" And (shirt_size = "L" or shirt_size = "M"));
```

Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam)

```sql
SELECT * FROM user_data WHERE gender = "Female" AND (language IN ("Hindi","Punjabi","Bengali","Gujarati","Tamil","Malayalam"));
```

Men who can speak Korean

```sql
SELECT * FROM user_data WHERE gender = "male" AND language = "Korean";

```

### FSD.SQL.3.2

Table - `cars_data`

Men who own a Pink car

```sql
SELECT * FROM cars_data  WHERE gender = "male" AND car_color = "Pink";
```

Women who own a Red or a Blue Car

```sql
SELECT * FROM cars_data  WHERE gender = "female" AND (car_color IN ("Red","Blue"));
```

Men who purchased the car in the year 1998

```sql
SELECT * FROM cars_data WHERE gender = "male" AND purchase_year = "1998";
```

Women who purchased a Yellow car in the year 1985

```sql
SELECT * FROM cars_data WHERE gender = "male" AND purchase_year = "1985" AND car_color ="yellow";
```

Men who either have a Red or Green car and either live in Germany or Kenya

```sql
SELECT * FROM cars_data WHERE gender = "male" AND car_color IN ("Green","Red") AND country IN ("Germany" ,"Kenya");
```

People from India who purchased cars in the year 2001

```sql
SELECT * FROM cars_data WHERE country ="India" AND purchase_year = "2001";
```

People from Germany or Egypt who purchased cars in the year 1998 or 1992

```sql
SELECT * FROM cars_data WHERE purchase_year IN ("1998","1992") AND country IN ("Germany" ,"Egypt");
```

Women from India who own a Blue car

```sql
SELECT * FROM cars_data WHERE gender = "Female" AND car_color = "Blue" AND country = "India";
```

Men from Germany who purchased cars in 1998 and Men from Egypt who purchased cars in 1992

```sql
SELECT * FROM cars_data WHERE gender = "male" AND (purchase_year IN ("1998") AND country IN ("Germany"))OR (purchase_year IN ("1992") AND country IN ("Egypt"));
```

Women who own a Green car and are not from Pakistan

```sql
SELECT * FROM cars_data WHERE gender = "female" AND car_color = "Green" AND country != "Pakistan";
```
<!-- @format -->

### Week 16 Day 5

**The given test database has two tables write the queries for the given scenarios**

### FSD.SQL.3.1

Table - `users_data`

Find all the female users

```sql
SELECT * FROM user_data WHERE gender="female";
```

Find all the female users who speak one of the two languages Kannada, Hindi

```sql
SELECT * FROM user_data WHERE gender="female" AND language IN ("kannada","hindi");
```

Find all the male users who can speak Hindi and female users who can speak Kannada

```sql
SELECT * FROM user_data WHERE (gender="female" AND language ="kannada") OR (gender="male" AND language="hindi")
```

Find all the users who wear the shirt size `S`

```sql
SELECT * FROM user_data WHERE shirt_size = "s";
```

Find all the female users who wear the shirt size `XL`

```sql
SELECT * FROM user_data WHERE gender="female" AND shirt_size = "xl";
```

Find all the English speaking male users and Hindi speaking female users

```sql
SELECT * FROM user_data WHERE (gender="female" AND language = "hindi") OR (gender="male" AND language="english");
```

Find all the male users who can speak Hindi or English and female users who can speak Kannada or German

```sql
SELECT * FROM user_data WHERE (gender="female" AND language IN ("kannada","german")) OR (gender="male" AND language IN ("english","hindi"));
```

Find all the female users who can speak Bengali who wear shirt size `XL` and male users who speak German and wear shirt size either `L` or `M`

```sql
 SELECT * FROM user_data WHERE (gender="female" AND language = "bengali" AND shirt_size="xl") OR (gender="male" AND language="german" AND shirt_size IN ("l","m"));
```

Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam)

```sql
SELECT * FROM user_data WHERE language IN ("hindi","punjabi","bengali","gujarati","tamil","malayalam");
```

Men who can speak Korean

```sql
SELECT * FROM user_data WHERE gender="male" language = "korean";
```

### FSD.SQL.3.2

Table - `cars_data`

Men who own a Pink car

```sql
select * from cars_data WHERE gender="male" AND car_color="pink";
```

Women who own a Red or a Blue Car

```sql
select * from cars_data WHERE gender="female" AND car_color IN ("Red","Blue");
```

Men who purchased the car in the year 1998

```sql
select * from cars_data WHERE gender="male" AND purchase_year="1998";
```

Women who purchased a Yellow car in the year 1985

```sql
select * from cars_data WHERE gender="female" AND purchase_year="1985" AND car_color ="yellow";
```

Men who either have a Red or Green car and either live in Germany or Kenya

```sql
select * from cars_data WHERE gender="male" AND car_color IN ("red","green") AND country IN ("germany","kenya");
```

People from India who purchased cars in the year 2001

```sql
select * from cars_data WHERE gender="male" AND purchase_year="2001" AND country="india";
```

People from Germany or Egypt who purchased cars in the year 1998 or 1992

```sql
select * from cars_data WHERE country IN ("germany","egypt") AND purchase_year IN ("1998","1992");
```

Women from India who own a Blue car

```sql
select * from cars_data WHERE gender="female" AND country="india" AND
color_car="blue";
```

Men from Germany who purchased cars in 1998 and Men from Egypt who purchased cars in 1992

```sql
 select * from cars_data WHERE gender="male" AND (purchase_year="1998" AND country="germany") OR (purchase_year="1992" AND country="egypt");
```

Women who own a Green car and are not from Pakistan

```sql
select * from cars_data WHERE gender="female" AND car_color="green" AND country != "pakistan";
```

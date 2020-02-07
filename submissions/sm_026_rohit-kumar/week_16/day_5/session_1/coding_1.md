### Week 16 Day 5

**The given test database has two tables write the queries for the given scenarios**

### FSD.SQL.3.1

Table - `users_data`

Find all the female users

``
SELECT * FROM user_data WHERE gender = 'Female';
```

Find all the female users who speak one of the two languages Kannada, Hindi

```
SELECT * FROM user_data WHERE gender = 'Female' AND language in ('Hindi', 'Kannada');
```

Find all the male users who can speak Hindi and female users who can speak Kannada

```
SELECT * FROM user_data WHERE (gender = 'Male' AND language = 'Hindi') OR (gender = 'Female' AND language = 'Kannada');
```

Find all the users who wear the shirt size `S`

```
SELECT * FROM user_data WHERE shirt_size = 'S';
```

Find all the female users who wear the shirt size `XL`

```
SELECT * FROM user_data WHERE gender = 'Female' AND shirt_size = 'XL';
```

Find all the English speaking male users and Hindi speaking female users

```
SELECT * FROM user_data WHERE (gender = 'Male' AND language = 'English') or (gender = 'Female' AND language = 'Hindi')
```

Find all the male users who can speak Hindi or English and female users who can speak Kannada or German

```
SELECT * FROM user_data WHERE (gender = 'Male' AND language IN ('Hindi', 'English')) OR (gender = 'Female' AND language IN ('Kannada', 'Germen'));
```

Find all the female users who can speak Bengali who wear shirt size `XL` and male users who speak German and wear shirt size either `L` or `M`

```
SELECT * FROM user_data WHERE (gender = 'Female' AND language = 'Bengali' AND shirt_size = 'XL') OR (gender = 'Male' AND language = 'German' AND shirt_size in ('L', 'M'))
```

Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam)

```
SELECT * FROM user_data WHERE gender = 'Female' AND language IN ('Hindi', 'Punjabi', 'Bengali', 'Gujarati', 'Tamil', 'Malayalam')
```

Men who can speak Korean

```
 SELECT * FROM user_data WHERE gender = 'Male' AND language = 'Korean';
```

### FSD.SQL.3.2

Table - `cars_data`

Men who own a Pink car

```
SELECT * FROM cars_data WHERE gender = 'Male' AND car_color = 'Pink';
```

Women who own a Red or a Blue Car

```
SELECT * FROM cars_data WHERE gender = 'Female' AND car_color IN ('Red', 'Blue');
```

Men who purchased the car in the year 1998

```
SELECT * FROM cars_data WHERE gender = 'Male' AND purchase_year = '1998';
```

Women who purchased a Yellow car in the year 1985

```
SELECT * FROM cars_data WHERE gender = 'Female' AND car_color = 'Yellow' AND purchase_year = '1985';
```

Men who either have a Red or Green car and either live in Germany or Kenya

```
SELECT * FROM cars_data WHERE gender = 'Male' AND car_color IN ('Red', 'Green') AND country IN ('Kenya', 'Germany');
```

People from India who purchased cars in the year 2001

```
SELECT * FROM cars_data WHERE country = 'India' AND purchase_year = '2001';
```

People from Germany or Egypt who purchased cars in the year 1998 or 1992

```
SELECT * FROM cars_data WHERE country IN ('Germany', 'Eqypt') AND purchase_year IN ('1988', '1992');
```

Women from India who own a Blue car

```
SELECT * FROM cars_data WHERE gender = 'Female' AND country = 'India' AND car_color = 'Blue';
```

Men from Germany who purchased cars in 1998 and Men from Egypt who purchased cars in 1992

```
SELECT * FROM cars_data WHERE gender = 'Male' AND ((country = 'Germany' AND purchase_year = '1998') OR (country = 'Egypt' AND purchase_year = '1992'));
```

Women who own a Green car and are not from Pakistan

```
SELECT * FROM cars_data WHERE gender = 'Female' AND car_color = 'Green' AND country != 'Pakistan';
```
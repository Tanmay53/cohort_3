### Week 16 Day 5

**The given test database has two tables write the queries for the given scenarios**

### FSD.SQL.3.1

Table - `users_data`

Find all the female users

```
select * from user_data where gender = 'Female';
```

Find all the female users who speak one of the two languages Kannada, Hindi

```
select * from user_data where gender = 'Female' and language in ('Kannada','Hindi');
```

Find all the male users who can speak Hindi and female users who can speak Kannada

```
select * from user_data where (gender = 'Male' and language = 'Hindi') or (gender = 'Female' and language = 'Kannada');
```

Find all the users who wear the shirt size `S`

```
select * from user_data where shirt_size = 'S';
```

Find all the female users who wear the shirt size `XL`

```
select * from user_data where gender = 'Female' and shirt_size = 'XL';
```

Find all the English speaking male users and Hindi speaking female users

```
select * from user_data where (gender = 'Male' and language = 'English') or (gender = 'Female' and language = 'Hindi');
```

Find all the male users who can speak Hindi or English and female users who can speak Kannada or German

```
select * from user_data where (gender = 'Male' and language in ('Hindi', 'English')) or (gender = 'Female' and language in ('Kannada', 'German'));
```

Find all the female users who can speak Bengali who wear shirt size `XL` and male users who speak German and wear shirt size either `L` or `M`

```
select * from user_data where (gender = 'Female' and shirt_size = 'XL') or (gender = 'Male' and language = 'German' and shirt_size in ('L','M'));
```

Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam)

```
select * from user_data where gender = 'Female' and language in ('Hindi','Punjabi','Bengali','Gujarati','Tamil','Malayalam');
```

Men who can speak Korean

```
select * from user_data where gender = 'Male' and language = 'Korean';
```

### FSD.SQL.3.2

Table - `cars_data`

Men who own a Pink car

```
select * from cars_data where gender = 'Male' and car_color = 'Pink';
```

Women who own a Red or a Blue Car

```
select * from cars_data where gender = 'Female' and car_color in ('Red', 'Blue');
```

Men who purchased the car in the year 1998

```
select * from cars_data where gender = 'Male' and purchase_year = 1998;
```

Women who purchased a Yellow car in the year 1985

```
select * from cars_data where gender = 'Female' and purchase_year = 1985 and car_color = 'Yellow';
```

Men who either have a Red or Green car and either live in Germany or Kenya

```
select * from cars_data where car_color in ('Red', 'Green') and gender = 'Male' and country in ('Germany', 'Kenya');
```

People from India who purchased cars in the year 2001

```
select * from cars_data where country = 'India' and purchase_year = 2001;
```

People from Germany or Egypt who purchased cars in the year 1998 or 1992

```
select * from cars_data where country in ('Germany', 'Egypt') and purchase_year in (1992, 1998);
```

Women from India who own a Blue car

```
select * from cars_data where gender = 'Female' and country = 'India' and car_color = 'Blue';
```

Men from Germany who purchased cars in 1998 and Men from Egypt who purchased cars in 1992

```
select * from cars_data where gender = 'Male' and ((country = 'Germany' and purchase_year = 1998) or (country = 'Egypt' and purchase_year = 1992));
```

Women who own a Green car and are not from Pakistan

```
select * from cars_data where gender = 'Female' and car_color = 'Green' and country != 'Pakistan';
```
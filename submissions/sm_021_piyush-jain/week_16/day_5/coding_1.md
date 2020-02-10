### Week 16 Day 5

**The given test database has two tables write the queries for the given scenarios**

### FSD.SQL.3.1

Table - `users_data`

Find all the female users

```sql
 select * from users_data where gender="Female";
```

Find all the female users who speak one of the two languages Kannada, Hindi

```sql
select * from user_data where gender="Female" and language in ("kannada","hindi");
```

Find all the male users who can speak Hindi and female users who can speak Kannada

```sql
select * from user_data where (gender="male" and language="hindi") or (gender="female" and language="kannada");
```

Find all the users who wear the shirt size `S`

```sql
select * from user_data where shirt_size="s";
```

Find all the female users who wear the shirt size `XL`

```sql
select * from user_data where shirt_size="xl" and gender="female";
```

Find all the English speaking male users and Hindi speaking female users

```sql
 select * from user_data where (gender="male" and language="english") or (gender="female" and language="hindi");
```

Find all the male users who can speak Hindi or English and female users who can speak Kannada or German

```sql
select * from user_data where (gender="male" and language IN ("english" ,"hindi")) or (gender="female" and language IN ("kannada","german"));
```

Find all the female users who can speak Bengali who wear shirt size `XL` and male users who speak German and wear shirt size either `L` or `M`

```sql
select * from user_data where (gender="female" and shirt_size="xl") or (gender="male" and language="german" and shirt_size in ("l","m"));
```

Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam)

```sql
select * from user_data where gender="female" and language in ("malayalam","tamil","gujarati","bengali","hindi","punjabi");
```

Men who can speak Korean

```sql
select * from user_data where gender="male" and language="korean";
```

### FSD.SQL.3.2

Table - `cars_data`

Men who own a Pink car

```sql
select * from cars_data where gender="male" and car_color="pink";
```

Women who own a Red or a Blue Car

```sql
select * from cars_data where gender="female" and car_color in ("red","blue");
```

Men who purchased the car in the year 1998

```sql
select * from cars_data where gender="male" and purchase_year="1998";
```

Women who purchased a Yellow car in the year 1985

```sql
select * from cars_data where gender="female" and purchase_year="1985" and car_color="yellow";
```

Men who either have a Red or Green car and either live in Germany or Kenya

```sql
select * from cars_data where gender="male" and country in ("germany","kenya")and car_color in ("red","green");
```

People from India who purchased cars in the year 2001

```sql
select * from cars_data where country="INDIA" and purchase_year="2001";
```

People from Germany or Egypt who purchased cars in the year 1998 or 1992

```sql
select * from cars_data where country in ("egypt","germany") and purchase_year in ("1998","1992");
```

Women from India who own a Blue car

```sql
select * from cars_data where gender="female" and country="india" and car_color="blue";
```

Men from Germany who purchased cars in 1998 and Men from Egypt who purchased cars in 1992

```sql
 select * from cars_data where gender ="male" and (country="germany" and purchase_year="1998") or (country="egypt" and purchase_year="1992");
```

Women who own a Green car and are not from Pakistan

```sql
select * from cars_data where gender="female" and country != "pakistan";
```
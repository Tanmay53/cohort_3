# Week 16 Day 5

## FSD.SQL.3.1

Table - `users_data`

Find all the female users

```sql
SELECT * FROM user_data WHERE gender = "female";
```

Find all the female users who speak one of the two languages Kannada, Hindi

```sql
SELECt * FROM user_data WHERE gender = "Female" AND (language = "Hindi" OR language = "Kannada");
```

Find all the male users who can speak Hindi and female users who can speak Kannada

```sql
SELECT * FROM user_data WHERE (gender = "Male" AND language = "Hindi") OR (gender = "Female" AND language = "Kannada");
```

Find all the users who wear the shirt size `S`

```sql
SELECT * FROM user_data WHERE shirt_size = "S";
```

Find all the female users who wear the shirt size `XL`

```sql
SELECT * FROM user_data WHERE gender = "Female" AND shirt_size = "XL";
```

Find all the English speaking male users and Hindi speaking female users

```sql
SELECT * FROM user_data WHERE (gender = "Male" AND language = "English") OR (gender = "Female" AND language = "Hindi");
```

Find all the male users who can speak Hindi or English and female users who can speak Kannada or German

```sql
SELECT * FROM user_data WHERE (gender = "Male" AND language IN ("Hindi", "English")) OR (gender = "Female" AND language IN ("Kannada", "German"));
```

Find all the female users who can speak Bengali who wear shirt size `XL` and male users who speak German and wear shirt size either `L` or `M`

```sql
SELECT * FROM user_data WHERE (gender = "Female" AND language = "Bengali" AND shirt_size = "XL") OR (gender = "Male" AND language = "German" AND (shirt_size = "L" OR shirt_size = "M"));
```

Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam)

```sql
SELECT * FROM user_data WHERE gender = "Female" AND language IN ("Hindi", "Punjabi", "Bengali", "Gujarati", "Tamil", "Malayalam");
```

Men who can speak Korean

```sql
SELECT * FROM user_data WHERE gender = "Male" AND language = "Korean";
```

## FSD.SQL.3.2

Table - `cars_data`

Men who own a Pink car

```sql

```

Women who own a Red or a Blue Car

```sql

```

Men who purchased the car in the year 1998

```sql

```

Women who purchased a Yellow car in the year 1985

```sql

```

Men who either have a Red or Green car and either live in Germany or Kenya

```sql

```

People from India who purchased cars in the year 2001

```sql

```

People from Germany or Egypt who purchased cars in the year 1998 or 1992

```sql

```

Women from India who own a Blue car

```sql

```

Men from Germany who purchased cars in 1998 and Men from Egypt who purchased cars in 1992

```sql

```

Women who own a Green car and are not from Pakistan

```sql

```

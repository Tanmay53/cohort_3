Register
POST URL - /auth/signup
PARAMS
```
{
  "name": "MASAI School",
  "email": "hello@masai.com"
  "password": "secret",
}
```

RESPONSE
Success (Status Code - 200)
```
{
  "error": false,
  "message": "Registration Success"
}
```

Failure (Status Code - 200)
```
{
  "error": true,
  "message": "Email Already Exist"
}
```
Login

POST URL - /auth/login
PARAMS
```
{
  "username": "hello@masai.com",
   "password": "secret"
}
```
RESPONSE
Success (Status Code - 200)
```
{
  "error": false,
  "message": "Login successfull"
}
```

Failure (Status Code - 401)
```
{
  "error": true,
  "message": "Invalid login creadentials"
}
```

### Installation

- `npm install`

### Running application

```
npm run start
```
### Endpoints:
You can register new user:
```
POST: http://localhost:5000/auth/registration
```
You can log in, receive token and authorise:
```
POST: http://localhost:5000/auth/login
```
Authorised 'USER' and 'ADMIN" can get all users:
```
GET: http://localhost:5000/users/
```
Authorised 'ADMIN" can delete user by userName:
```
DELETE: http://localhost:5000/users
```



const middlwareUsers = (req, res, next) => {
    req.users = [
        { login: 'user1', pass: 'password1' },
        { login: 'user2', pass: 'password2' },
      ];
   
      next()
}

export default middlwareUsers
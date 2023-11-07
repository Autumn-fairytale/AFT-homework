import jwt  from "jsonwebtoken";

const secret = 'secret';
const log = (req, res, next) => {

    let isCredentialsValid = false
    for (let user of req.users){
        if(Object.values(user)[0] === Object.values(req.body)[0] && 
           Object.values(user)[1] === Object.values(req.body)[1]){
            isCredentialsValid = true
        }
    }
  console.log(isCredentialsValid)
    if (!isCredentialsValid) return res.json('you shall not pass... Gendalf').sendStatus(401)

    const id = 1234567;

    const token = jwt.sign({id}, secret);
    req.token = token
    req.secret = secret
    next()
  
}

export default log
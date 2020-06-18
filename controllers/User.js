const bcrypt = require("bcrypt-nodejs");
const User = require("../models/User");

const SingUp = (req, res) => {
  const user = new User();

  const {name,lastname, email, password, repeatpassword } = req.body;

  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.role = "admin";
  user.active = false;

  if (!password || !repeatpassword) {
    res.status(404).send({ message: "Las contraseñas con obligatorias" });
  } else {
    if (password !== repeatpassword) {
      res.status(404).send({ message: "Las contraseñas no son iguales" });
    } else {
      bcrypt.hash(password, null, null, (err, hash) => {
        if (err) {
          res.status(500).send({ message: "Error al encryptar la contraseña" });
        } else {
          
            user.password = hash;
            
            user.save((err,userStored) => {
                if(err){
                    res.status(500).send({message: err})
                }else{
                    if(!userStored){
                        res.status(404).send({message : "Correo ya registrado"})
                    }else{
                        res.status(200).send({user : userStored})
                    }
                }
            })


        }
      });
    }
  }

  // console.log(req.body);
};

module.exports = {
  SingUp,
};

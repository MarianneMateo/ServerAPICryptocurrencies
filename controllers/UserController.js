import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id_user: req.params.id_user,
      },
    });
    res.status(200).json({ id_user: response.id_user,
      name: response.name,
      email: response.email,});
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.findOrCreate({ 
      where: {
        email: req.body.email,
      },
      defaults: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }
    }).then(([user, created]) => {
      if(created){
        res.status(201).json({ msg: "User Created" });
      }else {
        res.status(201).json({ msg: "User Already Exists" });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const signIn = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.status(200).json({ 
      connected: true, 
      id_user: response.id_user,
      name: response.name,
      email: response.email, });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ connected: false, msg: "user not found!" });
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id_user: req.params.id_user,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id_user: req.params.id_user,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

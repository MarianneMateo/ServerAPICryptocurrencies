import Account from "../models/AccountModel.js";
import User from "../models/UserModel.js";

export const getAccounts = async (req, res) => {
  try {
    const response = await Account.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAccountById = async (req, res) => {
  try {
    const response = await Account.findOne({
      where: {
        id_account: req.params.id_account,
      },
    });
    if(response !== null){
      res.status(200).json(response);
    }else {
      res.status(404).json({
        message: "Account doesn't exists",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getAccountByUserId = async (req, res) => {
  try {
    const response = await Account.findOne({
      where: {
        id_user: req.params.id_user,
      },
    });
    if (response !== null) {
      res.status(200).json([{
        hasAccount: true,
        id_account: response.id_account,
        id_user: response.id_user,
        account: response.account,
        amount: response.amount,
      }]);
    } else {
      res.json({ 
        hasAccount: false,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const createAccount = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id_user: req.body.id_user,
      },
    });
    if (response !== null) {
      await Account.findOrCreate({
        where: {
          id_user: req.body.id_user,
        },
        defaults: {
          id_user: req.body.id_user,
          account: req.body.account,
          amount: req.body.amount,
        },
      }).then(([account, created]) => {
        if (created) {
          res.status(201).json({status: true, msg: "Account Created" });
        } else {
          res.status(201).json({status: false, msg: "User Already has an account" });
        }
      });
    } else {
      res.status(201).json({status: false, msg: "User doesn't exist!" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAccount = async (req, res) => {
  try {
    await Account.update(req.body, {
      where: {
        id_account: req.params.id_account,
      },
    });
    res.status(200).json({ msg: "Account Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAccount = async (req, res) => {
  try {
    await Account.destroy({
      where: {
        id_account: req.params.id_account,
      },
    });
    res.status(200).json({ msg: "Account Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

import Crypto from "../models/CryptoModel.js";
import Account from "../models/AccountModel.js";

export const getCryptos = async (req, res) => {
  try {
    const response = await Crypto.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCryptoById = async (req, res) => {
  try {
    const response = await Crypto.findAll({
      where: {
        id_crypto: req.params.id_crypto,
      },
    });
    if (response.length !== 0) {
      res.status(200).json(response);
    } else {
      res.status(404).json({
        message: "Crypto doesn't exists",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getCryptoByUserId = async (req, res) => {
  try {
    const response = await Crypto.findAll({
      where: {
        id_user: req.params.id_user,
      },
    });
    if (response.length !== 0) {
      res.status(200).json(response);
    } else {
      res.json({
        hasCrypto: false,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const createCrypto = async (req, res) => {
  try {
    const response = await Account.findOne({
      where: {
        id_user: req.body.id_user,
      },
    });
    if (response !== null) {
      await Crypto.findOrCreate({
        where: {
          id_crypto: req.body.id_crypto,
          id_user: req.body.id_user,
        },
        defaults: {
          id_crypto: req.body.id_crypto,
          id_user: req.body.id_user,
          name_crypto: req.body.name_crypto,
          photo: req.body.photo,
          amount: req.body.amount,
        },
      }).then(([crypto, created]) => {
        if (created) {
          res.status(201).json({ status: true, msg: "Crypto Created" });
        } else {
          res.status(201).json({
            status: false,
            msg: "This user already owns this cryptocurrency, it can only be updated or deleted",
          });
        }
      });
    } else {
      res.status(404).json({
        hasAccount: false,
        message: "You must create an account, to buy a cryptocurrency",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCrypto = async (req, res) => {
  try {
    await Crypto.update(req.body, {
      where: {
        id_crypto: req.params.id_crypto,
      },
    });
    res.status(200).json({ msg: "Crypto Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCrypto = async (req, res) => {
  try {
    await Crypto.destroy({
      where: {
        id_crypto: req.params.id_crypto,
      },
    });
    res.status(200).json({ msg: "Crypto Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

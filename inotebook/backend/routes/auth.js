const express = require("express");
var bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtSec = "ankitmynameis";
const fetchuser =require('../middleware/fetchuser')
///route 1 Create a User  using :Post  "/api/auth/ createuser" .Dosent Require auth
router.post(
  "/createuser",
  [
    body("name", "Enter valid Name").isLength({ min: 3 }),
    body("email", "Enter valid Email").isEmail(),
    body("password", "Password must be at least 5 character").isLength({
      min: 4,
    }),
  ],
  async (req, res) => {
    // if there are error return bad errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check wheather the users with email allready exist
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ errors: "Sorry a user with this email allready exists" });
      }

      /// salt function
      var salt = await bcrypt.genSaltSync(10);
      var secpass = await bcrypt.hashSync(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwtSec);
      // console.log(authToken);
      res.json(authToken);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error");
    }
  }
);

/// route 2 authentication  using :Post  "/api/auth/login" .Dosent Require auth
router.post(
  "/login",
  [
    body("email", "Enter valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      console.log(passwordCompare);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwtSec);
      res.json(authToken);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
///route 3  Get  a User  details using :Get  "/api/auth/getuser" . Require auth
router.post(
  "/getuser",fetchuser  ,
  async (req, res) => {
    try {
      console.log(res)
      const userId = res.user
      const user = await User.findOne(userId).select("-password");
      res.send(user)
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;

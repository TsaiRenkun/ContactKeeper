const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route POST api/users
// @desc Register a user
// @access Public

router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with a 6  or more characters"
    ).isLength({ min: 6 }),
  ],
  async(req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const {name , email, password} = req.body;

    try {
        let user = await User.findOne( {email} )

        if(user){
            return res.status(400).json({msg: 'User already exists'})
        }
    } catch (error) {
        
    }

    res.send("passed");
  }
);

module.exports = router;

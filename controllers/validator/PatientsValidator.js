const { check, validationResult } = require("express-validator");

const rules = [
  check("name").notEmpty().withMessage("name field cannot be empty!").trim(),

  check("phone")
    .notEmpty()
    .withMessage("the phone field cannot be empty!")
    .isNumeric()
    .withMessage("the phone field must be a number!"),

  check("address").notEmpty().withMessage("address field cannot be empty!"),

  check("status").notEmpty().withMessage("the status field cannot be empty!"),

  check("in_date_at")
    .notEmpty()
    .withMessage("the in_date_at field cannot be empty!"),
];

const validator = [
  rules,
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: "All fields must be filled correctly",
        error: errors.array(),
      });
    }
    next();
  },
];

module.exports = validator;

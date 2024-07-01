const Joi = require("joi");

module.exports = (schema) => (req, res, next) => {
  const result = schema.validate(
    req.body.location
      ? { ...req.body, location: JSON.parse(req.body.location) }
      : req.body
  );

  if (result.error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

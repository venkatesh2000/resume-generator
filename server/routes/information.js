const router = require("express").Router();
const UserInformationSchema = require("../models/InformationSchema.js");

router.post("/postDetails", async (req, res) => {
  try {
    const newDetails = new UserInformationSchema(req.body);
    const details = await newDetails.save();
    res.status(200).json(details);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/create-pdf", (req, res) => {});

module.exports = router;

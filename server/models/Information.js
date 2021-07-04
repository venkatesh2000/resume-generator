const mongoose = require("mongoose");

const UserInformationSchema = mongoose.Schema({});

module.exports = mongoose.model("UserInformation", UserInformationSchema);

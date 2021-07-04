const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const pdf = require("html-pdf");

const authRoute = require("../server/routes/auth.js");
const UserInformationSchema = require("../server/models/InformationSchema.js");
const pdfTemplate = require("../client/src/sample-resumes/1.js");

const options = {
  height: "45cm",
  width: "35cm",
  timeout: "10000",
};

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log(err));

// Route for register and login user
app.use("/auth", authRoute);

//Route to store user details
app.post("/information/postDetails", (req, res) => {
  const newDetails = new UserInformationSchema(req.body);
  const details = newDetails.save();
  details
    .then(() => {
      res.status(200).send(Promise.resolve())
    })
    .catch(() => {
      res.status(500).send(Promise.reject())
    })
});

//Route to get user details
app.post("/information/getDetails", async (req, res) => {
  try {
    const userDetails = await UserInformationSchema.findOne({
      userId: req.body.pathName,
    });
    // !userDetails && res.status(400).json("Wrong credentials!");
    res.status(200).json(userDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/", (req, res) => {
  res.send("Hi!!");
});

// POST route for PDF generation....
app.post("/information/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
    if (err)
      res.status(500).send(Promise.reject())
    else
      res.status(200).send(Promise.resolve())
  });
});

// GET route -> send generated PDF to client...
app.get("/information/fetch-pdf", (req, res) => {
  const file = `${__dirname}/Resume.pdf`;
  res.download(file)
});

app.listen("5000", () => {
  console.log("App running on port 5000");
});

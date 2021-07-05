const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const pdf = require("html-pdf");

const authRoute = require("../server/routes/auth.js");
const User = require("../server/models/User.js");
const UserInformationSchema = require("../server/models/InformationSchema.js");
const pdfTemplate = require("../client/src/sample-resumes/1.js");

const options = {
  height: "45cm",
  width: "35cm",
  timeout: "20000",
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
  UserInformationSchema.updateOne(
    { userId: req.body.userId },
    { ...req.body },
    { upsert: true },
    (err, _) => {
      if (err) res.status(500).send();
      else res.status(200).send();
    }
  );
});

//Route to get user details
app.post("/information/getDetails", (req, res) => {
  UserInformationSchema.findOne(
    { userId: req.body.pathName },
    (err, userDetails) => {
      if (err) res.status(500).json(err);
      else res.status(200).json(userDetails);
    }
  );
});

// Route to delete user resume
app.post("/information/deleteDetails", (req, res) => {
  UserInformationSchema.findOneAndDelete({ userId: req.body.pathName })
    .then((deletedDetails) => {
      if (deletedDetails)
        res
          .status(200)
          .send("Deleted resume details from the database successfully!!");
      else res.status(200).send("Nothing to delete in the database!!");
    })
    .catch((_) => {
      res
        .status(500)
        .send("Sorry, unable to delete resume details from the database!!");
    });
});

app.get("/", (req, res) => {
  res.send("Hi!!");
});

// POST route for PDF generation....
app.post("/information/createPdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
    if (err) res.send(Promise.reject());
    else res.send(Promise.resolve());
  });
});

// GET route -> send generated PDF to client...
app.get("/information/fetchPdf", (req, res) => {
  const file = `${__dirname}/Resume.pdf`;
  res.download(file);
});

//Route to delete user account
app.post("/information/deleteAccount", (req, res) => {
  User.findByIdAndDelete(req.body.pathName, (err) => {
    if (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  });
  UserInformationSchema.findOneAndDelete(
    { userId: req.body.pathName },
    (err) => {
      if (err) {
        res.status(500).json(err);
      }
    }
  );
  res.status(200);
});

app.listen("5000", () => {
  console.log("App running on port 5000");
});

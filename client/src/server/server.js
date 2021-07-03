const express = require("express");
const pdf = require("html-pdf");
const cors = require("cors");

const app = express();

const pdfTemplate = require("../sample-resumes/1.js");

const options = {
    height: "45cm",
    width: "35cm",
    timeout: "6000",
};

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HOLA AMIGOS!!")
})

// POST route for PDF generation....
app.post("/create-pdf", (req, res) => {
    pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
        if (err) {
            console.log(err);
            res.send(Promise.reject());
        } else res.send(Promise.resolve());
    });
});

// GET route -> send generated PDF to client...
app.get("/fetch-pdf", (req, res) => {
    const file = `${__dirname}/Resume.pdf`;
    res.download(file);
});

app.listen(5000, () => console.log("Server started on port 5000"));
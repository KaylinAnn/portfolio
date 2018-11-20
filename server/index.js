const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

app.use(bodyParser.json());

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.get("/", (req, res) => {
  res.send("endpoint live");
});

app.post("/api/send", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;

  const mail = {
    from: name,
    to: "kaylinann89@gmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    console.log(data);

    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

const PORT = 4001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

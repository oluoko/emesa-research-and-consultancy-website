const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
dotenv.config();
const connectDB = require("./config/db.js");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes.js");
const blogRoutes = require("./routes/blogRoutes.js");
const careerRoutes = require("./routes/careerRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes.js");

const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api/config", (req, res) => {
  res.json({ port: process.env.PORT });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, budget, services, description, formType } = req.body;

  let subject = "FROM WEBSITE: " + name;
  if (formType === "service") {
    subject += ` has a service request(${services})`;
  } else if (formType === "contacts") {
    subject += ` has a question`;
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n${
      budget ? `Budget: ${budget}\n` : ""
    }${services ? `Service: ${services}\n` : ""}Description:\n${description}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: "Error sending email", error });
    }
    res.status(200).send({ message: "Email sent successfully", info });
  });
});

const uploadsDir = path.join(__dirname, "/uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/upload", uploadRoutes);

// Serve uploaded files
app.use("/uploads", express.static(uploadsDir));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});

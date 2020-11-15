const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/email", emailRoutes);

app.get("", (req, res) => {
  res.json({ message: "Hello world" });
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${5000}`)
);

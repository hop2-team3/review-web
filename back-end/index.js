const connect = require("./helper/db");
connect();

const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();

const cors = require("cors");
const port = 8000;
const app = express();
const customerRoutes = require("./routes/customerRoutes");
const companyRoutes = require("./routes/companyRoutes");

app.use(cors());
app.use(express.json());
app.use("/customers", customerRoutes);
app.use("/companies", companyRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

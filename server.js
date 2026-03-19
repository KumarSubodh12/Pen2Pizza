const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/pen2pizza")
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/product"));

app.listen(5000, ()=>console.log("Server running on port 5000"));
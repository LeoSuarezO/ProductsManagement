const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.set("port", process.env.port || 3080);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/products', require("./routes/products.routes"));
module.exports=app;
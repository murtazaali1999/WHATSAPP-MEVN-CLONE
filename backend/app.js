const express = require("express");
const morgan = require("morgan"); //logs
const dotenv = require("dotenv"); //environment variables
const cors = require("cors"); //to allow backend and frontend communication, on localhost
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

const app = express();

dotenv.config({ path: "./.env" }); //config.env
app.use(cors({ origin: "http://127.0.0.1:3000", credentials: true })); //cors
app.use(express.json());
app.use(cookieParser()); //cookie parser for sending cookies
mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 4491;
const URI = process.env.MONGO_URI;

if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev")); //for logging if in development mode
}

app.listen(PORT, () => {
    console.log(`PORT STARTED AT ${process.env.PORT} ${process.env.NODE_ENV.toUpperCase()} MODE`);
    mongoose.connect(URI).then(() => {
        console.log("MONGO-DB CONNECTED");
    })
})
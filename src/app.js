const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

//Setting
app.set("port", 3000);
app.set("nameApp", "Primera página con node");
app.set("views", path.resolve(__dirname, "views"))
app.engine("html", require("ejs").renderFile) //para utilizar la extensión html
app.set("view engine", "ejs")

//MiddleWare
app.use(morgan("dev"));

//Routes
app.use(require("./routes"));

//Statics
app.use(express.static(path.resolve(__dirname, "public")));

app.listen(app.get("port"), () => {
    console.log("Server o port ", app.get("port") )
})
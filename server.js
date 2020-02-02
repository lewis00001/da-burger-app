let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controllers.js");
app.use(routes);

app.listen(PORT, function(){
  console.log("Server listening on PORT: " + PORT);
});
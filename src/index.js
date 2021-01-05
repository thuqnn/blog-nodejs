require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const route = require("./routes");
const db = require("./config/db");

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); //middleware

app.use(methodOverride("_method"));

//HTTP Logger
app.use(morgan("combined"));

//Template Engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routers init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

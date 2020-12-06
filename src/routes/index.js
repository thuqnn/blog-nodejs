const newsRouter = require("./news");
const meRouter = require("./me");
const coursesRouter = require("./courses");
const siteRouter = require("./site");

function router(app) {
  // app.get("/", (req, res) => {
  //   res.render("home");
  // });

  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);

  // app.get("/search", (req, res) => {
  //   //console.log(req.query.q); query parameter (q la name o input)
  //   res.render("search");
  // });

  // app.post("/search", (req, res) => {
  //   //console.log(req.body.q); form data
  //   res.send("");
  // });
}

module.exports = router;

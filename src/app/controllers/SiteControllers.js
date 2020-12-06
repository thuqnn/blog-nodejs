const Blog = require("../models/Blog");
const { multipleMongoosetoObject } = require("../../util/mongoose");

class SiteControllers {
  //[GET], news
  index(req, res) {
    Blog.find({}) //go to the models get database
      .then((blogs) => {
        // give to controller
        res.render("home", {
          //render to views
          blogs: multipleMongoosetoObject(blogs),
        });
      })
      .catch((error) => next(error));
    //res.render("home");
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteControllers();

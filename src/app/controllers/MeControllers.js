const Blog = require("../models/Blog");
const {
  mongoosetoObject,
  multipleMongoosetoObject,
} = require("../../util/mongoose");

class MeControllers {
  //[GET], /course/:slug

  //[GET], /me/stored/course
  storedCourse(req, res, next) {
    Blog.find({})
      .then((blog) => {
        //blog to element html
        res.render("me/stored-course", {
          blog: multipleMongoosetoObject(blog),
        }); //view truyen blog qua view
      })
      .catch((error) => next(error));
  }
}

module.exports = new MeControllers();

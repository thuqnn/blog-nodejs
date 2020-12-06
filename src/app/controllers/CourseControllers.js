const Blog = require("../models/Blog");
const { mongoosetoObject } = require("../../util/mongoose");

class SiteControllers {
  //[GET], /courses/:slug

  show(req, res) {
    Blog.findOne({ slug: req.params.slug })
      .then((blog) => {
        res.render("courses/show", { blog: mongoosetoObject(blog) }); //view truyen blog qua view
      })
      .catch((error) => next(error));
  }

  //[GET], /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST], /courses/store
  store(req, res, next) {
    //res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const blog = new Blog(formData);
    blog
      .save() //save to database
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  //[GET], /courses/:id/edit
  edit(req, res, next) {
    Blog.findById(req.params.id)
      .then((blog) => {
        res.render("courses/edit", { blog: mongoosetoObject(blog) }); //view truyen blog qua view
      })
      .catch(next);
  }

  //[PUT], /courses/:id/
  update(req, res, next) {
    Blog.updateOne({ _id: req.params.id }, req.body).then(() =>
      res.redirect("/me/stored/course").catch(next)
    );
  }
}

module.exports = new SiteControllers();

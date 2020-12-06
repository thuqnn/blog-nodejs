const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Blog = new Schema(
  {
    name: { type: String, maxlength: 255, required: true },
    description: { type: String, maxlength: 600 },
    image: { type: String },
    videoId: { type: String },
    level: { type: String, maxlength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", Blog);

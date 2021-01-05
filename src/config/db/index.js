const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("connected fully");
  } catch (error) {
    console.log("connect failure");
  }
}

module.exports = { connect };

const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const postSchema = mongoose.Schema({
  exp:{type:String,required:true},
  startingdate:{type:String,required:true},
  enddate:{type:Number,required:true},

});

postSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Post", postSchema);

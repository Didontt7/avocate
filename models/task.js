const { Types } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        isDone:Boolean,
        Descrption:String,
        idLowyar:{type:Types.ObjectId , ref:"lowyer"}
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Task = mongoose.model("task", schema);
    return Task;
  };
  
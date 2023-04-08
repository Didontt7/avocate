const { Types } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        time :Date,
        Descrption:String,
        idcase:{type:Types.ObjectId , ref:"case"}
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const TimeLine = mongoose.model("timeline", schema);
    return TimeLine;
  };
  
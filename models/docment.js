const { Types } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        Descrption:String,
        idClient:{type:Types.ObjectId , ref:"client"},
        idLowyar:{type:Types.ObjectId , ref:"lowyer"}
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Docment = mongoose.model("docment", schema);
    return Docment;
  };
  
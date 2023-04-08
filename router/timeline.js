
module.exports = app => {
    const TimeLine = require("../controller/timeline");
    var router = require("express").Router();
      
    
      router.post("/add",TimeLine.create);
      router.put("/Update/:id",TimeLine.Update);
      router.get("/",TimeLine.FindALL);
      router.get("/find/:id",TimeLine.FindOne);
      router.delete("/Delet/:id",TimeLine.DeletOne);
      router.delete("/Delet",TimeLine.DeletALL);
    
      app.use("/TimeLine", router);
  };
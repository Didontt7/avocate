
module.exports = app => {
  const docment = require("../controller/docment");
  var router = require("express").Router();
    
  
    router.post("/add",docment.create);
    router.put("/Update/:id",docment.Update);
    router.get("/",docment.FindALL);
    router.get("/find/:id",docment.FindOne);
    router.delete("/Delet/:id",docment.DeletOne);
    router.delete("/Delet",docment.DeletALL);
  
    app.use("/Docment", router);
    
};
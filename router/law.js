
module.exports = app => {
    const law = require("../controller/law");
    var router = require("express").Router();
      
    
      router.post("/add",law.create);
      router.put("/Update/:id",law.Update);
      router.get("/",law.FindALL);
      router.get("/find/:id",law.FindOne);
      router.delete("/Delet/:id",law.DeletOne);
      router.delete("/Delet",law.DeletALL);
    
      app.use("/Law", router);
  };
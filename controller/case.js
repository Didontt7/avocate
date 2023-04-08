const db = require("../models");
const Cases = db.Cases;



// Create and Save a new Case
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    const Name= req.body.Name;
    const Number = req.body.Number;
    const Price= req.body.Price;
    const opponent =req.body.opponent;
    const Location=req.body.Location;
   const Gugement =req.body.Gugement;
   const GDate = req.body.GDate ? new Date(req.body.GDate) : new Date();
   const Descrption=req.body.Descrption;
  const idClient = req.body.idClient;
  const idLowyar =req.body.idLowyar;
    

  const newCase = new Cases({
    Name,
     Number ,
     Price,
     opponent, 
    Location,
    Gugement ,
     GDate ,
    Descrption,
    idClient,
    idLowyar,

  });

// Save Tutorial in the database
  newCase.save()
  .then(() => res.json('Case  added!'))
  .catch(err => res.status(400).json('Error: Some error occurred while creating the case....' + err));

    
    
  };

  exports.FindALL = (req, res) => {

    Cases.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Case."
        });
      });
    
  };

  exports.FindOne = (req, res) => {
    Cases.findById(req.params.id)
    .then(Case => res.json(Case))
    .catch(err => res.status(400).json('Error: ' + err));

    
  };

  exports.DeletOne = (req, res) => {

    Cases.findByIdAndDelete(req.params.id)
    .then(() => res.json('Case deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
    
  };

  exports.DeletALL = (req, res) => {
   Cases.deleteMany({})
   .then(data => {
    res.send({
      message: `${data.deletedCount} Cases were deleted successfully!`
    });
    })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all Case."
    });
    });

  };


  exports.Update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Cases.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Cases with id=${id}. Maybe Cases was not found!`
          });
        } else res.send({ message: "Cases was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Cases with id=" + id
        });
      });
  };
  



/*
exports.Update = (req, res) => {
  Cases.findById(req.params.id)

  .then(Case => {

    Case.Name= req.body.Name;
    Case.Number = req.body.Number;
    Case.Price= req.body.Price;
    Case.opponent =req.body.opponent;
    Case.Location=req.body.Location;
   Case.Gugement =req.body.Gugement;
    Case.GDate =Date.parse(req.body.date);
   Case.Descrption=req.body.Descrption;

    Case.save()
      .then(() => res.json('Case updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })

  .catch(err => res.status(400).json('Error: ' + err));
  };*/

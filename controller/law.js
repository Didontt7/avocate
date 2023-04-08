const db = require("../models");
const Law = db.law;

// Create and Save a new Law
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Title can not be empty!" });
    return;
  }
    const title= req.body.title;
   const  CratedDate= req.body.CratedDate ? new Date(req.body.CratedDate) : new Date();
    const Descrption= req.body.Descrption;
   const idcase= req.body.idcase;

  // Create a Law
  const law = new Law({
    title,
    CratedDate,
    Descrption,
    idcase,
  });

  // Save Law in the database
  law.save(law)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Law."
      });
    });
};



exports.FindALL = (req, res) => {

    Law.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Law."
        });
      });
    
  };

  
  exports.FindOne = (req, res) => {
    Law.findById(req.params.id)
    .then(Case => res.json(Case))
    .catch(err => res.status(400).json('Error: ' + err));

    
  };


  exports.DeletOne = (req, res) => {

    Law.findByIdAndDelete(req.params.id)
    .then(() => res.json('Law deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
    
  };



  
  exports.DeletALL = (req, res) => {
    Law.deleteMany({})
    .then(data => {
     res.send({
       message: `${data.deletedCount} Law were deleted successfully!`
     });
     })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while removing all Law."
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
  
    Law.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Law with id=${id}. Maybe Law was not found!`
          });
        } else res.send({ message: "Law was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Law with id=" + id
        });
      });
  };


  /*
  
   exports.Update = (req, res) => {
    Law.findById(req.params.id)
  
    .then(LAW => {
  
        Law.title= req.body.title;
        Law.CratedDate= req.body.CratedDate ? new Date(req.body.CratedDate) : new Date();
        Law.Descrption= req.body.Descrption;
        Law.idcase= req.body.idcase;
     
        LAW.save()
        .then(() => res.json('Law updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
  
    .catch(err => res.status(400).json('Error: ' + err));
    };
    */

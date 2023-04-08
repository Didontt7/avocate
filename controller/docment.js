const db = require("../models");
const Docment = db.Docment;

exports.create = (req, res) => {
   

      const  title= req.body.title;
      const Descrption= req.body.Descrption;
      const idClient= req.body.idClient;
      const  idLowyar = req.body.idLowyar;
  
    const docment = new Docment({
      title,
      Descrption,
      idClient,
      idLowyar,
    });
  
    docment.save((err, docment) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      res.send({ message: "Document created successfully", docment });
    });
  };

  
  exports.FindALL = (req, res) => {

    Docment.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Docment."
        });
      });
    
  };

  
  exports.FindOne = (req, res) => {
    Docment.findById(req.params.id)
    .then(Case => res.json(Case))
    .catch(err => res.status(400).json('Error: ' + err));

    
  };


  exports.DeletOne = (req, res) => {

    Docment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Docment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
    
  };



  
  exports.DeletALL = (req, res) => {
    Docment.deleteMany({})
    .then(data => {
     res.send({
       message: `${data.deletedCount} Docment were deleted successfully!`
     });
     })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while removing all Docments."
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
  
    Docment.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Docment with id=${id}. Maybe Docment was not found!`
          });
        } else res.send({ message: "Docment was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Docment with id=" + id
        });
      });
  };
  

/*
   exports.Update = (req, res) => {
    Docment.findById(req.params.id)
  
    .then(doc => {
  
        Docment.title= req.body.title;
        Docment.Descrption= req.body.Descrption;
        Docment.idClient= req.body.idClient;
        Docment.idLowyar = req.body.idLowyar;
  
        doc.save()
        .then(() => res.json('Docment updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
  
    .catch(err => res.status(400).json('Error: ' + err));
    };*/
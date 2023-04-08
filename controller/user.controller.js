exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.lowyerBoard = (req, res) => {
    res.status(200).send("Lowyer Content.");
  };
  
  exports.EmployeBoard = (req, res) => {
    res.status(200).send("Employe Content.");
  };
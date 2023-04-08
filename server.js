const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/dbconfig");
const morgan = require("morgan") ;
const {log} = require("mercedlogger"); 
const mongoose = require('mongoose');


require('dotenv').config();
const PORT = process.env.PORT || 8000;


const db =require("./models");
const role = db.role;
const uri =`mongodb+srv://nouha2001:nouha2001@cluster0.pehxi.mongodb.net/?retryWrites=true&w=majority`;

mongoose
.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


const app = express();
app.use(cors());
app.use(morgan("tiny"))
app.use(express.json());


//routers
require("./router/case")(app);
require("./router/auth.routes")(app);
require("./router/user.routes")(app);
require("./router/docment")(app);
require("./router/fee")(app);
require("./router/law")(app);
require("./router/task")(app);
require("./router/timeline")(app);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to your application." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new role({
        name: "Lowyer"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Lowyer' to roles collection");
      });

      new role({
        name: "Employe"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Employe' to roles collection");
      });
    }
  });
}
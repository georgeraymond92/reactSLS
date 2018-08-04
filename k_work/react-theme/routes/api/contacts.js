const router = require("express").Router();
const db = require("../models");

// Matches with "/api/contacts"
router.route("/")
    .post(function(req, res){
        console.log("contactRoutes")

        const contact = {
        _id: req.body._id,
    };
    db.Contact
        .create(contact)
        .then(dbContact => res.json(dbContact))
        .catch(err => res.status(422).json(err));
  }
  
  );
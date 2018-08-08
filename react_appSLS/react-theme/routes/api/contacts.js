const db = require("../../models");

const router = require("express").Router();

//should it be "/api/contacts",?
router.post("/contacts", function(req, res){
        console.log("contactRoutes")
        // .post(contactRoutes.create);
        console.log(req.body)
        // API.saveContact({  OR?????
    //     const contact = {
    //     _id: req.body._id,
    //     name: req.body.name,
    //     serv: req.body.serv,
    //     phone: req.body.phone,
    //     email: req.body.email,
    //     location: req.body.location
    // };
    // db.Contact
    //     .create(contact)
    //     .then(dbContact => res.json(dbContact))
    //     .catch(err => res.status(422).json(err));
}

// if i had a controller something like this would be
// inside it:(does whats above work same way?)
// },
// create: function(req, res) {
//   db.Book
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));



);

module.exports = router;




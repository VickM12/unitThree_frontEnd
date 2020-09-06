const express = require('express');
const router = express.Router();
const Spoofy = require('../models/spoofy.js');

router.get('/', (req, res) => {

    Spoofy.find({}, (error, allSpoofy) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(allSpoofy)
    });
});


// Delete
router.delete('/:id', (req, res) => {
    Spoofy.findByIdAndRemove(req.params.id, (error, spoofy) => {
      error ?
      res.status(404).json(error):
      res.status(200).json(bookmark)
    });
});



// Update
router.put('/:id', (req, res) => {
    req.body.title = req.body.imageUrl === "on" ? true : false;

    Spoofy.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedSpoofy) => {
      error ?
      res.status(404).json(error):
      res.status(200).json(updatedSpoofy)
    });
});



// Create
router.post('/', (req, res) => {

    Spoofy.create(req.body, (error, createdSpoofy) => {

        error ?
        res.status(404).json(error):
        res.status(200).json(createdSpoofy)
    });
});




// Show
router.get('/:id', (req, res) => {

    Spoofy.findById(req.params.id, (error, foundSpoofy) => {

        error ?
        res.status(404).json(error):
      res.status(200).json(foundSpoofy)
    });
});

// export router
module.exports = router;

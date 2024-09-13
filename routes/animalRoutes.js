const express = require('express');
const router = express.Router();
const {
  getAnimals,
  addAnimal,
  updateAnimal,
  deleteAnimal
} = require('../controllers/animalController');

// Route to get all animals
router.get('/animals', getAnimals);

// Route to add a new animal
router.post('/animals', addAnimal);

// Route to update an animal
router.put('/animals/:id', updateAnimal);

// Route to delete an animal
router.delete('/animals/:id', deleteAnimal);

module.exports = router;

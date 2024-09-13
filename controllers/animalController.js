const Animal = require('../models/Animal');

// Get all animals
exports.getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching animals', error });
  }
};

// Add new animal
exports.addAnimal = async (req, res) => {
  try {
    const { name, species, age, description } = req.body;
    const newAnimal = new Animal({ name, species, age, description });
    await newAnimal.save();
    res.status(201).json(newAnimal);
  } catch (error) {
    res.status(500).json({ message: 'Error adding animal', error });
  }
};

// Update animal
exports.updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAnimal = await Animal.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAnimal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.status(200).json(updatedAnimal);
  } catch (error) {
    res.status(500).json({ message: 'Error updating animal', error });
  }
};

// Delete animal
exports.deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnimal = await Animal.findByIdAndDelete(id);
    if (!deletedAnimal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.status(200).json({ message: 'Animal deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting animal', error });
  }
};

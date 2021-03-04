//refering to the controllers in the examples
//controllers will run based on the route that we hit
//first 2 lines can be used in the index.js under routes since it will be hitting the same routes


const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.example.index);
router.get('/:id', ctrl.example.show);
router.post('/', ctrl.example.create);
router.put('/:id', ctrl.example.update);
router.delete('/:id', ctrl.example.destroy);

// exports
module.exports = router;

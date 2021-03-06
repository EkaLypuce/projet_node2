const express = require('express');
const router = express.Router();

const CategorieController = require('../../controller/categorieController');
const categorieController = new CategorieController();

router.get('/', function (req, res) {
    categorieController.findAll(res);
});

router.get('/:id', function (req, res) {
    console.log(req.params);
    categorieController.findById(req, res);
});

router.get('/:deg', function (req, res) {
    console.log(req.params);
    categorieController.compareDeg(req, res);
});

router.post('/', function (req, res) {
    categorieController.create(req,res);
});
router.put('/:id', function (req, res) {
    categorieController.update(req, res)
});
router.get('/degreSup/:id',function(req,res) {
    
});
router.delete('/:id', function (req, res) {
    categorieController.deleteById(req, res)
});


module.exports = router;
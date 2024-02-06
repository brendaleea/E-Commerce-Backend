const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  }).then(db => {
  
    if (!db) {
      res.status(404).json({ message: 'Not found any tags' });
      return;
    }
  
    res.json(db);
  }).catch(error => {
   
    res.status(500).json(error);
    console.log(error);
  });

});


router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Products data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }

  }).then(data => {
    
    if (!data) {
      res.status(404).json({ message: 'Requested Tag is not found' });
      return;
    }
  
    res.json(data);
  }).catch(error => {
   
    res.status(500).json(error);
    console.log(error);
  });

});

//create new tag
router.post('/', (req, res) => {
 
  Tag.create({

    tag_name: req.body.tag_name

  }).then(data => {
   
    res.json(data);
  }).catch(error => {
   
    res.status(500).json(error);
    console.log(error);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by tag `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(data => {

  
    if (!data) {
      res.status(404).json({ message: 'Requested Tag is not found' });
      return;
    }
    
    res.json(data);
  }).catch(error => {
    
    res.status(500).json(error);
    console.log(error);
  });

});

// Delete Tag by Tag id.
router.delete('/:id', (req, res) => {
 
 Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
  
    if (!data) {
      res.status(404).json({ message: 'Requested Tag is not found' });
      return;
    }
    
    res.json(data);
  }).catch(error => {
    
    res.status(500).json(error);
    console.log(error);
  });

});

module.exports = router;

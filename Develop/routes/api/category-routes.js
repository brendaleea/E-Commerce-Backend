const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll()
  res.json(categories)
  } catch (error) {
  console.log (error)  
  }
  
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categories= await Category.findOne ({
      where:{
        id:req.params.id
      }
    })
    res.json(categories)
  } catch (error) {
   console.log (error) 
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category= await Category.create(req.body);
    res.json(category)
  } catch (error) {
    console.log(error)
    
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

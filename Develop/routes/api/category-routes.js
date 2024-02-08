const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//http://localhost:3001/api/categories/
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [Product]
    })
  res.json(categories)
  } catch (error) {
  console.log (error)  
  }
  
});
//http://localhost:3001/api/categories/1
router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categories= await Category.findOne ({
      where:{
        id:req.params.id
      },
      include: [Product]
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

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
      const category = await Category.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.json(category)
  } catch (error) {
    console.log(error)
  }
});

router.delete('/:id', async (req, res) => {
  try{

    const category = await Category.destroy({
      where: {
        id: req.params.id
      },
    })
      res.json(category)
  }  catch (error) {
    console.log(error)
  }
  // delete a category by its `id` value
  

});

module.exports = router;

const express = require('express');
const router = express.Router();

//Model Items
const Item = require('../../models/Item');

//@routes Get api/items
//@desc   Get all items
//@access Public

router.get('/', (req,res) => {
    Item.find()
    .sort({date: -1})
    .then( items => {
        console.log('items ', items);
        res.json(items)
    })
})

//@routes Get api/items
//@desc   Get all items
//@access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then( item => res.json(item))
})

//@routes Get api/items
//@desc   Get all items
//@access Public

router.delete('/:id', (req, res) => {
    Item.findById(params.req.id)
    .then( item => {
        return item.remove
            .then(()=> res.json({success: true}))
            .catch( err => console.log(err))

    })
})

module.exports = router;
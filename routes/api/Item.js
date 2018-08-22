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
        return res.json(items)
    })
})

//@routes POST api/items
//@desc   Post an item
//@access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
    .then( item => res.json(item))
    .catch( err => res.json(err))
})

//@routes DELETE api/items
//@desc   Delete an item
//@access Public

router.delete('/:id', (req, res) => {
    Item
    .findById(req.params.id)
    .then( item => {
        return item.remove()
            .then(()=> res.json({success: true}))

    })
    .catch( () => res.status(400).json({success: false}))
})

module.exports = router;
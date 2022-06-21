const router = require('express').Router();

const todoItemsModel = require('../models/todoItems');

router.post('/api/item' , async(req, res) => {
    try{
        const newItem = new todoItemsModel({
            item: req.body.item
        })

        const saveItem = await newItem.save()
        res.status().json('Item Added Successfully')
    } catch(err){
        res.json(err);
    }
})

module.exports= router;
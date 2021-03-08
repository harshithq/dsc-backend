const express = require('express')
const router = express.Router()
const Listing = require('../models/listing')


router.get('/', async(req,res) => {
    try{
           const listings = await Listing.find()
           res.json(listings)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.get('/:id', async(req,res) => {
    try{
           const  listings= await Listing.findById(req.params.id)
           res.json(listings)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const listings = new Listing({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        categoryID: req.body.categoryID,
        location : req.body.location
    })

    try{
        const a1 =  await Listing.create(req.body) 
        res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})



module.exports = router
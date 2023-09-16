const express = require('express');
const router = express.Router()
const Spells = require('../models/spells')

//INDUCES

//Index
router.get('/', async (req, res) => {
    const foundSpell = await Spells.find({})
    // console.log(foundSpell)
    res.render('index.ejs', {
        spellNames: foundSpell
    })
    
})

//New
router.get('/new', (req, res) => {
    res.render('new.ejs')
})


//Delete
router.delete('/:id', async (req, res) => {
    const deleteSpell = await Spells.findByIdAndDelete(req.params.id)
    res.redirect('/spells')
})

//Update
router.put('/:id', async (req, res) => {
    const updatedSpell = await Spells.findByIdAndUpdate(req.params.id, req.body, {new: true})
    // console.log(updatedSpell)
    res.redirect(`/spells/${req.params.id}`)
})

//Create
router.post('/', async (req, res) => {
    try {
        const newSpell = await Spells.create(req.body)
        res.redirect('/spells')
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

//Edit
router.get('/:id/edit', async (req, res) => {
    const editSpell = await Spells.findById(req.params.id)
    res.render('edit.ejs', {
        spellNames: editSpell
    })
})

//Seed 
router.get('/seed', async (req, res) => {
    //  Fetch and show data from the API
   const apiData = await fetch('https://www.dnd5eapi.co/api/spells')
   const data = await apiData.json()
   
   data.results.forEach(async (spell) => {
    await Spells.create ([
        {
            name: spell.name
        }

    ]);
    
   });
        
    res.render('index.ejs', { title: 'Spells', data });
    
});

// Show
router.get('/:id', async (req, res) => {
    const showSpell = await Spells.findById(req.params.id)
    // console.log(showSpell)
    res.render('show.ejs', {
        spellNames: showSpell
    })
})


module.exports = router

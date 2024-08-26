const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');


// GET ALL GIGS
router.get('/', (req, res) =>
    Gig.findAll()
        .then(gigs => {
            console.log(gigs)
            res.sendStatus(200);
        })
        // .then(gigs => res.render('gigs', {gigs}))
        .catch(err => console.log(err)));

// Add a gig
router.get('/add', (req, res) => {
    
    const data = {
        title: 'Simple Wordpress website',
        technologies: 'Wordpress, PHP, HTML, CSS',
        budget: '$1000',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        contact_email: 'user2@gmail.com'
    }

    let {title, technologies, budget, description, contact_email} = data;

    // Insert into table
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err));
});

module.exports = router;
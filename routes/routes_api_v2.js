const express = require('express');
const router = express.Router();
const path = require('path');
const recipes = require('../recipes.js');

router.get('/info', (req, res) => {
    res.status(200);
    res.json({
        "description": "This is a RESTful server API."
    });
});

router.get('/recipes/:number', (req, res, next) => {
    res.json(recipes[req.params.number-1]);
});

router.get('/recipes/:category?', (req, res, next) => {
    const category = req.query.category || '';

    let result = [];
    if (category === '') {
        result = recipes;
    } else {
        result = recipes.filter(function (item) {
            return (item.category === category);
        });
    }

    res.json(result);
});

router.get('/recipes', (req, res, next) => {
    res.status(200);
    res.json(recipes);
});

router.get('*', (req, res) => {
    res.status(404);
    res.json({
        "Error": "404 - Not found"
    });
});

module.exports = router;
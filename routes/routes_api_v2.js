const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/info', (req, res) => {
    res.status(200);
    res.json({
        "description": "This is a RESTful server API."
    });
});

router.get('*', (req, res) => {
    res.status(404);
    res.json({
        "Error": "404 - Not found"
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('*', (req, res) => {
   res.status(200);
   res.json({
       "description": "Recipes REST server API version 1 is no longer supported. Please use API version 2."
   });
});

module.exports = router;
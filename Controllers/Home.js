const express = require('express');
const router = express.Router();


router.all('/**', (req, res, next) => {


    return res.json({

        "message": "this Home"
    });
});


module.exports = router;
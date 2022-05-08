const express = require('express'), router = express.Router();
const { body, validationResult, param } = require('express-validator');

// This is /api/
router.get('/', function(req, res){
    res.status(200).send();
})

/*
Anything passed here gets set as the id parameter, 
For example: /api/12345     ->   id will become 12345
Or even: /api/test=5    ->   id will become test=5
*/
router.get('/:id', [
    param('id').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: 'Invalid input' });
    }
    try {
        const { id } = req.params;
        res.status(200).send();
    } catch (e) {
        console.log("Failed get _id with error: ", e)
    }
})

// curl -H "Content-Type: application/json" -X POST -d "{\"data\":\"testing\"}" localhost:3001/api/anything
router.post('/:id', [
    body('data').isString().notEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: 'Invalid input' });
    }
    const { id } = req.params;
    const sanitisedBody = req.body;

    console.log('post to id', req.body);
    /*
    Connect, getCollection, insert, return result
    ...
    */
   res.status(200).send();
})
 
module.exports = router;
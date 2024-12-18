const express = require('express')
const router = express.Router();
const sqlExec = require('../../lib/sqlExecute');

router.get('/', async function (req, res, next) {
    try {
        var response = await sqlExec(req, res, next, {
            sql:`select * from celebs`,
            values:[]
        });

        return res
            .status(200)
            .json({
                data: response
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                pesan: 'error' + error
            })
    }
})



module.exports = router;

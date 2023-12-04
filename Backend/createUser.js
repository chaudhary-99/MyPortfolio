const express = require('express')
const user = require('./user');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// router.post(' ',
//     body('email', 'not valide mail').isEmail()
//     , async (req, res) => {
//         const error=validationResult(req);
//         if(!error.isEmpty()){
//             return res.status(400).json({errors:error.array()})
//         }
//         try {
//             user.create({
//                 name: "Abhishek",
//                 email: "Abhi@gmail.com",
//                 msg: "hello"
//             })
//             res, json({ success: true })
//         } catch (err) {
//             res.json({ success: false })
//         }
//     })

router.post('/h',async (req,res)=>{
    try {
        user.create({
            name: req.body.name,
            email: req.body.email,
            msg: req.body.msg
        })
        res.json({ success: true })
    } catch (err) {
        console.log(err)
        res.json({ success: false })
    }
})

module.exports = router;




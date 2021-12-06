const express = require('express');
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
    res.render('form', { title: 'Add new Message' })
})

router.post('/new', (req, res) => {
    const { message, author } = req.body;
    messages.push({ text: message, user: author, added: new Date(), })


})

module.exports = router;

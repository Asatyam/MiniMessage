var express = require('express');
var router = express.Router();

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
router.get('/', function (req, res) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function (req, res) {
  res.render('form');
})
router.get('/back',function(req,res){
  res.redirect('/');
})
router.post('/new', function (req, res) {
  const messageText = req.body.message;
  const user = req.body.author;
  messages.push({ text: messageText, user: user, added: new Date() });
  res.redirect('/');
})

module.exports = router;

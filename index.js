const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/business_rating', function(req, res){
  	res.send("hello, test")
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  request
    .get('http://fruityvice.com/api/fruit/all')
    .then(result => {
      const parseResult = JSON.parse(result.text)
      res.json(parseResult)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router

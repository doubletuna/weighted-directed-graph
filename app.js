const path = require('path')
const express = require('express')
const app = express()

require('dotenv').config()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const routeRoutes = require('./routes/route')
app.use(routeRoutes)

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

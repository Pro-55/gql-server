const express = require('express')
const env = require('dotenv').config()
const gqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./connection')
const app = express()
const port = process.env.PORT

connectDB()

app.use('/graphql', gqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(port, () => callBack())

function callBack() {
  console.log("Server is up on port:" + port)
}
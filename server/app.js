const express = require('express')
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./schema/schema')

const app = express();

app.use('/graphql', createHandler({schema}))

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})
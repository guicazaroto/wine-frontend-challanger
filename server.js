const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

// server files from dist folder
app.use(serveStatic(path.join(__dirname, 'dist')))

const port = process.env.PORT || 5000
app.listen(port)

console.log('Server started at: ' + port)
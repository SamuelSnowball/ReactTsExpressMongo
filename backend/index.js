const express = require('express')
const cors = require('cors')
const port = 3001
const app = express()
const apiRoutes = require('./apiRoutes')
app.use(cors())
app.use(express.json())
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`MongoDB container listening on port ${port}`)
})
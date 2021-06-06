const http = require('http')
const { connectFunc } = require('./utils/database')
const { router } = require('./routes/router')

// db connection - mongoDB
connectFunc()

const server = http.createServer((req, res) => {
    router(req, res)
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log('[server-log] Server running on port: %d', PORT))

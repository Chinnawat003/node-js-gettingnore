const http = require('http')
const msg = require('./message.js')

const host = "localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/pain"})
    res.write(`${msg.message} I like a cat`)
    res.end()
}).listen(PORT, ()=>{
    console.log('Start Sever runing at http//:${host}:{PORT}')
})
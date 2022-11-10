//https://github.com/Marak/colors.js
import colors from 'colors'

const http = require('http')

const port = 3000

const handleServer = (req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' })
  res.write('<h1>Hola mundo desde NodeJS</h1>')
  res.end()
}

const server = http.createServer(handleServer)

server.listen(port, () => {
  console.log(` Server on port :>> ${port} `.inverse)
})


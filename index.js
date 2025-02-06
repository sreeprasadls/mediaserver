const jsonServer=require('json-server')

const server=jsonServer.create()

server.use(jsonServer.defaults())
server.use(jsonServer.router('db.json'))

const PORT = 3000 || process.env.PORT

server.listen(PORT,()=>{
    console.log("Server running  at ",PORT)
})
// import json server
const jsonServer=require('json-server')

// create server for mediaplayer application

const Mpserver=jsonServer.create()

// create middileware

const middileware=jsonServer.defaults()

// set routes for json file in server

const route=jsonServer.router('db.json')

// setting port for running server application

const PORT=3000||process.env.PORT

Mpserver.use(middileware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`media player is running at the port ${PORT} and waiting for client request`);
    
})

const express= require ('expess');
const app = express();
const server = require('http').server(app);

app.get('/', (req, res) => {
    res.send('hi')
  })

server.listen(process.env.PORT || 3000);



// const io = require('socket.io')(server)
// const { ExpressPeerServer } = require('peer');
// const peerServer = ExpressPeerServer(server, {
//  debug: true
// });
// const { v4: uuidV4 } = require('uuid')

// app.use('/peerjs', peerServer);

// app.set('view engine', 'ejs')
// app.use(express.static('public'))



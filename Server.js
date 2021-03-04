const express= require ('expess');
const app = express();

const server = require('http').server(app);
const io = require('socket.io')(server)
const { v4: uuidv4 } = require('uuid');


app.set('view engine' , 'ejs');
app.use(express.statics('public'));

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
  });

  app.get('/', (req, res) => {
    res.render('room', {roomId: req.params.room});
  });

  io.on('connection',( socket ) => {
    socket.on('join-room', () => {

      console.log('bini joined');
    });
      // socket.join(roomId)
      // socket.to(roomId).broadcast.emit('user-connected', userId);
      // // messages
      // socket.on('message', (message) => {
      //   //send message to the same room
      //   io.to(roomId).emit('createMessage', message)
    }); 
  

server.listen(process.env.PORT || 3000);




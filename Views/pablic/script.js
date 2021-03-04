const socket = io('/');
const videoGrid = document.getElementById('video-grid')
// const myPeer = new Peer(undefined, {
//   path: '/peerjs',
//   host: '/',
//   port: '443'
// })

const myVideo = document.createElement('video')
myVideo.muted = true;
let myVideoStream;

// const peers = {}
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: false,

})

.then(stream => {
  myVideoStream = stream;
  addVideoStream(myVideo, stream);


//   myPeer.on('call', call => {
//     call.answer(stream)
//     const video = document.createElement('video')
//     call.on('stream', userVideoStream => {
//       addVideoStream(video, userVideoStream)
//     })
})

socket.emit('join-room')

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
     video.play()
    })
    videoGrid.append(video);
  }
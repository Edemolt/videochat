let local_stream; // local camera and audio 
let remote_stream // remote camera and audio

let peer_connection // initial peer connectiion

let init = async () => {
    // use the navigator to get media from window... using only video and audio
    // audioo false cause.. echo aa rhi thi
    local_stream = await navigator.mediaDevices.getUserMedia({video: true, audio:false});
    document.getElementById('user-1').srcObject = local_stream;
    create_offer();
}

// connectiung 2 peeers together, creating an offer => then sending the offer to another pear along with the ice candidate
let create_offer = async () => {
    // interface that stores all the info between me and the remote peer + methods for it
    peer_connection = new RTCPeerConnection();

    // setting up a media stream in the video player 2
    remote_stream = new MediaStream();
    document.getElementById('user-2').srcObject = remote_stream;

    // creating an offer
    let offer = await peer_connection.createOffer() // has an offer and an answer
    // setting the local description
    await peer_connection.setLocalDescription(offer);
    console.log("offer", offer);
}

init();


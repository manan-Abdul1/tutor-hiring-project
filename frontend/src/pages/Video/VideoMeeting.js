import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Peer from "simple-peer";
import io from "socket.io-client";

const socket = io.connect('http://localhost:5500');

const VideoMeeting = () => {
    const { videoId } = useParams();
    const [peer, setPeer] = useState();
    const [stream, setStream] = useState();
	const [ callEnded, setCallEnded] = useState(false)
    const navigate = useNavigate();
    const myVideo = useRef();
  
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
          setStream(stream);
          myVideo.current.srcObject = stream;
      
          // Join the meeting room.
          socket.emit("joinRoom", videoId);
      
          // Listen for other users joining the meeting room.
          socket.on("allUsers", (users) => {
            // If the user is the initiator, create a new peer connection and signal the other users.
            if (users.length > 1) {
              const newPeer = new Peer({
                initiator: true,
                trickle: false,
                stream,
              });
      
              newPeer.on("signal", (signal) => {
                socket.emit("sendingSignal", { userToSignal: users[0], callerID: socket.id, signal });
              });
      
              setPeer(newPeer);
            }
          });
      
          // Listen for other users signaling to the user.
          socket.on("userJoined", (payload) => {
            // If the user is not the initiator, accept the signal from the other user and create a new peer connection.
            if (payload.callerID !== socket.id) {
              const newPeer = new Peer({
                initiator: false,
                trickle: false,
                stream,
              });
      
              newPeer.on("signal", (signal) => {
                socket.emit("returningSignal", { signal, callerID: payload.callerID });
              });
      
              newPeer.signal(payload.signal);
      
              setPeer(newPeer);
            }
          });
      
          // Listen for the peer connection to receive data from other users.
          socket.on("receivingReturnedSignal", (payload) => {
            // Add the other user's video and audio tracks to the user's peer connection.
            peer.addTrack(payload.stream.getVideoTracks()[0]);
            peer.addTrack(payload.stream.getAudioTracks()[0]);
          });
        });
      
        // Destroy the peer connection when the component is unmounted.
        return () => {
            if (peer) {
              peer.destroy();
              setPeer(null);
            }
          };
      }, [videoId]);
      
  const endMeeting = async () =>{
    try {
        setCallEnded(true);
        navigate('/home');
        window.location.reload();
    } catch (error) {
        console.log(error)
    }

  }
    return (
      <div className="container">
        <div className="video-container">
          <div className="video">
            {stream && !callEnded && <video playsInline  ref={myVideo} autoPlay style={{ width: "300px" }} />}
          </div>
          {peer && !callEnded && (
            <div className="video">
              <video playsInline ref={(ref) => ref && (ref.srcObject = peer.streams[0])} autoPlay style={{ width: "300px" }} />
            </div>
          )}
        </div>
        <button onClick={endMeeting}>End Meeting</button>
      </div>
    );
  };
  

  
  export default VideoMeeting;
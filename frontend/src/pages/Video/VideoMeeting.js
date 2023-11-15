


import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Peer from "simple-peer";
import io from "socket.io-client";

const socket = io.connect('http://localhost:5500');

const VideoMeeting = () => {
  const { videoId } = useParams();
  const [peer, setPeer] = useState();
  const [stream, setStream] = useState();
  const [callEnded, setCallEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();
  const myVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setStream(stream);
      myVideo.current.srcObject = stream;

      // Join the meeting room.
      socket.emit("joinRoom", videoId);

      // ... (rest of your existing code for setting up peer connections)

    });

    // Destroy the peer connection when the component is unmounted.
    return () => {
      if (peer) {
        peer.destroy();
        setPeer(null);
      }
    };
  }, [videoId]);

  const toggleMute = () => {
    // Toggle the microphone mute state
    setIsMuted((prevMuted) => !prevMuted);

    // If there is a peer connection, update its audio tracks
    if (peer) {
      const audioTracks = stream.getAudioTracks();
      audioTracks.forEach((track) => {
        track.enabled = !isMuted; // Toggle the track state
      });
    }
  };

  const toggleCamera = () => {
    // Toggle the camera state
    setIsCameraOn((prevCameraOn) => !prevCameraOn);

    // If there is a peer connection, update its video tracks
    if (peer) {
      const videoTracks = stream.getVideoTracks();
      videoTracks.forEach((track) => {
        track.enabled = isCameraOn; // Toggle the track state
      });
    }
  };

  const endMeeting = async () => {
    try {
      setCallEnded(true);
      // Close the peer connection or any other cleanup logic
      if (peer) {
        peer.destroy();
        setPeer(null);
      }
      navigate('/home');
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container">
      <div className="video-container">
        <div className="video">
          {stream && !callEnded && (
            <video playsInline ref={myVideo} autoPlay muted={isMuted} style={{ width: "300px" }} />
          )}
        </div>
        {peer && !callEnded && (
          <div className="video">
            <video playsInline ref={(ref) => ref && (ref.srcObject = peer.streams[0])} autoPlay style={{ width: "300px" }} />
          </div>
        )}
      </div>
      <div className="controls">
        <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        <button onClick={toggleCamera}>{isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}</button>
        <input
          type="text"
          placeholder="Enter Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <button onClick={endMeeting}>End Meeting</button>
    </div>
  );
};

export default VideoMeeting;

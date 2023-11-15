<<<<<<< HEAD



=======
import axios from "axios";
>>>>>>> 8a8df34699655ca20cef9b84e170896c5b9700b8
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Peer from "simple-peer";
import io from "socket.io-client";

const socket = io.connect('http://localhost:5500');

const VideoMeeting = () => {
<<<<<<< HEAD
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
=======
    const { videoId } = useParams();
    const [peer, setPeer] = useState();
    const [stream, setStream] = useState();
    const [callEnded, setCallEnded] = useState(false);
    const [isVideoEnded, setIsVideoEnded] = useState(false);
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

    const endMeeting = async () => {
      try {
        await axios
          .put(`http://localhost:5500/api/hiringRequest/endVideo?videoId=${videoId}`)
          .then((response) => {
            toast.success(response.data.message);
            setCallEnded(true);
            navigate('/home');
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error fetching notifications:", error);
          });
      } catch (error) {
        console.log(error);
      }
    };

    const checkVideoEnd = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/api/hiringRequest/isVideoEnded?videoId=${videoId}`);
        setIsVideoEnded(response.data.ok && response.data.isVideoEnded);
        if(isVideoEnded){
          navigate('/home')
          window.location.reload();
        }
      } catch (error) {
        console.error("Error fetching video status:", error);
      }
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        checkVideoEnd();
      }, 5000); 

      return () => {
        clearInterval(intervalId);
      };
    }, [videoId]);

    return (
      <div className="container">
        <div className="video-container">
          <div className="video">
            {stream && !callEnded && !isVideoEnded && <video playsInline ref={myVideo} autoPlay style={{ width: "300px" }} />}
            {isVideoEnded && <p>The meeting has ended. Leave the meeting.</p>}
          </div>
          {peer && !callEnded && (
            <div className="video">
              <video playsInline ref={(ref) => ref && (ref.srcObject = peer.streams[0])} autoPlay style={{ width: "300px" }} />
            </div>
>>>>>>> 8a8df34699655ca20cef9b84e170896c5b9700b8
          )}
        </div>
        {peer && !callEnded && (
          <div className="video">
            <video playsInline ref={(ref) => ref && (ref.srcObject = peer.streams[0])} autoPlay style={{ width: "300px" }} />
          </div>
        )}
      </div>
<<<<<<< HEAD
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
=======
    );
  };

  export default VideoMeeting;
>>>>>>> 8a8df34699655ca20cef9b84e170896c5b9700b8

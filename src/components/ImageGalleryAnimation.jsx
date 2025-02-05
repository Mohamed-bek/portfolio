import React, { useRef, useEffect } from "react";

const VideoPlayer = ({ videoUrl, playState }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (playState) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playState]);

  return (
    <div className="h-full w-full">
      <video ref={videoRef} loop={true} className="w-full h-full object-cover">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

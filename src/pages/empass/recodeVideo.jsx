import React, { useState } from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { MediaContext } from "../../store/empassStore";

export default function RecordVideo() {
  const history = useHistory();
  const { globalState, dispatchGlobalState } = MediaContext();
  const { selected, videoURL, videoBase64 } = globalState.video;
  console.log(videoBase64);
  const [recorder, setRecorder] = useState();
  const [stream, setStream] = useState();
  const videoRef = React.createRef();

  const mediaToBase64 = (mediaData, url) => {
    const reader = new FileReader();
    reader.readAsDataURL(mediaData);
    reader.onloadend = function () {
      const base64data = reader.result;
      dispatchGlobalState({ type: "VIDEO_URL", payload: url });
      dispatchGlobalState({ type: "VIDEO_BASE64", payload: base64data });
    };
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    message.success("File has been saved in .mp4 format");
    mediaToBase64(file, url);
  };

  const handleSelect = (e) => {
    dispatchGlobalState({ type: "VS_MODE", payload: e.target.value });
    dispatchGlobalState({ type: "VIDEO_URL", payload: null });
    setRecorder(null);
    setStream(null);
  };

  function startRecording(stream) {
    const getRecorder = new MediaRecorder(stream);
    getRecorder.start();
    setRecorder(getRecorder);
  }

  function requestVideo() {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        const videoObj = videoRef.current;
        videoObj.srcObject = stream;
        videoObj.play();
        startRecording(stream);
        setStream(stream);
        dispatchGlobalState({ type: "VIDEO_URL", payload: null });
      });
  }

  function stopRecording() {
    recorder.ondataavailable = (e) => {
      const videoData = new Blob([e.data], {
        type: "video/mp4",
      });

      mediaToBase64(videoData, URL.createObjectURL(videoData));
      message.success("File has been saved in .mp4 format");
    };
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
    recorder.stop();
  }

  const handleGoBack = () => {
    history.push("/empass_first_step");
  };
  const doneState = (video, audio) => {
    const isBoth = !!video && !!audio;
    const isAudio = !video && !!audio;
    const isVideo = !!video && !audio;

    if (isBoth) {
      message.success(
        "Successful 👍, please check the console for file details "
      );
    } else if (isAudio) {
      message.error("Question 2 is pending");
    } else if (isVideo) {
      message.error("Question 1 is pending");
    } else {
      message.error("Question 1, Question 2 are pending");
    }
  };

  const handleDone = () => {
    doneState(videoURL, globalState.audio.audioURL);
  };
  
  return (
    <div className="empass-main">
      <h1>2. Your Brief Introduction</h1>
      <select onChange={handleSelect} placeholder="select audio">
        <option value="">---select---</option>
        <option value="upload">Upload File</option>
        <option value="record">Record</option>
      </select>
      {selected === "upload" && (
        <>
          <div className="uploaded-video">
            <h5>*Only support mp4 format</h5>
            <input
              type="file"
              accept="video/mp4"
              onChange={handleVideoChange}
              capture
              id="recorder"
            />
            <br />
            {videoURL && (
              <video style={{ width: "25%" }} src={videoURL} controls></video>
            )}
          </div>
        </>
      )}

      {selected === "record" && (
        <>
          <div className="">
            <button id="request" onClick={requestVideo} disabled={!!stream}>
              Start Recording
            </button>
            <button id="stop" onClick={stopRecording} disabled={!stream}>
              Stop Recording
            </button>
          </div>
          <div className="video-position">
            <video className="preview-video" width={200} ref={videoRef} muted />
            {videoURL && (
              <video
                className="recorded-video"
                id="recording"
                src={videoURL}
                width={200}
                controls
              ></video>
            )}
          </div>
        </>
      )}

      <button onClick={handleDone} disabled={!!stream}>
        Done
      </button>
      <button onClick={handleGoBack} disabled={!!stream}>
        Go Back
      </button>
    </div>
  );
}

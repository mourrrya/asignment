import React, { useState } from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { ReactMic } from "react-mic";
import { MediaContext } from "../../store/empassStore";
export default function Empass() {
  const history = useHistory();
  const { globalState, dispatchGlobalState } = MediaContext();
  const { selected, audioURL, audioBase64 } = globalState.audio;
  const [isRecording, setIsRecording] = useState(false);

  console.log(audioBase64);

  const handleSelect = (e) => {
    dispatchGlobalState({ type: "AS_MODE", payload: e.target.value });
    dispatchGlobalState({ type: "AUDIO_URL", payload: null });
    setIsRecording(false);
  };

  const mediaToBase64 = (mediaData, url) => {
    const reader = new FileReader();
    reader.readAsDataURL(mediaData);
    reader.onloadend = function () {
      const base64data = reader.result;
      dispatchGlobalState({ type: "AUDIO_URL", payload: url });
      dispatchGlobalState({ type: "AUDIO_BASE64", payload: base64data });
    };
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    mediaToBase64(file, url);
    message.success("File has been saved in .wav format");
  };

  const startRecording = () => {
    setIsRecording(true);
    dispatchGlobalState({ type: "AUDIO_URL", payload: null });
  };
  const stopRecording = () => {
    setIsRecording(false);
  };

  const onStop = (recordedBlob) => {
    mediaToBase64(recordedBlob.blob, recordedBlob.blobURL);
    message.success("File has been saved in .wav format");
  };

  const handleNext = () => {
    history.push("/empass_second_step");
  };

  return (
    <div className="empass-main">
      <h1>Question_1 : What is the ultimate goal of your life?</h1>
      <select onChange={handleSelect} placeholder="select audio">
        <option value="">---select---</option>
        <option value="upload">Upload File</option>
        <option value="record">Record</option>
      </select>
      <div className="">
        {selected === "upload" && (
          <>
            <h5>*Only support WAV format</h5>
            <input
              type="file"
              accept="audio/wav"
              onChange={handleAudioChange}
              capture
              id="recorder"
            />
            <br />
            {audioURL && <audio src={audioURL} controls></audio>}
          </>
        )}
        {selected === "record" && (
          <>
            <h3>Record Your Voice</h3>
            <ReactMic
              record={isRecording}
              className="sound-wave"
              onStop={onStop}
              mimeType="audio/wav"
              strokeColor="#5f9ea0"
              backgroundColor="#dcdad7"
            />

            <div className="">
              <button onClick={startRecording} disabled={isRecording}>
                Start
              </button>
              <button onClick={stopRecording} disabled={!isRecording}>
                Stop
              </button>
            </div>
            {audioURL && <audio src={audioURL} controls></audio>}
            <br />
          </>
        )}
        <br />
        <button onClick={handleNext} disabled={isRecording}>
          Next Step
        </button>
      </div>
    </div>
  );
}

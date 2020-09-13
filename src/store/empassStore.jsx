import React, { useReducer, useContext } from "react";
const mediaContext = React.createContext();

const reducer = (state, action) => {
  const { video, audio } = state;
  switch (action.type) {
    case "AS_MODE": {
      const changeAudio = { ...audio, selected: action.payload };
      return { ...state, audio: changeAudio };
    }
    case "AUDIO_URL": {
      const changeAudio = { ...audio, audioURL: action.payload };
      return { ...state, audio: changeAudio };
    }
    case "AUDIO_BASE64": {
      const changeAudio = { ...audio, audioBase64: action.payload };
      return { ...state, audio: changeAudio };
    }
    case "VS_MODE": {
      const changeVideo = { ...video, selected: action.payload };
      return { ...state, video: changeVideo };
    }
    case "VIDEO_URL": {
      const changeVideo = { ...video, videoURL: action.payload };
      return { ...state, video: changeVideo };
    }
    case "VIDEO_BASE64": {
      const changeVideo = { ...video, videoBase64: action.payload };
      return { ...state, video: changeVideo };
    }

    default:
      return state;
  }
};

export function MediaProvider(props) {
  const initialValue = {
    video: {
      selected: "",
      videoURL: "",
      videoBase64: "",
    },
    audio: {
      selected: "",
      audioURL: "",
      audioBase64: "",
    },
  };

  const [globalState, dispatchGlobalState] = useReducer(reducer, initialValue);

  return (
    <mediaContext.Provider
      value={{ globalState, dispatchGlobalState }}
      {...props}
    />
  );
}

export function MediaContext() {
  const context = useContext(mediaContext);
  if (!context) {
    throw new Error(" Please use the context inside parent scope");
  }
  return context;
}

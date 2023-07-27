import RecordToFile from "./plugin/RecordToFile.js";
import FileToText from "./plugin/FileToText.js";
import AudioToText from "./AudioToText.js";

import { fontProxy } from "./proxy/proxy.js";

const proxy = fontProxy();

//navigator.userAgent.indexOf("Chrome")
const recorder = new AudioToText({
  writerPlugin: FileToText,
  recordPlugin: RecordToFile,
  keywords: Object.keys(proxy)
});

const getter = document.querySelector("#getter");
const output = document.querySelector("#output");

getter.addEventListener(
  "mousedown",
  () => {
    recorder.record();
  },
  false
);

let transcription;
getter.addEventListener(
  "mouseup",
  () => {
    transcription = recorder.transcription;
    output.value += transcription;
    proxy.value = transcription;
  },
  false
);

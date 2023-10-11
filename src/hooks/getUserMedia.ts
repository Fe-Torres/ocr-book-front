import axios from "axios";
import { useState } from "react";

export function userMedia() {
  const [stream, setStream] = useState<MediaStream | null>(null);

  async function getUserMedia() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 1280,
          height: 720,
          facingMode: { exact: "environment" },
        },
      });

      setStream(stream);
    } catch (error) {
      console.log(error);
    }
  }

  async function readImage(file: any) {
    const response = await axios.post("http://localhost:3000/read-image", {
      imgbase64: file,
    });

    console.log(response.data);
  }

  async function updateVideo(video: HTMLVideoElement | null) {
    if (video) {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    }
  }

  // eslint-disable-next-line max-len
  async function takePicture(
    canvas: HTMLCanvasElement | null,
    video: HTMLVideoElement | null,
    photo: HTMLImageElement | null
  ) {
    if (canvas && video && photo) {
      const context = canvas.getContext("2d");
      canvas.width = 1080;
      canvas.height = 720;
      context?.drawImage(video, 0, 0, 1080, 720);

      const data = canvas.toDataURL("image/jpg");
      photo.setAttribute("src", data);

      readImage(data);
    }
  }

  return {
    stream,
    setStream,
    updateVideo,
    takePicture,
    getUserMedia,
  };
}

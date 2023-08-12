import axios from "axios";
import { useState } from "react";

export function useRead() {
  const [imageResult, setImageResult] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [codeResultOpen, setCodeResultOpen] = useState(false);

  async function readImage(base64: string) {
    setIsReading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/read-image",
        {
          imgBase64: base64,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      const data = await interpretateImage(response.data.codeResult);
      setImageResult(data);
      setCodeResultOpen(true);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsReading(false);
      setSelectedFile(null);
    }
  }

  async function interpretateImage(code: string): Promise<string | null> {
    try {
      const response = await axios.post(
        "http://localhost:3000/run-code",
        {
          codeText: code,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      setSelectedFile(null);
      return response.data.codeResult;
    } catch (error: any) {
      return error.response.data.message;
    }
  }

  return {
    readImage,
    imageResult,
    selectedFile,
    setSelectedFile,
    codeResultOpen,
    setCodeResultOpen,
    isReading,
  };
}

import axios from "axios";
import { useState } from "react";
import { API_URL } from "../config/env";

export function useRead() {
  const [imageResult, setImageResult] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [codeResultOpen, setCodeResultOpen] = useState(false);

  async function readImage(base64: string) {
    setIsReading(true);
    try {
      const response = await axios.post(`${API_URL}/read-image`, { imgBase64: base64 });

      const data = await interpretImage(response.data.codeResult);
      setImageResult(data);
      setCodeResultOpen(true);
    } catch (error) {
      console.error("Error reading image:", error);
    } finally {
      setIsReading(false);
      setSelectedFile(null);
    }
  }

  async function interpretImage(code: string): Promise<string | null> {
    try {
      const response = await axios.post(`${API_URL}/run-code`, { codeText: code });

      return response.data.codeResult;
    } catch (error) {
      console.error("Error interpreting image:", error);
      return null;
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

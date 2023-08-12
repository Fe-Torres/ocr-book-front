import React, { useEffect } from "react";
import { Button } from "./button";
import { TitleWrapper } from "./title";

type ImagePreviewProps = {
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
  readImage: (base64: string) => void;
};

export const ImagePreview = ({
  selectedFile,
  setSelectedFile,
  readImage,
}: ImagePreviewProps) => {
  let base64: string;

  useEffect(() => {
    if (selectedFile) {
      const imageRef = document.getElementById(
        "previewImg"
      ) as HTMLImageElement;
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.addEventListener("load", (e) => {
        imageRef.src = e.target?.result as string;
        base64 = e.target?.result as string;
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center">
      <TitleWrapper>Read image:</TitleWrapper>
      <div className="w-1/2">
        <img id="previewImg" />
      </div>
      <section className="w-1/2 p-4 flex flex-row justify-between">
        <div>
          <Button onClick={() => readImage(base64)}>Yes</Button>
        </div>
        <div>
          <Button onClick={() => setSelectedFile(null)}>No</Button>
        </div>
      </section>
    </div>
  );
};

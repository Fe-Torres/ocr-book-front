import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type DragDropProps = {
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export const DragDrop = ({ selectedFile, setSelectedFile }: DragDropProps) => {
  const onDrop = useCallback((files: File[]) => {
    setSelectedFile(files[0]);
  }, []);

  const { getRootProps, isDragActive } = useDropzone({ onDrop });

  const renderDropedFileName = () => {
    if (selectedFile) {
      return <p className="text-slate-600">{selectedFile.name}</p>;
    }

    return <p className="text-slate-600">Drag 'n' drop some images here...</p>;
  };

  return (
    <div
      {...getRootProps()}
      className="w-4/5 max-w-xl rounded-lg border-black border py-24 flex justify-center bg-slate-200"
    >
      {isDragActive ? (
        <p className="text-slate-600">Drop here...</p>
      ) : (
        renderDropedFileName()
      )}
    </div>
  );
};

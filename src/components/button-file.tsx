import React from "react";

type ButtonFileProps = {
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export const ButtonFile = ({
  selectedFile,
  setSelectedFile,
}: ButtonFileProps) => {
  return (
    <div className="flex flex-col items-center">
      <input
        id="file-upload"
        className="hidden"
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={(value) =>
          setSelectedFile(value.target.files ? value.target.files[0] : null)
        }
      />
      <label
        htmlFor="file-upload"
        className="p-2 bg-blue-100 rounded-lg text-slate-900 font-medium"
      >
        Selecionar imagem
      </label>
      <p className="mt-6 text-center">
        {selectedFile ? selectedFile.name : "Imagem selecionada..."}
      </p>
    </div>
  );
};

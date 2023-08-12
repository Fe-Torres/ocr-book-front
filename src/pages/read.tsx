import { DragDrop } from "../components/drag-drop";
import { Logo } from "../components/logo";
import { ButtonFile } from "../components/button-file";
import { ImagePreview } from "../components/image-preview";
import { useRead } from "./useRead";
import { CodeResult } from "../components/code-result";
import { Loading } from "../components/loading";

export default function Read() {
  const {
    readImage,
    imageResult,
    selectedFile,
    codeResultOpen,
    setCodeResultOpen,
    setSelectedFile,
    isReading,
  } = useRead();

  const renderDragAndDrop = () => {
    if (screen.width > 500) {
      return (
        <>
          <DragDrop
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
          <div className="max-w-md flex items-center">
            <ButtonFile
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          </div>
        </>
      );
    }

    return (
      <div className="max-w-md flex items-center">
        <ButtonFile
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </div>
    );
  };

  return (
    <div className="h-full">
      <header className="flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          <Logo />
        </div>
      </header>
      {isReading ? (
        <div className="mt-36">
          <Loading />
        </div>
      ) : (
        <section className="w-full flex items-center flex-col gap-4 mt-12">
          {selectedFile ? (
            <ImagePreview
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              readImage={readImage}
            />
          ) : (
            renderDragAndDrop()
          )}
          <CodeResult
            code={imageResult}
            codeResultOpen={codeResultOpen}
            setCodeResultOpen={setCodeResultOpen}
          />
        </section>
      )}
    </div>
  );
}

import Modal from "react-modal";
import CloseIcon from "../assets/close-icon.png";

type CodeResultProps = {
  code: string | null;
  codeResultOpen: boolean;
  setCodeResultOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CodeResult = ({
  code,
  codeResultOpen,
  setCodeResultOpen,
}: CodeResultProps) => {
  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      width: "50%",
      height: "50%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Modal isOpen={codeResultOpen} style={modalStyles}>
        <div className="flex justify-center">
          <section className="w-full flex flex-row">
            <div className="w-full flex items-center flex-col mt-11">
              <strong className="text-2xl">Result</strong>
              <p className="text-xl mt-4">{code}</p>
            </div>
            <div
              className="flex items-center w-14 cursor-pointer"
              onClick={() => setCodeResultOpen(false)}
            >
              <img className="w-1/2" src={CloseIcon} />
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};

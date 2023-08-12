import Book from "../assets/book.png";

export const Logo = () => {
  return (
    <div className="w-min flex items-center flex-col gap-4">
      <div className="w-3/5 flex flex-col">
        <img src={Book} />
      </div>
      <strong>CodeBookJS</strong>
    </div>
  );
};

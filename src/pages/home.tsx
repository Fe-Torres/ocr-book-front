import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../assets/book.png";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { TitleWrapper } from "../components/title";

export default function Home() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mockedEmail = "usuario@teste.com";
  const mockedPassword = "teste123";

  const handleLogin = () => {
    if (email === mockedEmail && password === mockedPassword) {
      navigate("/read");
    }
  };

  return (
    <div className="h-full p-8">
      <div className="flex items-center flex-col">
        <div className="flex items-center mt-12 flex-col gap-6">
          <div className="flex justify-center">
            <img className="w-2/6 max-w-xs" src={Book} />
          </div>
          <TitleWrapper>
            <h1>CodeBookJS</h1>
          </TitleWrapper>
        </div>
        <form className="flex flex-col gap-4 items-center mt-12">
          <Input name="Email" onChange={(value) => setEmail(value)} />
          <Input name="Password" onChange={(value) => setPassword(value)} />
        </form>
        <section className="w-full max-w-xs mt-8 flex flex-row justify-between items-center">
          <div className="w-1/4">
            <Button onClick={() => handleLogin()}>Login</Button>
          </div>
          <a href="/teste" className="underline">
            How to use
          </a>
        </section>
      </div>
    </div>
  );
}

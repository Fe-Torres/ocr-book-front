import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";

export default function HowToUse() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-col w-full h-full">
      <h1 className="text-xl mt-16">How to use CodeBookJS:</h1>
      <div className="flex flex-col gap-2 mt-12">
        <strong>1. Right your JavaScript code on a pice of paper</strong>
        <strong>2. Take a picture of your code</strong>
        <strong>3. Upload your picture on CodeBookJS</strong>
        <strong>4. Enjoy your handmade JavaScript code executed ;D</strong>
      </div>
      <section className="w-60 mt-12">
        <Button onClick={() => navigate("/")}>Get Started</Button>
      </section>
    </div>
  );
}

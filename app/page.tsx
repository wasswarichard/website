import Image from "next/image";
import backGroudImage from "../assets/img.png";

export default function Home() {
  return (
    <div className="items-center justify-between">
      <div>
        <Image src={backGroudImage} alt="Logo" />
      </div>
    </div>
  );
}

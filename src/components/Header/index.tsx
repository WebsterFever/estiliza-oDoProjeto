import { MdDensityMedium } from "react-icons/md";
import LogoHeader from "../../assets/Logo.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center text-center w-11/12 mx-auto p-4">
      <div className="">
        <Image src={LogoHeader} alt="Logo Motors" width={153.02} height={26.34} />
      </div>
      <nav className="flex flex-row ml-auto items-center text-center">
        <div className="sm:hidden mr-4">
          <MdDensityMedium />
        </div>
        <div className="hidden sm:flex flex-row items-center">
          <button className="btn-login">
            <p>Fazer Login</p>
          </button>
          <button className="btn-cadastrar">
            <p>Cadastrar</p>
          </button>
        </div>
      </nav>
    </div>
  );
};

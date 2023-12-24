import LogoImg from "../assets/Logo.svg";

const Logo = () => {
  return (
    <div className="h-full flex justify-center items-center gap-2">
      <img className=" h-8 aspect-square " src={LogoImg} alt="logo" />
      <p className="text-white font-semibold text-2xl">phunk</p>
    </div>
  );
};

export default Logo;

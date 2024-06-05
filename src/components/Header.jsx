import iconImg from "../assets/icon.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-neutral-950 w-full z-10">
      <img src={iconImg} alt="logo" className="md:w-44" />
    </div>
  );
};
export default Header;

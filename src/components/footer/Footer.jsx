import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { RiTiktokLine } from "react-icons/ri";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="text-slate-100 bg-primary text-center py-5 lg:py-10">
      <div className="flex justify-center gap-5 lg:gap-10">
        <FiFacebook className="text-2xl font-medium duration-300 hover:text-bg cursor-pointer lg:text-3xl" />
        <FiInstagram className="text-2xl font-medium duration-300 hover:text-bg cursor-pointer lg:text-3xl" />
        <FiTwitter className="text-2xl font-medium duration-300 hover:text-bg cursor-pointer lg:text-3xl" />
        <RiTiktokLine className="text-2xl font-medium duration-300 hover:text-bg cursor-pointer lg:text-3xl" />
      </div>
      <div className="my-4 xl:my-6 flex gap-4 justify-center lg:gap-8">
        <FooterLinks />
      </div>
      <p>
        created by{" "}
        <span className="text-bg font-medium lg:text-lg">azzairul</span>. |
        &copy; 2024
      </p>
    </div>
  );
};

export default Footer;

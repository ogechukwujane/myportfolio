import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const getIcon = (name: string) => {
  if (name === "twitter") {
    return <FaXTwitter />;
  }
  if (name === "linkedin") {
    return <FaLinkedin />;
  }
  if (name === "github") {
    return <FaGithub />;
  }
  if (name === "mail") {
    return <BiLogoGmail />;
  }
};

import type { IconType } from "react-icons";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const SITE_SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  Icon: IconType;
}> = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rcq-tech",
    Icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rcqtech",
    Icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rcqtech",
    Icon: FaInstagram,
  },
  { label: "GitHub", href: "https://github.com/rcq-tech", Icon: FaGithub },
];

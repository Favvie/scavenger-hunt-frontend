import { link } from "fs";
import Image from "next/image";
import React from "react";

const socials = [
  {
    link: "",
    logo: "/assets/facebook.png",
  },
  {
    link: "",
    logo: "/assets/twitter.png",
  },
  {
    link: "",
    logo: "/assets/instagram.png",
  },
  {
    link: "",
    logo: "/assets/linkedin.png",
  },
];

const terms = [
  {
    title: "Terms of Use",
    link: "",
  },
  {
    title: "Privacy Policy",
    link: "",
  },
  {
    title: "Cookie Policy",
    link: "",
  },
];
const product = [
  {
    title: "About",
    link: "",
  },
  {
    title: "FAQ",
    link: "",
  },
  {
    title: "Contact",
    link: "",
  },
  {
    title: "Discord",
    link: "",
  },
];

function Footer() {
  return (
    <div className="w-[95%] pb-10 mx-auto lg:w-10/12">
      <div className="gap-[101px] lg:flex lg:h-[262px] bg-[#121727] pl-[42px] pr-[30px] pt-[46px] rounded-[20px]  pb-[51px] lg:pb-0">
        <div className="w-[253px]">
          <Image
            src={"/assets/scavengerLogo.png"}
            width={253}
            height={64}
            alt="logo"
            className="h-[51px] md:h-[64px] w-[206px] md:w-[253px]"
          />
          <p className="mt-1.5 text-[#858894] text-sm font-spaceGrotesk">
            Master Blockchain Ecosystems Through Fun Challenges
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socials.map((social, index) => (
              <a
                href={social.link}
                className="w-6 h-6 bg-gradient-to-tr from-[#7D3EAF] to-[#E7499F] rounded-full flex justify-center items-center"
                key={index}
              >
                <Image
                  src={social.logo}
                  width={12}
                  height={12}
                  alt={`socials-${index}`}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-14 lg:hidden">
          <div className="w-[124px]">
            <h5 className="text-sm text-[#bfbfbf] font-orbitron">Terms</h5>
            <ul className="mt-5 space-y-[11px]">
              {terms.map((term, index) => (
                <li key={index} className="">
                  <a
                    href={term.link}
                    className="text-sm text-[#858894] font-spaceGrotesk"
                  >
                    {term.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[124px] ">
            <h5 className="text-sm text-[#bfbfbf] font-orbitron">Product</h5>
            <ul className="mt-5 space-y-[11px]">
              {product.map((term, index) => (
                <li key={index} className="">
                  <a
                    href={term.link}
                    className="text-sm text-[#858894] font-spaceGrotesk"
                  >
                    {term.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[124px] hidden lg:block">
          <h5 className="text-sm text-[#bfbfbf] font-orbitron">Terms</h5>
          <ul className="mt-5 space-y-[11px]">
            {terms.map((term, index) => (
              <li key={index} className="">
                <a
                  href={term.link}
                  className="text-sm text-[#858894] font-spaceGrotesk"
                >
                  {term.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[124px] hidden lg:block">
          <h5 className="text-sm text-[#bfbfbf] font-orbitron">Product</h5>
          <ul className="mt-5 space-y-[11px]">
            {product.map((term, index) => (
              <li key={index} className="">
                <a
                  href={term.link}
                  className="text-sm text-[#858894] font-spaceGrotesk"
                >
                  {term.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:ml-10 w-[317px] mt-14 lg:mt-0">
          <h5 className="text-sm font-orbitron text-[#bfbfbf]">
            Subscribe to our newsletter
          </h5>
          <p className="mt-1.5 font-spaceGrotesk text-[#858894] text-xs">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2 mt-6 h-9">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent border border-[#858894] rounded-lg pl-2 text-sm text-[#858894] font-spaceGrotesk h-full"
            />
            <button className="bg-gradient-to-tr rounded-lg from-[#7D3EAF] font-orbitron to-[#E7499F] w-[110px] text-sm text-white font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="mt-[26px] text-center font-spaceGrotesk text-sm text-[#858894]">
        @ Scavenger hunt 2025
      </p>
    </div>
  );
}

export default Footer;

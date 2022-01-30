import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-slate-800 flex flex-col items-center py-12">
        <a className="m-5" rel="noreferrer" href="#top">
          <Image src="/up.svg " width={30} height={30} alt="icons" />
        </a>
        <div className="flex">
          <a className="m-5" rel="noreferrer" target="_blank" href="https://www.facebook.com/satyaranjan.rout.566">
            <Image src="/facebook.svg" width={30} height={30} alt="icons" />
          </a>
          <a className="m-5" rel="noreferrer" target="_blank" href="mailto:satyaranjanrout81@gmail.com">
            <Image src="/gmail.svg" width={30} height={30} alt="icons" />
          </a>
          <a
            className="m-5"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/satyaranjan-rout-24b538103/"
          >
            <Image src="/linkedin.svg" width={30} height={30} alt="icons" />
          </a>
          <a className="m-5" rel="noreferrer" target="_blank" href="https://github.com/satanrout">
            <Image src="/github.svg" width={30} height={30} alt="icons" />
          </a>
        </div>
        <hr />
        <p className="text-sm text-gray-500 text-center uppercase">
          &#169; {new Date().getFullYear()} - Designed and developed by{" "}
          <a href="https://github.com/satanrout" target="_blank" rel="noreferrer">
            Satyaranjan Rout
          </a>
        </p>
      </div>
    </footer>
  );
};

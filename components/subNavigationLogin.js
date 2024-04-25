import React from "react";
import Image from "next/image";

function subNavigationLogin({ title, title2 }) {
  return (
    <div className="relative flex items-center justify-center pt-32">
      <Image
        src="/assets/Login_BG.png"
        alt="description_of_image"
        width="1950"
        height="10"
        className="absolute"
      />
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="z-10 text-[1.5rem] text-white font-bold">
          Account {title}
        </div>
        <div className="flex z-10 text-[1.1rem] text-white gap-5">Home <p className="text-gray-200 font-bold">|</p> <p className="text-[#162A41]">{title2}</p></div>
      </div>
    </div>
  );
}

export default subNavigationLogin;

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navigation({}) {
  return (
    <>
      <div className="bg-[#162A41] h-auto py-5 text-white text-[12px]">
        <div className="mx-96 justify-between flex">
          <div className="flex gap-8">
            <div className="flex gap-3">
              <Image
                src="/icons/paper-plane.svg"
                alt="description_of_image"
                width="20"
                height="15"
              />
              <p className="text-lg">4000@dinmaegler.com</p>
            </div>
            <div>
              <div className="flex gap-3">
                <Image
                  src="/icons/call.svg"
                  alt="description_of_image"
                  width="20"
                  height="20"
                />
                <p className="text-lg">++45 7070 4000</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link href="/auth/login">
              <div className="flex gap-3">
                <Image
                  src="/icons/user.svg"
                  alt="description_of_image"
                  width="20"
                  height="20"
                />
                <p className="text-lg">Log ind</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-96 h-auto py-5 flex justify-between items-center">
        <div className="flex">
          <Link href="/">
            <Image
              src="/icons/logo.svg"
              alt="description_of_image"
              width="280"
              height="1"
            />
          </Link>
        </div>
        <div className="flex gap-10 text-[1.1rem]">
          <Link href="/property-list">Boliger til salg</Link>
          <Link href="/agents">Mæglere</Link>
          <Link href="/favorites">Mine favoritter</Link>
          <Link href="/contact-us">Kontakt os</Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;

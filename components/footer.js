import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer({}) {
  return (
    <>
      <div className="bg-[#F8F8FB] h-[32rem]">
        <div className="mx-96 z-10 py-24">
          <Image
            src="/icons/logo.svg"
            alt="description_of_image"
            width="300"
            height="18"
          />
          <div className="text-[1.1rem] pt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have <br /> suffered alteration in some form, by
            injected humour, or randomised words.
          </div>
          <div className="flex gap-36 pt-16">
            <div className="w-[30rem] h-auto bg-white shadow-sm p-12">
              <div className="flex flex-col gap-8">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-[#162A41] rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/call.svg"
                      alt="description_of_image"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <div className="text-[0.9rem] text-[#7B7B7B]">
                      Ring til os
                    </div>
                    <div className="text-md font-bold mt-1">+45 7070 4000</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-[#162A41] rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/paper-plane.svg"
                      alt="description_of_image"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <div className="text-[0.9rem] text-[#7B7B7B]">
                      Send en mail
                    </div>
                    <div className="text-md font-bold mt-1">
                      4000@dinmaegler.com
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-[#162A41] rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/location.svg"
                      alt="description_of_image"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <div className="text-[0.9rem] text-[#7B7B7B]">Butik</div>
                    <div className="text-md font-bold mt-1">
                      Stændertorvet 78, 4000 Roskilde
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[1.2rem] mt-8">
                Din Mægler Roskilde, er din <br />
                boligibutik i lokalområdet.
              </div>
            </div>
            <div className="flex flex-col gap-24">
              <div>
                <p className="text-2xl font-bold mb-5">Quick Links</p>
                <div className="flex flex-col gap-2 text-[1.2rem]">
                  <Link href="/">Boliger til salg</Link>
                  <Link href="/agents">Mæglere</Link>
                  <Link href="/contact-us">Kontakt os</Link>
                  <div className="flex">
                    <Link href="/auth/login">Log ind /</Link>
                    <Link href="/auth/register">bliv bruger</Link>
                  </div>
                </div>
              </div>
              <div className="text-[#7B7B7B] pt-8">
                <p className="text-[0.8rem]">Medlem af </p>
                <p className="text-[2.3rem] font-bold">DMS</p>
                <p>Dansk Mægler Sammenslutning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[16rem]" />
      <div className="bg-[#162A41] text-white text-md mx-auto text-center py-8">
        Layout By Jit Banik 2020
      </div>
    </>
  );
}

export default Footer;

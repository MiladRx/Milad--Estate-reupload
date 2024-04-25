import React from "react";
import Image from "next/image";

import ContactUsForm from "@/components/contact-us-form/ContactUsForm";
import SubNavigation from "@/components/subNavigation";

function ContactUs() {
  return (
    <div className="h-auto">
      <SubNavigation title="Kontakt os" />
      <div className="mx-96">
        <div className="text-[1.8rem] font-bold mb-4">
          Vi sidder klar til at besvare dine spørgsmål
        </div>
        <div className="w-[5.5rem] h-1 bg-[#162A41]"></div>
        <div className="text-[1.1rem] mt-7 mb-10">
          Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
          med at sælge sin bolig.
          <br /> Vores medarbejdere sider klar alle ugens dage til at svare på
          dine spørgsmål.
        </div>
        <div className="flex justify-between gap-5 h-auto pb-10">
          <div className="rounded border border-gray-300 w-[40rem] p-5">
            <ContactUsForm isAgant='true' />
          </div>
          <div className="flex flex-col justify-between py-12 rounded border border-gray-300 w-[26rem]">
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 bg-[#162A41] rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/call.svg"
                    alt="description_of_image"
                    width="25"
                    height="25"
                  />
                </div>
                <div className="text-[1.25rem] font-bold text-black">
                  Ring til os
                </div>
                <div className="text-[1.2rem] ">++45 7070 4000</div>
              </div>
            </div>
            <div className="w-[20rem] bg-gray-300 h-[0.1rem] mx-10" />
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12 bg-[#162A41] rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/paper-plane.svg"
                    alt="description_of_image"
                    width="25"
                    height="25"
                  />
                </div>
                <div className="text-[1.25rem] font-bold text-black">
                  send en mail
                </div>
                <div className="text-[1.2rem]">4000@dinmaegler.dk</div>
              </div>
            </div>
            <div className="w-[20rem] bg-gray-300 h-[0.1rem] mx-10" />
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12 bg-[#162A41] rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/location.svg"
                    alt="description_of_image"
                    width="25"
                    height="25"
                  />
                </div>
                <div className="text-[1.25rem] font-bold text-black">
                  Besøg butikken
                </div>
                <div className="flex flex-col text-[1.2rem] items-center justify-center">
                  Stændertorvet 78,<p>4000 Roskilde</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-20">
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=St%C3%A6ndertorvet%2078,%204000%20Roskilde,%20Denmark+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}

export default ContactUs;

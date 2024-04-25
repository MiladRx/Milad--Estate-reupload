"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import SubNavigation from "@/components/subNavigation";
import { Input } from "@/components/ui/input";
import ContactUsForm from "@/components/contact-us-form/ContactUsForm";
import SocialMedia from "@/components/socialMedia";
import { agentData } from "@/lib/data/agent-data";

function Agent({ params }) {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const response = await fetch(`https://dinmaegler.onrender.com/agents/${params.agentId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch agent data');
        }
        const agentData = await response.json();
        setAgent(agentData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAgentData();
  }, [params.agentId]);

  return (
    <>
      <SubNavigation title="Kontakt en medarbejder" />
      <div className="flex mx-96 justify-between mb-24">
        {/* Agent details */}
        {agent && (
          <div className="flex flex-col p-8 w-[45rem] h-auto border border-gray-300">
            {/* Agent image and details */}
            <div className="flex">
              <div className="w-2/5">
                <Image
                  src={agent.image.url}
                  alt="description_of_image"
                  width="280"
                  height="280"
                  style={{ objectFit: 'cover' }}
                />
  

                <div  className="flex absolute z-10 bottom-[270px]  bg-[#162A41] w-28 h-10 p-3 justify-between">
                  <SocialMedia />
                </div>
              </div>
              <div className="w-3/5 pl-8">
                <div className="flex justify-between">
                  <div className="font-bold text-2xl">{agent.name}</div>
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/heart.svg"
                      alt="description_of_image"
                      width="15"
                      height="15"
                    />
                  </div>
                </div>
                <div className="text-gray-400 text-lg">{agent.address}</div>
                <Separator className="bg-gray-300 w-1/5 h-[0.08rem] my-5" />
                <div className="flex">
                  <Image
                    src="/icons/call_blue.svg"
                    alt="description_of_image"
                    width="22"
                    height="22"
                  />
                  <div className="pl-3 text-lg">{agentData.call}</div>
                </div>
                <div className="flex mt-4">
                  <Image
                    src="/icons/paper-plan_blue.svg"
                    alt="description_of_image"
                    width="22"
                    height="22"
                  />
                  <div className="pl-3 text-lg">{agent.email}</div>
                </div>
              </div>
            </div>
            {/* Agent description and contact form */}
            <div className="w-full">
              <div className="text-lg font-bold mt-7 gap-1">
                Om {agent.name}
              </div>
              <Separator className="bg-[#162A41] w-[3.5rem] h-[0.25rem] mt-4" />
              <div className="text-lg my-5">
                {agentData.description1}
                <br />
                <br />
                {agentData.description2}
              </div>
              <div className="border border-gray-200 rounded h-auto p-10">
                <div className="text-lg font-bold gap-1">
                  Kontakt {agent.name}
                </div>
                <Separator className="bg-[#162A41] w-[3.5rem] h-[0.25rem] mt-4" />
                <ContactUsForm isAgent={false} />
              </div>
            </div>
          </div>
        )}
        {/* Sidebar */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 bg-sky-50 h-auto w-[24rem] p-7">
            <div className="text-2xl font-bold">Search Property</div>
            <Separator className="bg-gray-300 w-full h-[0.05rem]" />
            <div className="relative">
              <Image
                src="/icons/search.svg"
                alt="description_of_image"
                width="25"
                height="25"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              />
              <Input
                placeholder="Search"
                className="pl-10 text-[1rem] rounded"
              />
            </div>
          </div>
          <div className="flex flex-col bg-[#162A41] h-[30rem] w-[24rem] py-24 px-12 items-center text-center justify-center gap-7">
            <p className="text-white text-[2rem] leading-10">
              Find The Best <br /> Property <br />
              For Rent Or Buy
            </p>
            <Separator className=" bg-white w-[3rem] h-[0.3rem]" />
            <p className="text-white text-lg">Call Us Now</p>
            <p className="text-white text-[2rem] leading-12">+00 123 456 789</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agent;

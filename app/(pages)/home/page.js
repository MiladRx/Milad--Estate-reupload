"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AgentCard from "@/components/agentCard";
import PropertyCard from "@/components/propertyCard";
import SubscribeForm from "@/components/SubscribeForm";

import { agentsData } from "@data/agent-data";
import { propertiesData } from "@data/property-data";
import { homepageIcon } from "@data/home-page";
import { iconList1 } from "@data/home-page";


function HomePage() {
  const [houses, setHouses] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  useEffect(() => {
    // Fetch houses data here and set it to the state
    const fetchHousesData = async () => {
      try {
        const response = await fetch("https://dinmaegler.onrender.com/homes");
        const data = await response.json();
        setHouses(data); // Assuming the response data is an array of houses
        setFilteredHouses(data); // Initially set filtered houses to all houses
        // Log the fetched data
      } catch (error) {
        console.error("Error fetching houses data:", error);
      }
    };
    fetchHousesData();
  }, []);

  // Function to handle input change
  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
    filterHouses(e.target.value);
    setShowRecommendations(e.target.value.trim() !== "");
  };



  // Function to filter houses based on search keyword
  const filterHouses = (keyword) => {
    if (keyword.trim() === "") {
      setFilteredHouses([]); // If keyword is empty, clear the filtered houses
    } else {
      const filtered = houses.filter((house) =>
        house.adress1.toLowerCase().startsWith(keyword.toLowerCase())
      );
      setFilteredHouses(filtered);
    }
  };

  return (
    <div>
      <div className="h-auto">
        {/* hero image section */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-screen h-[70vh] flex items-center justify-center text-center">
            <Image
              src="/assets/Hero.png"
              alt="description_of_image"
              fill="responsive"
            />
            <div className="absolute z-10 bottom-[26rem] text-center text-[3rem] text-white font-bold">
              Søg efter din drømmebolig
            </div>
          </div>
          <div className="flex flex-col absolute z-10 bottom-[11rem] w-[55rem] h-auto bg-white p-6">
            <div className="text-lg font-semibold gap-1">
              Søg blandt {houses.length} boliger til salg i 74 butikker{" "}
            </div>
            <Separator className="bg-black w-[3.5rem] h-[0.25rem] mt-2 mb-4" />
            <div className="text-lg">Hvad skal din næste bolig indeholde</div>
            <div className="flex gap-4 relative">
              <Input
                placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                className="w-[45rem] rounded text-base h-12"
                value={searchKeyword}
                onChange={handleInputChange}
              />
              <Button className="h-12 w-24">Søg</Button>
              {showRecommendations && (
                <div className="absolute bg-white w-full rounded-lg mt-14 border border-gray-300">
                  {filteredHouses.map((house) => (
                    <div key={house.id} className="p-2">
                      {/* Wrap address in Link component */}
                      <Link href={`/property-list/${house.id}`}>
                        <p>{house.adress1}</p>
                      </Link>
                      {/* Add other details of the house as needed */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="flex flex-col h-[60rem] py-28 mx-96">
        <div className="flex">
          <div className="w-1/2">
            <Image
              src="/assets/family.png"
              alt="description_of_image"
              width="450"
              height="300"
              className="absolute"
            />
            <div className="relative z-10 left-8 top-8 border-[0.8rem] border-[#162A41] w-[28.5rem] h-[30rem]">
              <div className="flex flex-col items-center justify-center relative z-10 gap-2 left-56 top-64 border-[0.8rem] bg-[#162A41] border-[#162A41] w-[13.5rem] h-[13rem] p-5 text-white">
                <p className="text-6xl font-bold">38+</p>
                <p className="text-2xl">års mægler-</p>
                <p className="text-2xl">erfaring</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-4xl font-bold w-full mt-10">
              Vi har fulgt danskerne hjem
              <br /> i snart 4 årtier
            </p>
            <p className="text-2xl font-semibold pt-10">
              Det synes vi siger noget om os!
            </p>
            <p className="pt-5 text-[1.1rem]">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has normal
              distribution.
            </p>
            <p className="pt-5 text-[1.1rem]">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
            </p>
            <div className="w-4/5">
              <div className="flex flex-wrap justify-between mt-12">
                {homepageIcon.map((icon, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="w-16 h-16 bg-sky-100 rounded-none flex items-center justify-center">
                      <Image
                        src={icon.src}
                        alt={icon.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <p className="text-2xl font-semibold">{icon.count}</p>
                      <p className="text-lg">{icon.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Separator className="my-24 border" />
        </div>
        <div className="flex justify-between">
          {iconList1.map((icon, index) => (
            <div key={index} className="flex gap-5">
              <div className="w-12 h-12 bg-sky-100 rounded-none flex items-center justify-center">
                <Image src={icon.src} alt="sample" width={28} height={28} />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-xl font-semibold">{icon.topic}</p>
                <p className="text-base w-72">{icon.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* property section */}
      <div className="bg-[#F8F8FB]">
        <div className="h-auto py-24 mx-96">
          <div className="flex flex-col items-center justify-center gap-7">
            <p className="text-4xl font-bold text-[#162A41]">
              Udvalgte Boliger
            </p>
            <p className="text-lg text-center font-medium">
              There are many variations of passages of Lorem Ipsum available
              but the this in <br /> majority have suffered alteration in some
            </p>
          </div>
          <div className="flex flex-wrap gap-7 justify-between h-auto mt-12">
            {houses.slice(0, 4).map((house, index) => (
              <PropertyCard key={index} house={house} />
            ))}
          </div>
          <div className="flex w-full items-center justify-center mt-10">
            <Link href="property-list">
              <Button
                type="submit"
                className="w-48 rounded bg-[#162A41] h-16 text-[1.1rem]"
              >
                Se alle boliger
              </Button>
            </Link>

          </div>
        </div>
      </div>

  



      {/* subscribe section */}
      <SubscribeForm />








      {/* agent list section */}
      <div className="bg-white h-auto py-24 mx-96">
        <div className="flex flex-col items-center justify-center gap-7">
          <p className="text-4xl font-bold text-[#162A41]">
            Mød vores engagerede medarbejdere
          </p>
          <p className="text-lg text-center font-medium">
            Din Mægler er garant for altid veluddannet assistance i dit
            boligsalg. <br /> Kontakt en af vores medarbejdere.
          </p>
        </div>
        <div className="flex flex-wrap h-auto mt-10">
          {agentsData.slice(0, 1).map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>
        <div className="flex w-full items-center justify-center mt-10">
          <Link href="/agents">
            <Button
              type="submit"
              className="w-48 rounded bg-[#162A41] h-16 text-[1.1rem]"
            >
              Se alle mæglere
            </Button>
          </Link>
        </div>
      </div>

      {/* mobile app section */}
      <div className="bg-[#162A41] mt-10">
        <div className="flex justify-between mx-96">
          <div className="flex flex-col text-white py-24 gap-5">
            <div className="text-4xl font-bold leading-snug">
              Hold dig opdateret <br />
              på salgsprocessen
            </div>
            <p className="text-lg">
              Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med
              den <br /> ansvarlige mægler eller butik med vores app. Her kan
              du også se statistik på <br />
              interessen for din bolig i alle vores salgskanaler.
            </p>
            <div className="flex gap-5">
              <button className="flex bg-white rounded w-48 h-16 text-[#162A41] justify-center items-center">
                <div className="flex gap-2 mx-auto">
                  <Image
                    src="/icons/play_store.svg"
                    alt="description_of_image"
                    width="30"
                    height="15"
                  />
                  <p className="text-[1.1rem] font-semibold">Google Play</p>
                </div>
              </button>
              <button className="flex bg-[#162A41] rounded w-48 border border-white text-white justify-center items-center">
                <div className="flex gap-2 py-2 mx-auto">
                  <Image
                    src="/icons/apple_store.svg"
                    alt="description_of_image"
                    width="30"
                    height="15"
                  />
                  <p className="text-[1.1rem] font-semibold">Apple Store</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex pt-10">
            <Image
              src="/assets/phone-LS.png"
              alt="description_of_image"
              width="200"
              height="15"
              className="h-[27.5rem] w-64 mr-[-3rem] z-10"
            />
            <Image
              src="/assets/phone-RS.png"
              alt="description_of_image"
              width="150"
              height="15"
              className="h-[27.5rem] w-56"
            />
          </div>
        </div>
      </div>
    </div >

  );
}

export default HomePage;

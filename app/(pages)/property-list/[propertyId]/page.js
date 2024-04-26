
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

import SocialMedia from "@/components/socialMedia";
import ImageModal from "@/components/ui/imageModal";

import { propertyData } from "@data/property-data";
import { agentData } from "@data/property-data";

function Property({ params }) {
  const [house, setHouses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false); // Initialize as false
  const toggleIsFavorite = () => {
    setIsFavourite(!isFavourite);
  };
  const show = params?.show;

  useEffect(() => {
    // Fetch houses data here and set it to the state
    const fetchHousesData = async () => {
      try {
        const response = await fetch(`https://dinmaegler.onrender.com/homes/${params.propertyId}`);
        const data = await response.json();
        setHouses(data); // Assuming the response data is an array of houses
        console.log("Fetched houses data:", data); // Log the fetched data
      } catch (error) {
        console.error("Error fetching houses data:", error);
      }
    };
    fetchHousesData();
  }, []);// Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="flex flex-col">
      <div style={{ display: "flex", justifyContent: "center" }}>
        {house.images && house.images.length > 0 && (
          <img
            src={house.images[0].formats.thumbnail.url} // Get the URL of the first image
            alt="description_of_image"
            style={{ maxWidth: "1920px", width: "100%", height: "auto" }}
          />
        )}
      </div>
      <div className="flex mx-96 mt-6 justify-between">
        <div className="flex flex-col text-xl font-semibold gap-1">
          <p>{house.adress1}</p>
          <p>{house.postalcode} {house.city}</p>
        </div>
        <div className="flex gap-10">
          {propertyData.imagePaths.map((image, index) => (
            <button key={index} onClick={() => { setShowModal(true); setSelectedImage(image.image); }}>
              <Image
                src={image.path}
                alt={`description_of_image_${index}`}
                width="40"
                height="10"
              />
            </button>
          ))}
          
          {showModal ? (
            <>
              <ImageModal imageSrc={selectedImage} closeModal={() => setShowModal(false)} />
            </>
          ) : null}
        </div>

        <div className="font-semibold text-3xl mt-3">
          Kr. {house.price}
        </div>


      </div>
      <Separator className="mx-96 bg-gray-300 w-auto h-[0.06rem] my-6 " />
      <div className="mx-96 flex justify-between font-medium">
        <div className="flex justify-between gap-12">
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>Sagsnummer: </p>
            <p>Boligareal: </p>
            <p>Grundareal: </p>
            <p>Rum/ Værelser: </p>
            <p>Antal plan: </p>
          </div>
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>{propertyData.caseNumber}</p>
            <p>
              {house.livingspace} m<sup className="text-xs">2</sup>
            </p>
            <p>
              {propertyData.groundArea} m<sup className="text-xs">2</sup>
            </p>
            <p>{house.rooms}</p>
            <p>{propertyData.numberPlan}</p>
          </div>
        </div>
        <div className="flex justify-between gap-12">
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>Kælder:  </p>
            <p>Byggeår: </p>
            <p>Ombygget: </p>
            <p>Energimærke: </p>
          </div>
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>{house.basementsize}</p>
            <p>
              {house.built}
            </p>
            <p>
              {house.remodel}
            </p>
            <p>{propertyData.energyLable}</p>
          </div>
        </div>
        <div className="flex justify-between gap-12">
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>udbetaing: </p>
            <p>Brutto ex ejerudgift: </p>
            <p>Netto ex ejerudgift: </p>
            <p>Ejerudgifter: </p>
          </div>
          <div className="flex flex-col justify-start gap-[0.2rem]">
            <p>Kr. {house.payment}</p>
            <p>
              Kr. {propertyData.grossExOwnersExpense} m
              <sup className="text-xs">2</sup>
            </p>
            <p>
              Kr. {propertyData.netExOwnersExpense} m
              <sup className="text-xs">2</sup>
            </p>
            <p>Kr. {propertyData.ownersExpense}</p>
          </div>
        </div>
      </div>
      <div className="flex mx-96 py-16 gap-12">
        <div className="flex flex-col gap-3 w-1/2">
          <p className="text-2xl font-semibold">Beskrivelse</p>
          <p className="text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.</p>
          <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <p className="text-2xl font-semibold">Ansvalig mægler</p>
          <div className="flex border border-gray-200 h-auto p-8">
            <div className="flex">
              <div className="flex flex-col w-3/5 relative z-10">
                <Image
                  src={house.agent?.image.url}
                  alt="description_of_image"
                  width="300"
                  height="300"
                />
                <div className="flex absolute z-10 bottom-5 bg-[#162A41] w-28 h-9 p-2 justify-between">
                  <SocialMedia />
                </div>
              </div>

              <div className="w-3/5 ml-8">
                <div className="flex justify-between">
                  <div className="font-bold text-1xl">{house.agent?.name}</div>
                </div>
                <div className="text-gray-400 text-xs">
                  {house.agent?.title}
                </div>
                <Separator className="bg-gray-300 w-1/5 h-[0.08rem] my-5" />
                <div className="flex">
                  <Image
                    src="/icons/call_blue.svg"
                    alt="description_of_image"
                    width="22"
                    height="22"
                  />
                  <div className="pl-3 text-md">{house.agent?.phone}</div>
                </div>
                <div className="flex mt-4">
                  <Image
                    src="/icons/paper-plan_blue.svg"
                    alt="description_of_image"
                    width="22"
                    height="22"
                  />
                  <div className="pl-3 text-md">{house.agent?.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;

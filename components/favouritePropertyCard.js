"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function FavouritePropertyCard({ property, index }) {
  const [isFavourite, setIsFavourite] = useState(property.isFavourite);

  const toggleIsFavorite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <>
      <Card key={index} className="w-full border border-gray-300">
        <CardContent className="flex p-8 h-auto rounded">
          <Link href={`/property-list/${property.id}`}>
            <Image
              src={property.image}
              alt="description_of_image"
              width="300"
              height="300"
              className="p-0 m-0 h-36 rounded-sm"
            />
          </Link>
          <div className="flex flex-col w-[20rem] gap-3 mx-12 items-start">
            <p className="font-bold text-xl">{property.name}</p>
            <p className="text-lg">{property.address}</p>
            <div className="flex gap-1">
              <p className="font-bold text-lg">{property.type} . </p>
              <p className="text-lg">Ejerudgift :{String(property.price).substring(0, 5)} kr </p>
            </div>
          </div>
          <div className="flex flex-col w-[25rem]">
            <div className="flex w-full space-x-10 justify-between">
              <div className="flex gap-5">
                <div style={{ backgroundColor: property.letterBG }} className={`h-7 w-7 justify-center items-center flex text-white font-bold`}>
                  {property.energyLable}
                </div> 
                <div className="flex text-base pt-1">
                  {property.roomsCount} værelser . {property.area} m
                  <sup className="text-xs">2</sup>
                </div>
              </div>
              <div className="font-bold text-xl">Kr. {property.price}</div>
            </div>
            <div className="flex w-full justify-end items-end h-full">
              <Button
                type="submit"
                className="w-48 rounded-none bg-[#162A41] h-16 text-[1.1rem]"
                onClick={() => setIsFavourite(false)}
              >
                Fjern fra favotitter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

import SubNavigation from "@/components/subNavigation";
import { Input } from "@/components/ui/input";
import FavouritePropertyCard from "@/components/favouritePropertyCard";

import { propertiesData } from "@data/property-data";

function Favorites() {
  return (
    <div className="h-auto">
      <SubNavigation title="Mine favoritboliger" />
      <div className="mx-96">
        {/* search button */}
        <div className="relative">
          <Image
            src="/icons/search.svg"
            alt="description_of_image"
            width="25"
            height="25"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          />
          <Input
            placeholder="Søg i favoritter"
            className="pl-10 text-[1rem] rounded w-72"
          />
        </div>

        {/* separator */}
        <Separator className="bg-gray-300 w-full h-[0.05rem] mt-5 mb-10" />

        {/* favourite properties */}
        <div className="flex flex-wrap gap-10 justify-between pb-24">
          {propertiesData.map((property, index) => (
            <FavouritePropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;

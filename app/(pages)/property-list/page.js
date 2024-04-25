"use client";
import React, { useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import RangeSlider, { Slider } from "@/components/rangeSlider";
import SubNavigation from "@/components/subNavigation";
import PropertyCard from "@/components/propertyCard";



function PropertyList() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Fetch houses data here and set it to the state
    const fetchHousesData = async () => {
      try {
        const response = await fetch("https://dinmaegler.onrender.com/homes");
        const data = await response.json();
        setHouses(data); // Assuming the response data is an array of houses
        // Log the fetched data
      } catch (error) {
        console.error("Error fetching houses data:", error);
      }
    };
    fetchHousesData();
  }, []);

  const handleFavouriteClick = (id) => {
    setHouses(
      houses.map((house) =>
        house.id === id
          ? { ...house, isFavourite: !house.isFavourite }
          : house
      )
    );
  };

  return (
    <div className="h-auto mb-24">
      <SubNavigation title="Boliger til salg" />
      <div className="mx-96">
        <div className="text-2xl font-bold">Søg efter dit drømmehus</div>
        <Separator className="bg-[#162A41] w-[3.5rem] h-[0.25rem] mt-2 mb-4 " />
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-lg">Ejendomstype</div>
            <div className="pb-10">
              <Select>
                <SelectTrigger className="w-[320px] rounded-none text-gray-400 h-12">
                  <SelectValue placeholder="Ejendomstype" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sample</SelectLabel>
                    <SelectItem value="sample1">Villa</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">Pris-interval</div>
            <div>
              <RangeSlider />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-7 justify-between h-auto mt-12">
          {houses && houses.slice(0, 8).map((house, index) => (
            <PropertyCard key={index} house={house} />
          ))}
        </div>



      </div>
    </div>
  );
}

export default PropertyList;

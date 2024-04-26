"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

import SubNavigation from "@/components/subNavigation";
import { Input } from "@/components/ui/input";
import FavouritePropertyCard from "@/components/favouritePropertyCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Retrieve favorite properties from local storage
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites") || "{}");
    // Convert the object of favorites into an array
    const favoritesArray = Object.keys(favoritesFromStorage).map(key => favoritesFromStorage[key]);
    setFavorites(favoritesArray);
  }, []);

  // Function to remove property from favorites
  const removeProperty = (idToRemove) => {
    const updatedFavorites = favorites.filter((house) => house.id !== idToRemove);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

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

        {/* Display favorite properties */}
        <p>{favorites.length} favoritboliger gemt</p>

        <div className="flex flex-wrap gap-7 justify-between h-auto mt-12">
          {favorites.map((house, index) => (
            <FavouritePropertyCard key={index} house={house} removeProperty={removeProperty} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;

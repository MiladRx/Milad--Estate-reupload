"use client";


import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { agentData } from "@/lib/data/agent-data";

export default function PropertyCard({ house, index }) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    // Check if the property is marked as favorite in local storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavourite(favorites.some(property => property.id === house.id));
  }, [house.id]);

  const toggleIsFavorite = () => {
    const newIsFavorite = !isFavourite;
    setIsFavourite(newIsFavorite);

    // Retrieve existing favorite array from local storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (newIsFavorite) {
      // If it's not in favorites, add it to favorites
      if (!favorites.find(property => property.id === house.id)) {
        favorites.push({
          id: house.id,
          adress: house.adress1,
          city: house.city,
          postalcode: house.postalcode,
          price: house.price,
          cost: house.cost,
          rooms: house.rooms,
          type: house.type,
          livingspace: house.livingspace,
          imageUrl: house.images[0].formats.thumbnail.url
        });
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    } else {
      // If it's in favorites, remove it from favorites
      const favoriteIndex = favorites.findIndex(property => property.id === house.id);
      if (favoriteIndex !== -1) {
        favorites.splice(favoriteIndex, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    }
  };

  return (
    <>
      {house && (
        <Card key={index} className="w-[34.5rem] border-none">
          <CardContent className="flex flex-col p-0 h-auto w-full rounded shadow-md">
            <Link href={`/property-list/${house?.id}`}>
              {house.images && house.images.length > 0 && (
                <img
                  src={house.images[0].formats.thumbnail.url} // Get the URL of the first image
                  alt="description_of_image"
                  width="560"
                  height="200"
                  className="p-0 m-0"
                />
              )}
            </Link>

            <div className="flex flex-end top-0 w-full h-full p-5 mb-[-4rem] justify-end">
              <div className="w-10 h-10 z-10 mt-[-23rem] bg-white rounded-full flex items-center justify-center">
                <button onClick={toggleIsFavorite}>
                  <Image
                    src={
                      isFavourite
                        ? "/icons/black_heart.svg"
                        : "/icons/heart.svg"
                    }
                    alt="description_of_image"
                    width="15"
                    height="15"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-5 space-y-2">
              <p className="font-bold text-xl pt-5">{house.adress1}</p>
              <p className="text-lg">{house.postalcode} {house.city}</p>
              <div className="flex gap-1">
                <p className="font-bold text-lg">{house.type} • </p>
                <p className="text-lg">Ejerudgift: {house.cost} kr</p>
              </div>
              <div className="my-2">
                <Separator />
              </div>
              <div className="flex justify-between pb-2">
                <div className="flex gap-5">

                  <p
                    style={{ backgroundColor: house.letterBG }}
                    className={`h-7 w-7 justify-center items-center flex text-white font-bold`}
                  >
                    {house.energyLable}
                  </p>


                  <div className="flex text-sm pt-1">
                    {house.rooms} værelser . {house.livingspace} m
                    <sup className="text-xs">2</sup>
                  </div>
                </div>
                <div className="font-bold text-xl">Kr. {house.price}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}

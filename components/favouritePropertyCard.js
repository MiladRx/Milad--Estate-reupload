"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function FavouritePropertyCard({ house, removeProperty }) {
  return (
    <Card className="w-full border mb-4 border-gray-300">
      <CardContent className="flex p-8 h-auto rounded">
        <Link href={`/property-list/${house.id}`}>
          <Image
            src={house.imageUrl} // Assuming there's an 'image' field in your house object
            alt="description_of_image"
            width="300"
            height="300"
            className="p-0 m-0 h-36 rounded-sm"
          />
        </Link>
        <div className="flex flex-col w-[20rem] gap-3 mx-12 items-start">
          <p className="font-bold text-xl">{house.adress}</p>
          <p className="text-lg">{house.postalcode} {house.city}</p>
          <div className="flex gap-1">
            <p className="font-bold text-lg">{house.type}</p>
            <p className="text-lg">Ejerudgift: {house.cost} kr. </p>
          </div>
        </div>
        <div className="flex flex-col w-[25rem]">
          <div className="flex w-full space-x-10 justify-between">
            <div className="flex gap-5">
              <div
                style={{ backgroundColor: house.letterBG }}
                className={`h-7 w-7 justify-center items-center flex text-white font-bold`}
              >
                {house.energyLable}
              </div>
              <div className="flex text-base pt-1">
                {house.rooms} værelser . {house.livingspace} m
                <sup className="text-xs">2</sup>
              </div>
            </div>
            <div className="font-bold text-xl">Kr. {house.price}</div>
          </div>
          <div className="flex w-full justify-end items-end h-full">
            <Button
              type="submit"
              className="w-48 rounded-none bg-[#162A41] h-16 text-[1.1rem]"
              onClick={() => removeProperty(house.id)}
            >
              Fjern fra favoritter
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

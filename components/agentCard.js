"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function AgentCard({ agent }) {
  const [agentData, setAgentData] = useState(null);
  useEffect(() => {
    fetch("https://dinmaegler.onrender.com/agents")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the response data is an array of agents
        // You might need to adjust this based on the actual response structure
        setAgentData(data);
        console.log(data); // Log the fetched agents data
      })
      .catch((error) => console.error("Error fetching agents:", error));
  }, []); // Empty dependency array means this effect runs only once, on mount

  

  return (
    <>
      {agentData && agentData.map((agent, index) => (
        <Card key={index} className="w-[21.5rem] m-4">
          <CardContent className="flex flex-col items-center justify-center p-0 h-auto w-full rounded border border-gray-200">
            <Link href={`/agents/${agent.id}`}>
              {/* Use agent's image URL instead of static image */}

              <Image
                src={agent.image.url}
                alt={agent.name}
                width="400"
                height="200"
              />

            </Link>
            <p className="font-bold text-2xl pt-5">
              <Link href={`/agents/${agent.id}`}>{agent.name}</Link>
            </p>
            <p className="text-gray-400 text-lg">{agent.address}</p>
            <div className="flex gap-5 mb-5 mt-6">
              <Image
                src="/icons/message.svg"
                alt="description_of_image"
                width="20"
                height="20"
              />
              <Image
                src="/icons/linkedin.svg"
                alt="description_of_image"
                width="20"
                height="20"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

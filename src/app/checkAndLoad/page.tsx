"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function CheckAndLoadPage() {
  const router = useRouter();
  return (
    <main>
      <div className="flex flex-col justify-between p-4">
        <h1 className="heading text-center text-4xl font-bold mb-4">
          Viimestely & Lataus
        </h1>

        <div className="flex content justify-around mt-10">
          <Image
            width={240}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
          <p className="tips mt-5 p-2">
            Tässä on valmis ansioluettelo! Halutessasi voit muokata vielä
            menemällä takaisin siihen osioon minne haluat ja muokata tekstiä.
            Lataa Ansioluettelo ja olet valmis käyttämään heti!
          </p>
        </div>

        <div className=" mt-10 flex justify-between button-group ">
          <Button
            color="primary"
            onClick={() => {
              router.push("/profile");
            }}
          >
            Takaisin
          </Button>
          <Button color="primary">Lataa Ansioluettelo</Button>
          <Button
            color="primary"
            onClick={() => {
              router.push("/");
            }}
          >
            Takaisin kotisivulle
          </Button>
        </div>
      </div>
    </main>
  );
}

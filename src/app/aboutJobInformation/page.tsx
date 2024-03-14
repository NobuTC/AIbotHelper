"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex-col justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-4 ">Työilmoituksen liittäminen</h1>
      </div>

      <div className="flex">
        <Image
          isZoomed
          width={240}
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
        />

        <div className="ml-5">
          <h3>Ohje:</h3>

          <h4>
            Kopioi tähän vain työilmoitusken teksi. Näin saan selkeän käsityksen
            kyseisestä IT-alan työpaikasta ja osaan keskittyä oikeisiin asioihin
            ansioluettelon luomisessa.
          </h4>

          <h4>
            Päästäksesi seuraavaan osioon, paina &quot;Seuraava&quot; ja
            palataksesi taaksepäin, paina &quot;Takaisin&quot;.
          </h4>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <Button
          color="primary"
          onClick={() => {
            router.push("/");
          }}
        >
          Takaisin
        </Button>
        <Button color="primary">Tallenna työilmoitus</Button>
        <Button
          color="primary"
          onClick={() => {
            router.push("/contactFilling");
          }}
        >
          Seuraava
        </Button>
      </div>
    </main>
  );
}

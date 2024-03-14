"use client";
import React from "react";
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function FrontPage() {
  const router = useRouter();

  return (
    <main className="mx-auto">
      <div className="mx-auto container frontpage flex">
        <div className="p-2 text-center flex-col p-3 mt-10 justify-center">
          <h1 className="text-4xl font-bold mb-4 ">
            Tervetuloa AIBotHelperiin!
          </h1>

          <div className="p-4 mt-5 flex justify-center">
            <Image
              width={240}
              alt="NextUI Fruit Image with Zoom"
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
            ></Image>

            <div className="md:w-1/2 text left">
              <h3 className="mb-2">
                Olen täällä avustamassa sinua luomaan ansioluettelon. Annan
                vihjeitä ja autan innoillani liittyen IT-alan töihin.
              </h3>
              <h4>
                Tähdellä (*) merkityt kohdat ovat pakollisia täyttää. Voit
                jättää muut kohdat tyhjiksi, jos niihin ei ole tietoja. Paina
                &quot;seuraava&quot; etenemiseksi.
              </h4>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button
              color="primary"
              onClick={() => {
                router.push("/aboutJobInformation");
              }}
            >
              Luo ansioluettelo
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

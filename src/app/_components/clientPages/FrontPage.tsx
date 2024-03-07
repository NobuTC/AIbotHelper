import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function FrontPage() {
  return (
    <main className="mx-auto">
      <div className="mx-auto container frontpage flex">
        <div className="p-2 text-center flex-col p-3 mt-10 justify-center">
          <h1 className="text-4xl font-bold mb-4 ">
            Tervetuloa AIBotHelperiin!
          </h1>

          <div className="p-4 mt-5 flex items-center">
            <img
              src="/images/kirja.jpg"
              alt="kirja"
              className=" w-40 h-auto  mr-8 "
            ></img>
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
            <Button color="primary">Seuraava</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

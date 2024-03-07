import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function FrontPage() {
  return (
    <main className="mx-auto">
      <div className="mx-auto container bg-cover bg-center frontpage flex">
        <div className="relative flex-1 md:flex-3 p-2">
          <div className=" text-center">
            <h1>Tervetuloa AIBotHelperiin!</h1>
            <Button color="primary">Seuraava</Button>
            <h3>
              Olen täällä avustamassa sinua luomaan ansioluettelon. Annan
              vihjeitä ja autan innoillani liittyen IT-alan töihin.
            </h3>
            <h4>
              Tähdellä (*) merkityt kohdat ovat pakollisia täyttää. Voit jättää
              muut kohdat tyhjiksi, jos niihin ei ole tietoja. Paina
              &quot;seuraava&quot; etenemiseksi.
            </h4>

            <div>
              <img src="/images/kirja.jpg" alt="kirja" className=" w-50"></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

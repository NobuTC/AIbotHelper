"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Degree() {
  const router = useRouter();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Koulutuksen täydentäminen</h1>

      <div className="flex-col">
        <div className="w-full flex-wrap md:flex-nowrap gap-5">
          <div className="flex justify-evenly mt-5">
            <Input
              isRequired
              type="Degree"
              label="Tutkinnon nimi"
              placeholder="syötä tutkinnon nimi"
              className="mr-4"
            />
            <Input
              isRequired
              type="location"
              label="Missä oppilaitos sijaitsi?"
              placeholder="syötä oppilaitoksen sijainti"
              className="mr-4"
            />
          </div>

          <div className="flex justify-evenly mt-5">
            <Input
              isRequired
              type="date"
              label="Opintojen aloitus päivämäärä"
              placeholder=""
              className="mr-2"
            />
            <text className="text-4xl mb-4 mr-2">-</text>
            <Input
              isRequired
              type="date"
              label="Opintojen päättymispäivä tai arvioitu valmistumispäivä"
              placeholder=""
              className="mr-4"
            />
          </div>

          <div className="flex justify-evenly mt-5">
            <Input
              type="description"
              label="Mitä opit ja mitä kursseja olet käynyt?"
              placeholder="Kerro vähän omista oppimisesta ja kurseista"
              className="mr-4"
            />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <Button
            color="primary"
            onClick={() => {
              router.push("/project");
            }}
          >
            Takaisin
          </Button>
          <Button color="primary">Tallenna koulutus</Button>
          <Button color="primary">Lisää koulutus</Button>
          <Button
            color="primary"
            onClick={() => {
              router.push("/sertificate");
            }}
          >
            Seuraava
          </Button>
        </div>
      </div>
    </main>
  );
}

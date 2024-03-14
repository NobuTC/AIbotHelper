"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function WorkExperince() {
  const router = useRouter();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Työkokemuksen täydentäminen</h1>

      <div className="flex-col">
        <div className="w-full flex-wrap md:flex-nowrap gap-5">
          <div className="flex justify-evenly mt-5">
            <Input
              type="companyName"
              label="Missä yrityksessä työskentelit?"
              placeholder="syötä yrityksen nimi"
              className="mr-4"
            />
            <Input
              type="companyRole"
              label="Mikä oli sinun roolisi yrityksessä?"
              placeholder="syötä roolisi"
              className="mr-4"
            />
          </div>

          <div className="flex justify-evenly mt-5">
            <Input
              type="date"
              label="Työn aloitus päivä"
              placeholder="4.2.2022 - 26.10.2024"
              className="mr-2"
            />
            <text className="text-4xl mb-4 mr-2">-</text>
            <Input
              type="date"
              label="Työn lopetus päivä"
              placeholder="4.2.2022 - 26.10.2024"
              className="mr-4"
            />
            <Input
              type="location"
              label="Missä yritys sijaitsi?"
              placeholder="syötä yrityksen sijainti"
              className="mr-4"
            />
          </div>

          <div className="flex justify-evenly mt-5">
            <Input
              type="description"
              label="Mitkä oli sinun tehtävät?"
              placeholder="Kerro työkuvauksesta"
              className="mr-4"
            />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <Button
            color="primary"
            onClick={() => {
              router.push("/contactFilling");
            }}
          >
            Takaisin
          </Button>
          <Button color="primary">Tallenna työilmoitus</Button>
          <Button color="primary">Lisää työkokemus</Button>
          <Button
            color="primary"
            onClick={() => {
              router.push("/project");
            }}
          >
            Seuraava
          </Button>
        </div>
      </div>
    </main>
  );
}

"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Sertificate() {
  const router = useRouter();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Sertifikaatin täydentäminen</h1>

      <div className="flex-col">
        <div className="w-full flex-wrap md:flex-nowrap gap-5">
          <div className="flex justify-evenly mt-5">
            <Input
              type="name"
              label="Sertifikaatin nimi"
              placeholder="syötä sertifikaatin nimi"
              className="mr-4"
            />
            <Input
              type="location"
              label="Mistä sait seritifikaatin?"
              placeholder="syötä sertifikaatin paikka"
              className="mr-4"
            />
          </div>

          <div className="flex justify-evenly mt-5">
            <Input
              type="date"
              label="Milloin sait sertifikaatin?"
              placeholder=""
              className="mr-6"
            />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <Button
            color="primary"
            onClick={() => {
              router.push("/degree");
            }}
          >
            Takaisin
          </Button>
          <Button color="primary">Tallenna sertifikaatti</Button>
          <Button color="primary">Lisää sertifikaatti</Button>
          <Button
            color="primary"
            onClick={() => {
              router.push("/skills");
            }}
          >
            Seuraava
          </Button>
        </div>
      </div>
    </main>
  );
}

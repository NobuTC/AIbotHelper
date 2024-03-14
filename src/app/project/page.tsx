"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function ProjectExperience() {
  const router = useRouter();
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Projektin täydentäminen</h1>

      <div className="flex-col">
        <div className="w-full flex-wrap md:flex-nowrap gap-5">
          <div className="flex justify-evenly mt-5">
            <Input
              type="projectName"
              label="Minkän projektin teit yksin tai ryhmässä?"
              placeholder="syötä projektin nimi"
              className="mr-4"
            />
            <Input
              type="role"
              label="Mikä oli sinun roolisi projektissa?"
              placeholder="syötä roolisi"
              className="mr-4"
            />
          </div>

          <div className="flex justify-evenly mt-5">
            <Input
              type="description"
              label="Mitkä oli sinun tehtävät projektissa?"
              placeholder="syötä projektin kuvaus"
              className="mr-4"
            />
          </div>

          <div className="flex justify-evenly mt-5">
            <Input
              type="link"
              label="GITHub URL"
              placeholder="Syötä GITHub URL"
              className="mr-4"
            />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <Button
            color="primary"
            onClick={() => {
              router.push("/workExperience");
            }}
          >
            Takaisin
          </Button>
          <Button color="primary">Tallenna projekti</Button>
          <Button color="primary">Lisää projekti</Button>
          <Button
            color="primary"
            onClick={() => {
              router.push("/degree");
            }}
          >
            Seuraava
          </Button>
        </div>
      </div>
    </main>
  );
}

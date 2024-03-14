"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function ContactFilling() {
  const router = useRouter();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Yhteistiedon täydentäminen</h1>

      <div className="flex-col">
        <div className="w-full flex-wrap md:flex-nowrap gap-5">
          <div className="flex justify-evenly mt-5">
            <Input
              isRequired
              type="firstname"
              label="Etunimi"
              placeholder="syötä etunimesi"
              className="mr-4"
            />
            <Input
              isRequired
              type="lastname"
              label="Sukunimi"
              placeholder="syötä sukunimi"
              className="mr-4"
            />
          </div>

          <div className="flex justify-evenly mt-5">
            <Input
              isRequired
              type="email"
              label="Sähköposti"
              placeholder="syötä sähköposti"
              className="mr-4"
            />
            <Input
              isRequired
              type="phonenumber"
              label="Puhelin numero"
              placeholder="syötä puhelinnumero"
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
            <Input
              type="link"
              label="Linkedin URL"
              placeholder="Syötä Linkedin URL"
              className="mr-4"
            />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <Button
            color="primary"
            onClick={() => {
              router.push("/aboutJobInformation");
            }}
          >
            Takaisin
          </Button>
          <Button color="primary">Tallenna työilmoitus</Button>
          <Button
            color="primary"
            onClick={() => {
              router.push("/workExperience");
            }}
          >
            Seuraava
          </Button>
        </div>
      </div>
    </main>
  );
}

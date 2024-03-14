"use client";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Skills() {
  const router = useRouter();
  return (
    <main>
      <div className="flex flex-col justify-between p-4">
        <h1 className=" text-4xl font-bold mb-4">Taidon täydentäminen</h1>
        <div className="mt-10 flex content justify-evenly">
          <div className=" flex content-left">
            <div className="skill-box ">
              <Input
                isRequired
                type="skillName"
                label="Taidon tai työkalun nimi"
                defaultValue=""
                className="max-w-xs"
              />
              <div className="flex-col flex mt-5">
                <Checkbox defaultSelected size="md">
                  1 (aloittelija)
                </Checkbox>
                <Checkbox defaultSelected size="md">
                  2 (perustaito)
                </Checkbox>
                <Checkbox defaultSelected size="md">
                  3 (keskitaso)
                </Checkbox>
                <Checkbox defaultSelected size="md">
                  4 (edistynyt)
                </Checkbox>
                <Checkbox defaultSelected size="md">
                  5 (asiantuntija)
                </Checkbox>
              </div>
            </div>
          </div>
          <div className="  ml-10 content-right">
            <p>
              Mitä taitoja ja työkaluja osaat käyttää? Arvioi myös osaamistasosi
              asteikolla 1-5, missä 1 tarkoittaa aloittelijatasoa ja 5
              asiantuntijatasoa.
            </p>
            <p className="tips mt-10">i am a tip</p>
          </div>
        </div>
        <div className=" mt-10 flex justify-between button-group ">
          <Button
            color="primary"
            onClick={() => {
              router.push("/sertificate");
            }}
          >
            Takaisin
          </Button>
          <Button color="primary">Tallenna tallenna taito</Button>
          <Button color="primary">Lisää taito</Button>
          <Button
            color="primary"
            onClick={() => {
              router.push("/profile");
            }}
          >
            Seuraava
          </Button>
        </div>
      </div>
    </main>
  );
}

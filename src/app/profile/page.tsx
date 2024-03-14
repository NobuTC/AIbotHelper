"use client";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Profiilin täydentäminen</h1>
      <div className="flex content justify-around">
        <div className="mt-10">
          <Input
            isRequired
            type="description"
            label="Kirjoita itsestäsi lyhyt kuvaus ja tavoitteet"
            defaultValue=""
            className="max-w-xs"
          />
        </div>

        <p className="tips mt-10">i am a tip</p>
      </div>

      <div className=" mt-10 flex justify-between button-group ">
        <Button
          color="primary"
          onClick={() => {
            router.push("skills");
          }}
        >
          Takaisin
        </Button>
        <Button color="primary">Tallenna Profiili</Button>
        <Button
          color="primary"
          onClick={() => {
            router.push("/checkAndLoad");
          }}
        >
          Seuraava
        </Button>
      </div>
    </main>
  );
}

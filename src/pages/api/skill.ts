import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

type TestParams = {
  params: { keywords: string };
};

type ResponseData = {
  message: string;
};
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

type Skills = {
  name: string;
  level: number;
};

type MyRequest = {
  jobDescription: string;
  experiences: Skills[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { jobDescription, experiences } = req.body as MyRequest;
    const question = ` Vastaako minun taidot työilmoitusta ja arvosanan jonka olen laittanut?"

    Anna neuvo ytimekkäästi vain käyttäjän taidoista ja lyhyesti 3 lausein. 
    
    Ehdota käyttäjää laittamaan enemmän taitoja tarvittaessa, 
    mutta vain ohjelmointikielejä ja niitten työkaluja.

    Käske poistamaan ei tarvittavat taidot ja työkalut, jos ei liity työilmoitukseen

    Älä ehdota mitään linkkejä käyttäjälle.
    Älä korosta tiimityöskentelyä ja jatkuvaa halua oppia uutta `;

    const message = `${question} Tässä on minun taidot ja arvosanat ${JSON.stringify(
      experiences
    )}, tässä on työilmoitus ${jobDescription}`;

    // Process a POST request
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });
    const reply = chatCompletion.choices[0].message.content || "";
    res.status(200).json({ message: reply });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ message: "Hello GET from Next.js!" });
  }
}

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

type Certificate = {
  certificateName: string;
  location: string;
  dateReceived: string;
};

type MyRequest = {
  jobDescription: string;
  experiences: Certificate[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { jobDescription, experiences } = req.body as MyRequest;
    const question = ` Kuinka hyvin uskot, että sertifikaatit 
    tukevat työilmoitusta?

    Vastaa käyttäjälle erittäin lyhyesti 

    Ehdota jotain sertifikaatteja poistamaan jos ne eivät vastaa tai tue työilmoitusta.

    Älä ehdota mitään linkkejä käyttäjälle. `;
    const message = `${question} Tässä on minun sertifikaatit ${JSON.stringify(
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

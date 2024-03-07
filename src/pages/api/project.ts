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

type Project = {
  projectName: string;
  role: string;
  projectUrl: string;
  description: string;
};

type MyRequest = {
  jobDescription: string;
  experiences: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { jobDescription, experiences } = req.body as MyRequest;
    const question = `Mitä mieltä olet minun projekti kohdasta ja sen kuvauksesta? 
    Pitääkö lisätä jotain tai korjata?

    Anna neuvo lyhyesti 3 lausein.
    
    Älä ehdota mitään linkkejä. `;
    const message = `${question} Tässä on minun projektit ${JSON.stringify(
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

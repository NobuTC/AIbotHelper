export async function POST(request: { body: any }) {
  const data = request.body;

  const contact = {
    user_first_name: data.contact.first_name,
    user_last_name: data.contact.last_name,
    email: data.contact.email,
    githubUrl: data.contact.githubUrl,
    phone_number: data.contact.phone_number,
    linkedinUrl: data.contact.linkedinUrl,
  };

  const work_experience = {
    company_name: data.work_experience.company_name,
    role: data.work_experience.role,
    location: data.work_experience.location,
    duration: data.work_experience.duration,
    description: data.work_experience.description,
  };

  const project = {
    project_name: data.project.project_name,
    role: data.project.role,
    project_url: data.project.project_url,
    description: data.project.description,
  };

  const education = {
    degree: data.education.degree,
    graduation_date: data.education.graduation_date,
    location: data.education.location,
    description: data.education.description,
  };

  const certifications = {
    name: data.certifications.name,
    location: data.certifications.location,
    date_received: data.certifications.date_received,
  };

  const skills = data.skills.map(
    (skill: { skill: string; level: number; rating: number }) => ({
      skill: skill.skill,
      level: skill.level,
      rating: skill.rating,
    })
  );

  const profile = {
    description: data.profile.description,
  };

  try {
    const newUserData = await data.create({
      data: contact,
      work_experience,
      project,
      education,
      certifications,
      skills,
      profile,
    });
    console.log("Created new userdata!", newUserData);
    return Response.json({ newUserData });
  } catch (error) {
    console.error("Error creating new userdata", error);
    return new Response("Cannot create User", { status: 400 });
  }
}

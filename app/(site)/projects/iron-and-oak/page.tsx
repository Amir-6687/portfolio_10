import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { iao } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Amir Akbari - Projects Iron & Oak Köln",
  description: "How I created a storytelling-focused website for Iron & Oak Köln, achieving 4100% traffic growth and 290% increase in job applicants.",
  keywords: ["Amir Akbari", "Iron & Oak", "Köln", "Private Security", "Next.js", "Web Design", "Storytelling", "Serbyte"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.iao,
  },
}

const IaoPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={iao} />
    </>
  )
}

export default IaoPage

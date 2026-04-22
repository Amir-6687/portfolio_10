import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import tarkhinehPreview from "@/app/images/Tarkhineh-project.jpg"
import secondHandPreview from "@/public/assets/Second-Hand-Home.png"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import IconSpritePreview from "@/app/images/zero-icon-sprite-preview.jpg"
import rayanStatePreview from "@/public/assets/Rayan_State_Bild.png"
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "rayan-state",
    src: rayanStatePreview,
    alt: "Rayan State - Preview",
    color: "#1e40af",
    type: "Real Estate Platform",
    text: "View Website",
    href: externalLinks.rayanState,
    dataText: "View Website",
    ariaLabel: "View Rayan State Website",
    isExternal: true,
  },
  {
    id: "tarkhineh",
    src: tarkhinehPreview,
    alt: "Tarkhineh Restaurant Website",
    color: "#0A7F42",
    type: "Restaurant Website",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.tarkhineh,
    dataText: "See Case Study",
    ariaLabel: "See Tarkhineh Restaurant Website Build Case Study",
    isExternal: false,
  },
  {
    id: "zero-icon-sprite",
    src: IconSpritePreview,
    alt: "Zero-Icon-Sprite Preview",
    color: "#3B06D1A5",
    type: "SVG Build Tool",
    text: "View on GitHub",
    href: externalLinks.zeroIconSprite,
    dataText: "View on GitHub",
    ariaLabel: "View React Zero UI Icon Sprite on GitHub",
    isExternal: true,
  },

  {
    id: "second-hand",
    src: secondHandPreview,
    alt: "Second-Hand Marketplace Preview",
    color: "#4A6CF7",
    type: "Second-Hand Marketplace",
    text: "View Project",
    href: "https://second-hand-vayr.vercel.app/",
    dataText: "View Project",
    ariaLabel: "View Second-Hand Marketplace Project",
    isExternal: true,
  },
  {
    id: "entitled",
    src: entitledPreview,
    alt: "Entitled Preview",
    color: "#DA961AA5",
    type: "Event Management Web App",
    text: "View Website",
    href: externalLinks.entitled,
    dataText: "View Website",
    ariaLabel: "View Entitled Website",
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link
            const wrapperProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <ProjectWrapper key={project.id} {...wrapperProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </ProjectWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

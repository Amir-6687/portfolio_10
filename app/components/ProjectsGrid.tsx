"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import rayanStatePreview from "@/public/assets/Rayan_State_Bild.png"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks } from "@/config/siteConfig"
import tarkhinehPreview from "@/app/images/Tarkhineh-project.jpg"

const ids = ["automedics", "rayan-state", "iron-and-oak", "tarkhineh"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    "rayan-state": { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    "iron-and-oak": { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    automedics: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    tarkhineh: {
      rot: 6,
      s: responsiveScale,
      dx: isMobile ? -220 : -40,
      dy: isMobile ? -120 : -30,
    },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]

      // اگر به هر دلیلی base یا t هنوز آماده نیست، یک مقدار پیش‌فرض بده
      if (!base || !t) {
        return [
          id,
          {
            x: 0,
            y: 0,
            rot: 0,
            s: responsiveScale,
          },
        ]
      }

      return [
        id,
        {
          x: base.x! + (t.dx ?? 0),
          y: base.y! + (t.dy ?? 0),
          rot: t.rot ?? 0,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"rayan-state"}
          src={rayanStatePreview}
          alt={"Rayan State - Preview"}
          offset={offsets["rayan-state"]}
          gridId="rayan-state"
          color="#1e40af"
          type="Real Estate Platform"
          progress={progress}
          href={externalLinks.rayanState}
          dataText="View Website"
        />
        <AnimatedCard
          key="Tarkhineh"
          src={tarkhinehPreview}
          alt="Tarkhineh Restaurant Website"
          offset={offsets["tarkhineh"]}
          gridId="tarkhineh"
          color="#0A7F42"
          type="Restaurant Website"
          progress={progress}
          dataText="View Project"
        />

        <AnimatedCard
          key="Automedics"
          src={automedicsPreview}
          alt={"Automedics Preview"}
          offset={offsets["automedics"]}
          gridId="automedics"
          color="#DA961A"
          type="Automotive Repair"
          progress={progress}
          dataText="View Case Study"
        />
        <AnimatedCard
          key={"IAO"}
          src={iaoPreview}
          alt={"IAO Preview"}
          offset={offsets["iron-and-oak"]}
          gridId="iron-and-oak"
          color="#13739C"
          type="Private Security"
          progress={progress}
          dataText="View Case Study"
        />
      </div>
    </section>
  )
}

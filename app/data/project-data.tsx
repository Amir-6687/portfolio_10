import { StaticImageData } from "next/image"
// import { TintSimulator } from "../components/BespokeTint/TintSimulator"
import { Phase } from "../components/ProjectSection/ApproachSection"
// import heroBefore from "@/public/assets/bespoke-hero-before.png"
// import heroBeforeMobile from "@/public/assets/bespoke-hero-mobile.png"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"
import { REVIEW_MAP, type ReviewProps } from "./review-data"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"
import tarkhinehHero from "@/app/images/Tarkhineh-project.jpg"
import tarkhinehBackground from "@/app/images/Tarkhineh-background.png"
import secondHandImage from "@/public/assets/Second-Hand-Home.png"

export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  // link to the client's website
  link: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter: {
    heroBefore: StaticImageData
    heroBeforeMobile: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText: string
    beforeMobileAltText: string
    afterAltText: string
  }
  results: AnalyticCardProps[]
  phases: Phase[]
  review: ReviewProps
  slug: string
}

//

export const secondHand: ProjectData = {
  hero: {
    title: "Second‑Hand Marketplace Platform",
    client: "Second‑Hand",
    year: "2025",
    description: "A modern, fast and user‑friendly marketplace for buying and selling second‑hand items, built with a clean UI and optimized performance.",
    categories: ["Next.js", "UI/UX", "Marketplace"],
    link: "https://second-hand-vayr.vercel.app/",
  },
  slug: "second-hand",
  beforeAfter: {
    heroBefore: secondHandImage,
    heroBeforeMobile: secondHandImage,
    beforeAltText: "Second‑Hand Marketplace Preview",
    beforeMobileAltText: "Second‑Hand Marketplace Preview Mobile",
    afterAltText: "Second‑Hand Marketplace Final Design",
  },
  results: [],
  phases: [],
  review: { quote: "A clean and modern second‑hand marketplace with a smooth user experience.", name: "Client", title: "Project Owner", img: secondHandImage },
}

export const tarkhineh: ProjectData = {
  hero: {
    title: "Tarkhineh Restaurant Website",
    client: "Tarkhineh Restaurant",
    year: "2025",
    description: "Iranian Restaurant",
    categories: ["HTML", "CSS", "SEO"],
    link: "https://amir-6687.github.io/Tarkhineh/",
  },

  slug: "tarkhineh",

  beforeAfter: {
    heroBefore: tarkhinehBackground,
    heroBeforeMobile: tarkhinehBackground,
    beforeAltText: "Tarkhineh Website Preview",
    beforeMobileAltText: "Tarkhineh Website Preview Mobile",
    afterAltText: "Tarkhineh Website Final Design",
  },

  results: [],

  phases: [],

  review: {
    quote: "A clean and modern restaurant website with focus on UX.",
    name: "Client",
    title: "Restaurant Owner",
    img: tarkhinehHero,
  },
}

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
import heroBeforeIao from "@/public/assets/iron-and-oak-before-website-design.jpg"
import heroBeforeMobileIao from "@/public/assets/iron-and-oak-before-website-design-mobile.jpg"
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

export const iao: ProjectData = {
  hero: {
    title: (
      <>
        Telling the Story <br /> of Iron & Oak
      </>
    ),
    client: "Iron & Oak Seattle",
    year: "2024",
    description:
      "I dug into Iron & Oak Seattle's origin story-founded amid the COVID-19 disruptions-and rebuilt their website in Next.js around a clear, narrative-driven structure. I also scraped the web for press mentions and coverage to reinforce credibility. The goal was simple: increase qualified online applicants. It worked, driving a noticeable lift in submissions.",
    categories: ["Next.js", "Web Design", "Web Development", "Storytelling"],
    link: "https://iao-seattle.vercel.app/?src=serbyte",
  },
  slug: "iron-and-oak",
  beforeAfter: {
    heroBefore: heroBeforeIao,
    heroBeforeMobile: heroBeforeMobileIao,
    iframe: "https://iao-seattle.vercel.app/?src=serbyte",
    beforeAltText: "Iron & Oak Seattle Before",
    beforeMobileAltText: "Iron & Oak Seattle Before Mobile",
    afterAltText: "Iron & Oak Seattle After Website Design",
  },
  results: [
    {
      title: "Traffic Increase",
      description: "Increase in traffic from all channels",
      percentageIncrease: 4100,
      chart: <TrafficBarChart startValue={10} endValue={410} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Online Applicants",
      description: "Increase in online job applicants",
      percentageIncrease: 290,
      chart: <RadialProgressRing percentage={290} />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Hires",
      description: "Increase in new hires",
      percentageIncrease: 65,
      chart: <LineChart />,
      dataSource: "Measured over a 30 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Brand Identity",
      subtitle: "Creating a brand that tells the story of Iron & Oak",
      description: "Started from scratch to re-brand Iron & Oak Seattle, establishing them as the trusted private security company in their market.",
      details: [
        "Designed custom logo reflecting the brand name and the company's history",
        "Created a brand story that tells the story of Iron & Oak",
        "Created a brand guidelines document",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-brand-guide-web-design.png" alt="Iron & Oak Brand Identity" />,
    },
    {
      id: 2,
      title: "Live Incident Data",
      subtitle: "Showing the world what Iron & Oak is all about",
      description: "We created a live incident data dashboard that displays incidents in real-time, connected to a live incident data API.",
      details: ["Airtable API integration for incident data", "Displays incidents in real-time"],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-website-tool.png" alt="Iron & Oak Website Tool" className="bg-slate-800 px-2.5" />,
    },
    {
      id: 3,
      title: "Press Hub",
      subtitle: "Verified press & community coverage.",
      description: "Curated, verified media mentions centralizing third-party authority to boost trust & conversion.",
      details: [
        "Aggregated all credible third-party mentions",
        "Verified sources; removed low-value noise",
        "Structured data boosts authority signals",
        "Trust hub: social proof near conversion.",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: (
        <ApproachTabsImage src="/assets/iron-and-oak-media-coverage-website-research.png" alt="Iron & Oak Media Coverage" className="bg-slate-200 px-2.5" />
      ),
    },
    {
      id: 4,
      title: "Talent SEO",
      subtitle: "A topical authority engine for security job seekers",
      description: "Designed a content cluster targeting Washington security guard career keywords and established Iron & Oak as the regional authority.",
      details: [
        "37 intent-mapped articles building authority",
        "Targeted WA security job & license keywords",
        "Internal links (pillar/support) speed indexation",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-content-cluster-seo.png" alt="Iron & Oak Content Cluster SEO" />,
    },
    {
      id: 5,
      title: "Applicant Portal",
      subtitle: "Multi-step validated, resume auto-fill, and applicant tracking",
      description: "Built a multi-step, validated application with autosave + resume, cutting friction and preserving in-progress candidates.",
      details: [
        "Stepper UI with clear stage + progress",
        "Client + server validation prevents bad submits",
        "Autosave each step (no data loss)",
        "Resume later via stored progress state",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-job-application-portal-web-design.png" alt="Iron & Oak Applicant Portal" />,
    },
  ],
  review: REVIEW_MAP.iao,
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

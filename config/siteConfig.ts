export const DOMAIN_URL = "https://www.austinserb.com"

export const SITE_CONFIG = {
  title: "Amir Akbari - Web Developer Portfolio | React & Next.js",
  description: "Portfolio of Austin Serb, Seattle-based full-stack engineer. Specializing in Next.js, React, TypeScript, and Tailwind CSS.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Amir Akbari - Web Developer Portfolio",
  keywords: ["Amir Akbari", "Serbyte", "React Zero-UI", "Next.js", "React", "TypeScript", "Full-Stack Engineer", "Seattle"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Austin Serb",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Austin Serb",
  contactTitle: "CEO",
  email: "amirhossein.akbari.de@gmail.com",
  phone: "+17631732291",
  formattedPhone: "+1 (206) 659-6727",
  addressLink: "https://www.google.com/maps/search/?api=1&query=serbyte+development",
  street: "12601 NE 124th ST",
  city: "Köln",
  state: "Köln",
  zipCode: "51145",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  googleReviewLink: "https://g.page/r/CXHVs1ony_76EAI/review",
  profiles: {
    facebook: "https://www.facebook.com/serbytedevelopment/",
    linkedIn: "https://www.linkedin.com/in/amir-hossein-akbari-4a8b51372/",
    yelp: "https://www.yelp.com/biz/serbyte-development-kirkland-3",
    pinterest: "https://www.pinterest.com/serbytedevelopment",
    gbp: "https://g.co/kgs/ay2r1wp",
    github: "https://github.com/Amir-6687",
    x: "https://x.com/AustinSerb",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["https://www.serbyte.net/serbyte-logo.png", "https://www.serbyte.net/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-austin-serb",
  projectLinks: {
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
    tarkhineh: "/projects/tarkhineh",
  },
} as const

export const externalLinks = {
  rayanState: "https://rayan-state.vercel.app/",
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))

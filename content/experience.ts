export type TimelineItem = {
  dateRange: string;
  title: string;
  badge: string;
  badgeVariant: "neutral" | "accent";
  description: string;
  active: boolean;
};

export const experience = {
  sectionTitle: "Experience & Credentials Timeline",
  sectionLabel: "03/",
  metaLabel: "[ CHRONO RECORD ]",
  items: [
    {
      dateRange: "AUG 2026 – PRESENT",
      title: "Events & Operations Team Member",
      badge: "Monash Blockchain Club",
      badgeVariant: "neutral",
      description:
        "Coordinated vendor communications, event operations, and delegation logistics for major international industry summits including TOKEN2049 Singapore. Managed delegate operations and sponsor logistics.",
      active: true,
    },
    {
      dateRange: "MAY 2026",
      title: "People's Choice Award Winner",
      badge: "ImpactHack x Canva",
      badgeVariant: "accent",
      description:
        "People's Choice Award for Monash Discover, a Figma campus orientation prototype with hotspot navigation and a career skill tree. Placed in the top 6 pitches (top 20%) and presented to industry judges from Canva.",
      active: true,
    },
    {
      dateRange: "FEB 2026",
      title: "CompTIA A+ Professional Certification",
      badge: "CORE 1 & CORE 2",
      badgeVariant: "accent",
      description:
        "Passed Core 1 (220-1101) and Core 2 (220-1102) technical examinations. Validates system architecture diagnostics, POSIX/Windows OS troubleshooting, networking protocols, and baseline security controls.",
      active: true,
    },
    {
      dateRange: "JAN 2024 – NOV 2024",
      title: "Academic Peer Mentor (Mathematics & ICT)",
      badge: "Sunway College",
      badgeVariant: "neutral",
      description:
        "Conducted weekly peer mentoring sessions for Monash Foundation Year students. Explained discrete mathematics, algorithm logic, dynamic array allocation, and OOP principles.",
      active: false,
    },
    {
      dateRange: "2022",
      title: "Southeast Asian Mathematical Olympiad (SEAMO)",
      badge: "Silver Medalist",
      badgeVariant: "neutral",
      description:
        "Awarded Silver Medal and achieved National Rank 18th in advanced mathematical logic, combinatorics, number theory, and algorithmic problem solving.",
      active: false,
    },
  ] satisfies TimelineItem[],
} as const;

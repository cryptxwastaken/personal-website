export type ModalSection =
  | {
      kind: "callout";
      title: string;
      body: string;
    }
  | {
      kind: "list";
      title: string;
      items: { label: string; text: string }[];
    }
  | {
      kind: "note";
      label: string;
      text: string;
    };

export type ProjectModal = {
  title: string;
  tag: string;
  meta: string[];
  sections: ModalSection[];
};

export type CodeLine =
  | { type: "blank" }
  | {
      type: "code";
      parts: { kind: "plain" | "keyword" | "func" | "str" | "comment"; text: string }[];
    };

export type Project = {
  id: "pass-manager" | "monash-discover" | "logtool";
  code: string;
  category: string;
  title: string;
  summary: string;
  highlightsTitle: string;
  highlights: string[];
  stack: string[];
  ctaLabel: string;
  repoUrl?: string;
  panel:
    | {
        kind: "telemetry";
        header: string;
        coverage: { value: string; label: string; note: string; width: string };
        stats: { label: string; value: string }[];
        footerLeft: string;
        footerRight: string;
        codeSnippet: CodeLine[];
      }
    | {
        kind: "benchmarks";
        header: string;
        subheader?: string;
        rows: { label: string; value: string; accent?: boolean }[];
        footerLeft: string;
        footerRight: string;
      };
  modal: ProjectModal;
};

export const projects: Project[] = [
  {
    id: "pass-manager",
    code: "PROJECT_01",
    category: "CRYPTOGRAPHY & SECURITY",
    title: "Encrypted Password Manager",
    summary:
      "A zero-trust local key management vault engineered with Fernet symmetric cryptography and PBKDF2HMAC key derivation. Designed to prevent offline dictionary attacks, key leakage in swap memory, and unauthorized credential extraction.",
    highlightsTitle: "Key Engineering Decisions:",
    highlights: [
      "PBKDF2HMAC key derivation with 100,000 SHA-256 salt iterations.",
      "AES-128 in CBC mode with Fernet HMAC payload verification.",
      "Automated Pytest test suite ensuring zero key leakage in RAM.",
    ],
    stack: [
      "Python 3.11",
      "Fernet AES-128",
      "PBKDF2HMAC",
      "Tkinter GUI",
      "Pytest",
    ],
    ctaLabel: "Full Architecture Spec",
    repoUrl: "https://github.com/cryptxwastaken/fernet-password-manager",
    panel: {
      kind: "telemetry",
      header: "[ TELEMETRY ]",
      coverage: {
        value: "94.8%",
        label: "Unit Test Coverage",
        note: "Verified across PyTest automation suite covering salt derivation, brute-force throttling, and integrity error recovery.",
        width: "94.8%",
      },
      stats: [
        { label: "CIPHER SPEC", value: "AES-128 (Fernet)" },
        { label: "SALT ITERATIONS", value: "100K SHA256" },
      ],
      footerLeft: "SECURITY_VERIFIED: YES",
      footerRight: "ENV: PRODUCTION",
      codeSnippet: [
        {
          type: "code",
          parts: [
            { kind: "keyword", text: "from" },
            { kind: "plain", text: " cryptography.fernet " },
            { kind: "keyword", text: "import" },
            { kind: "plain", text: " Fernet" },
          ],
        },
        {
          type: "code",
          parts: [
            { kind: "keyword", text: "from" },
            { kind: "plain", text: " cryptography.hazmat.primitives " },
            { kind: "keyword", text: "import" },
            { kind: "plain", text: " hashes" },
          ],
        },
        {
          type: "code",
          parts: [
            { kind: "keyword", text: "from" },
            {
              kind: "plain",
              text: " cryptography.hazmat.primitives.kdf.pbkdf2 ",
            },
            { kind: "keyword", text: "import" },
            { kind: "plain", text: " PBKDF2HMAC" },
          ],
        },
        { type: "blank" },
        {
          type: "code",
          parts: [
            { kind: "keyword", text: "def" },
            { kind: "plain", text: " " },
            { kind: "func", text: "derive_key" },
            {
              kind: "plain",
              text: "(passphrase: bytes, salt: bytes) -> bytes:",
            },
          ],
        },
        {
          type: "code",
          parts: [{ kind: "plain", text: "    kdf = PBKDF2HMAC(" }],
        },
        {
          type: "code",
          parts: [
            { kind: "plain", text: "        algorithm=hashes.SHA256()," },
          ],
        },
        {
          type: "code",
          parts: [{ kind: "plain", text: "        length=32," }],
        },
        {
          type: "code",
          parts: [{ kind: "plain", text: "        salt=salt," }],
        },
        {
          type: "code",
          parts: [{ kind: "plain", text: "        iterations=100000," }],
        },
        {
          type: "code",
          parts: [{ kind: "plain", text: "    )" }],
        },
        {
          type: "code",
          parts: [
            { kind: "plain", text: "    " },
            { kind: "keyword", text: "return" },
            {
              kind: "plain",
              text: " base64.urlsafe_b64encode(kdf.derive(passphrase))",
            },
          ],
        },
      ],
    },
    modal: {
      title: "Encrypted Password Manager — Cryptographic Architecture Spec",
      tag: "SECURITY / VAULT ENGINE",
      meta: [
        "TEST COVERAGE: 94.8%",
        "ALGORITHM: PBKDF2HMAC + AES-128-CBC",
        "KEY ITERATIONS: 100,000",
      ],
      sections: [
        {
          kind: "callout",
          title: "Cryptographic Threat Model:",
          body: "The vault is designed to prevent offline dictionary attacks, key leakage in swap memory, and unauthorized RAM credential extraction.",
        },
        {
          kind: "list",
          title: "Technical Execution Details:",
          items: [
            {
              label: "Key Derivation:",
              text: "PBKDF2HMAC with SHA-256 digest, 16-byte random cryptographically secure salt, and 100,000 computation iterations.",
            },
            {
              label: "Symmetric Encryption Payload:",
              text: "Fernet cipher envelope enforcing AES-128-CBC encryption alongside HMAC-SHA256 authentication tags to detect data tampering.",
            },
            {
              label: "Memory Scrubbing:",
              text: "Volatile key variables and bytearrays are explicitly zeroed out immediately following file writing.",
            },
          ],
        },
        {
          kind: "note",
          label: "VERIFICATION SUITE:",
          text: "42 PyTest cases passing with zero unhandled exception paths.",
        },
      ],
    },
  },
  {
    id: "monash-discover",
    code: "PROJECT_02",
    category: "CAMPUS UX / FIGMA",
    title: "Monash Discover Interactive Prototype",
    summary:
      "Interactive campus orientation prototype developed for ImpactHack x Canva. Prototyped the UX flow in Figma, integrating campus hotspot navigation with a career skill tree to map academic and social pathways. Won the People's Choice Award and placed in the top 6 pitches (top 20% of teams) competing within a AU$3,500 prize pool.",
    highlightsTitle: "UX & Pitch Highlights:",
    highlights: [
      "Prototyped the UX flow in Figma with campus hotspot navigation and a career skill tree.",
      "Won People's Choice and placed top 6 pitches (top 20%) in a AU$3,500 prize pool.",
      "Pitched product logic to Canva industry judges, outlining scalability features like real-time study space tracking and gamified campus quests.",
    ],
    stack: [
      "Figma Prototype",
      "UX Interaction Design",
      "Campus Navigation",
      "Product Pitch",
    ],
    ctaLabel: "View Prototype Case",
    panel: {
      kind: "benchmarks",
      header: "[ BENCHMARKS ]",
      subheader: "ImpactHack 2026",
      rows: [
        {
          label: "COMPETITION AWARD",
          value: "People's Choice Award Winner",
          accent: true,
        },
        {
          label: "PITCH STANDING",
          value: "Top 6 / Top 20% of Teams",
        },
        {
          label: "PRIZE POOL",
          value: "AU$3,500 Competition",
        },
      ],
      footerLeft: "AWARD: PEOPLE'S CHOICE",
      footerRight: "STACK: FIGMA",
    },
    modal: {
      title: "Monash Discover Campus Platform — Figma UX Case",
      tag: "FIGMA / CAMPUS UX",
      meta: [
        "AWARD: PEOPLE'S CHOICE",
        "COMPETITION: IMPACTHACK X CANVA",
        "STANDING: TOP 6 PITCHES",
      ],
      sections: [
        {
          kind: "callout",
          title: "Figma Campus Orientation Prototype:",
          body: "End-to-end UX flow prototyping in Figma, combining campus hotspot navigation with a career skill tree that maps academic and social pathways for incoming students.",
        },
        {
          kind: "list",
          title: "Key Platform Features:",
          items: [
            {
              label: "Campus Hotspot Navigation:",
              text: "Interactive Figma prototype guiding students through landmarks, venues, and orientation destinations.",
            },
            {
              label: "Career Skill Tree:",
              text: "Visual pathway mapping that connects academic progression with social and skill-building opportunities on campus.",
            },
            {
              label: "Industry Pitch:",
              text: "Defended design choices to Canva judges and outlined scalability features including real-time study space tracking and gamified campus quests.",
            },
          ],
        },
        {
          kind: "note",
          label: "OUTCOME:",
          text: "People's Choice Award winner; top 6 pitches (top 20% of teams) within a AU$3,500 prize pool.",
        },
      ],
    },
  },
];

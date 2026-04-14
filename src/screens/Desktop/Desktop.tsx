import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { StatCard } from "../../components/StatCard";

interface ProjectCardData {
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  features: { en: string[]; fr: string[] };
  technologies: Array<{ name: string; icon: string; noFilter?: boolean }>;
  githubUrl: string;
  isCurrentSite?: boolean;
  liveUrl?: string;
}

const projectCards: ProjectCardData[] = [
  {
    title: { en: "LeadMagnet", fr: "LeadMagnet" },
    description: {
      en: "A lead magnet for naturopaths, data collection via a quiz-style form, scoring and calculation of results, drafting of a detailed report by AI, and sending by email.",
      fr: "Un lead magnet pour naturopathes, collecte de données via un formulaire type quiz, scoring et calcul des résultats, rédaction d'un rapport détaillé par IA, et envoi par email.",
    },
    features: {
      en: ["Algorithms", "AI Implementation", "0 Vibe Coding"],
      fr: ["Algorithmes", "Implémentation IA", "0 Vibe Coding"],
    },
    technologies: [
      { name: "NodeJS", icon: "/icons/nodejs.svg" },
      { name: "OpenAI", icon: "/icons/openai.svg" },
      { name: "Python", icon: "/icons/python.svg" },
    ],
    githubUrl: "https://github.com/Romain-Brgn/LeadMagnetNaturo",
    liveUrl: "https://naturo.romain-brgn.work",
  },
  {
    title: { en: "Portfolio Website", fr: "Site Portfolio" },
    description: {
      en: "Modern portfolio website with responsive design, multilingual support, and smooth animations to showcase projects and skills.",
      fr: "Site portfolio moderne avec design responsive, support multilingue et animations fluides pour présenter projets et compétences.",
    },
    features: {
      en: ["Responsive Design", "i18n Support", "90% Vibe Coding"],
      fr: ["Design Responsive", "Support i18n", "90% Vibe Coding"],
    },
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      {
        name: "TypeScript",
        icon: "/icons/typescript-svgrepo-com.svg",
        noFilter: true,
      },
      { name: "Bolt.new", icon: "/icons/bolt.svg" },
    ],
    githubUrl: "https://github.com/Romain-Brgn/portfolio",
    isCurrentSite: true,
  },
  {
    title: {
      en: "Personal Blog for Technology Watch",
      fr: "Blog Personnel Veille Technologique",
    },
    description: {
      en: "Retrieval of articles via RSS feeds, storage, and display of relevant articles. AI implementation to search for topics within the archives.",
      fr: "Récupération d'article via flux rss, stockage et affichage des articles pertinents. Implémentation IA pour rechercher des sujets au sein des archives.",
    },
    features: {
      en: ["Data Processing", "AI Implementation", "Automation"],
      fr: ["Traitement de Données", "Implémentation IA", "Automatisation"],
    },
    technologies: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "NodeJS", icon: "/icons/nodejs.svg" },
    ],
    githubUrl: "https://github.com/Romain-Brgn",
  },
];

const ProjectCard = ({
  card,
  t,
  language,
  onSeeMore,
}: {
  card: ProjectCardData;
  t: any;
  language: "en" | "fr";
  onSeeMore?: () => void;
}) => (
  <div className="group relative w-full max-w-[400px] mx-auto h-[282px] bg-[#efefef] dark:bg-[#2a2b2e] rounded-[25px] border border-[#dbdbdb] dark:border-[#4a4b4f] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] transition-all duration-150 hover:scale-[1.02] overflow-hidden">
    <div
      className="absolute inset-0 z-0 transition-all duration-700
      [background:linear-gradient(135deg,rgba(239,239,239,1)_0%,rgba(255,255,255,1)_25%,rgba(57,58,61,0.08)_50%,rgba(255,255,255,1)_55%,rgba(219,219,219,1)_100%)]
      dark:[background:linear-gradient(135deg,rgba(42,43,46,1)_0%,rgba(30,31,34,1)_100%)]
      group-hover:[background:linear-gradient(180deg,#393a3d_0%,#1a1b1e_100%)]
      dark:group-hover:[background:linear-gradient(180deg,#393a3d_0%,#111214_100%)]"
    />

    <div className="relative z-10 h-full p-4 flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-4">
        <h3 className="font-['Avenir-Heavy'] text-xl text-[#393a3d] dark:text-[#efefef] group-hover:text-white transition-colors">
          {card.title[language]}
        </h3>

        <a
          href={card.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/tooltip"
        >
          <img
            className="w-[18px] h-[18px] min-w-[18px] min-h-[18px] transition-all [filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)] dark:[filter:brightness(0)_saturate(100%)_invert(100%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(80%)_sepia(10%)_saturate(200%)_brightness(110%)]"
            alt="GitHub"
            src="/icons/Property_1=Github.svg"
            loading="lazy"
          />
          <span
            className="absolute left-full top-1/2 -translate-y-1/2 ml-0.5
            pointer-events-none opacity-0 group-hover/tooltip:opacity-100
            transition-all duration-100 transform scale-95 group-hover/tooltip:scale-100
            bg-[#393a3d] text-white text-[10px] py-1 px-2 rounded-md whitespace-nowrap z-50 shadow-lg"
          >
            {t.projects.viewRepo}
          </span>
        </a>
      </div>

      <p className="font-['Avenir-Heavy'] text-sm text-[#393a3d] dark:text-[#dbdbdb] leading-[1.4] mb-2 ml-1.5 mr-1.5 group-hover:text-gray-200 transition-colors">
        {card.description[language]}
      </p>

      <div className="flex justify-between items-start mt-2.5 mb-3">
        <div className="font-['Avenir-Heavy'] text-m font-bold text-[#393a3d] dark:text-[#dbdbdb] leading-[22px] ml-5 space-y-2 group-hover:text-white transition-colors">
          {card.features[language].map((feature: string, idx: number) => (
            <p key={idx}>• {feature}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2 mr-10 font-['Avenir-Heavy'] text-sm text-[#393a3d] dark:text-[#efefef]">
          {card.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex h-[23px] items-center gap-1.5 px-3 py-1 bg-[#dbdbdb] dark:bg-[#393a3d] rounded-full"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className={`w-[15px] h-[15px] min-w-[15px] min-h-[15px] ${tech.noFilter ? "" : "[filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)] dark:[filter:brightness(0)_saturate(100%)_invert(100%)]"}`}
                loading="lazy"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex justify-end items-center gap-1">
        <span
          onClick={onSeeMore}
          className="text-[#393a3d]/60 dark:text-[#dbdbdb]/60 group-hover:text-[#dbdbdb] text-[11px] underline cursor-pointer font-['Avenir-Regular']"
        >
          {t.projects.seeMore}
        </span>
      </div>
    </div>
  </div>
);

export const Desktop = (): JSX.Element => {
  const { language, toggleLanguage, theme, toggleTheme, t } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSocialClick = (label: string) => {
    switch (label) {
      case "Mail":
        navigator.clipboard.writeText("romain.bourgin.pro@gmail.com");
        showToast(t.toast.emailCopied);
        break;
      case "Phone":
        navigator.clipboard.writeText("+33678903661");
        showToast(t.toast.phoneCopied);
        break;
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const stats = [
    { data: t.iAmHave.teamSpirit, icon: "/icons/team-spirit.svg" },
    { data: t.iAmHave.commercial, icon: "/icons/commercially-confident.svg" },
    { data: t.iAmHave.disciplined, icon: "/icons/discipline-target.svg" },
  ];

  return (
    <div className="bg-[#efefef] dark:bg-[#1a1b1e] w-full min-h-screen relative overflow-x-hidden">
      <div
        className="w-full h-full fixed top-0 left-0 z-0
        [background:radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.9)_0%,rgba(239,239,239,1)_100%)]
        dark:[background:radial-gradient(60%_60%_at_50%_0%,rgba(42,43,46,0.95)_0%,rgba(26,27,30,1)_100%)]"
      />

      <div className="relative z-10 w-full">
        <header className="w-full">
          <div className="w-full px-4 md:px-8 lg:px-20 xl:px-32 pt-5">
            <div className="flex justify-end items-center gap-3 mb-8">
              <button
                onClick={toggleLanguage}
                className="w-[26px] h-[26px] cursor-pointer transition-transform hover:scale-110"
                aria-label="Toggle language"
              >
                <img
                  key={language}
                  className="w-full h-full min-w-[24px] min-h-[24px]"
                  alt={
                    language === "en" ? "Switch to French" : "Switch to English"
                  }
                  src={
                    language === "en"
                      ? "/icons/fr_flag.svg"
                      : "/icons/us_flag.svg"
                  }
                  loading="lazy"
                />
              </button>
              <button
                onClick={toggleTheme}
                className="w-6 h-6 cursor-pointer transition-transform hover:scale-110"
                aria-label="Toggle theme"
              >
                <img
                  key={theme}
                  className="w-full h-full min-w-[24px] min-h-[24px] [filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)] dark:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                  alt="Dark mode"
                  src="/icons/tdesign_mode-dark.svg"
                  loading="lazy"
                />
              </button>
            </div>
          </div>

          <div className="relative w-full">
            <div className="w-full lg:hidden flex justify-center mb-8">
              <img
                className="w-[85%] h-auto object-contain rounded-2xl"
                alt="Profile"
                src="/images/profil_picture_circle.png"
                loading="eager"
              />
            </div>

            <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="w-full lg:w-[50%] px-4 md:px-8 lg:pl-20 xl:pl-32 pt-6 lg:pt-0 flex-shrink-0 flex flex-col items-center lg:items-start">
                <h1 className="font-['Avenir-Black'] font-black text-[#393a3d] dark:text-[#efefef] text-3xl md:text-4xl lg:text-5xl tracking-[4px] md:tracking-[6.24px] mb-4 text-center lg:text-left">
                  Romain BOURGIN
                </h1>

                <h2 className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#dbdbdb] text-2xl md:text-3xl lg:text-[40px] tracking-[1.5px] md:tracking-[2.40px] mb-6 text-center lg:text-left">
                  {t.title}
                </h2>

                <nav className="flex flex-wrap gap-3 mb-20 justify-center lg:justify-start">
                  <a
                    href="https://github.com/Romain-Brgn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-3 py-2.5 bg-white dark:bg-[#2a2b2e] rounded-[25px] border border-solid border-[#dbdbdb] dark:border-[#4a4b4f] cursor-pointer transition-all duration-150 hover:bg-[#393a3d] dark:hover:bg-[#efefef] group"
                  >
                    <img
                      className="w-6 h-6 transition-all duration-150 [filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)] dark:[filter:brightness(0)_saturate(100%)_invert(90%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)] dark:group-hover:[filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)]"
                      alt="GitHub"
                      src="/icons/Property_1=Github.svg"
                      loading="lazy"
                    />
                    <span className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#dbdbdb] text-sm md:text-base tracking-[0.80px] transition-colors duration-150 group-hover:text-white dark:group-hover:text-[#393a3d]">
                      {t.socialButtons.github}
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/romain-bourgin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-3 py-2.5 bg-white dark:bg-[#2a2b2e] rounded-[25px] border border-solid border-[#dbdbdb] dark:border-[#4a4b4f] cursor-pointer transition-all duration-150 hover:bg-[#393a3d] dark:hover:bg-[#efefef] group"
                  >
                    <img
                      className="w-6 h-6 transition-all duration-150 [filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)] dark:[filter:brightness(0)_saturate(100%)_invert(90%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)] dark:group-hover:[filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)]"
                      alt="LinkedIn"
                      src="/icons/Property_1=LinkedIn.svg"
                      loading="lazy"
                    />
                    <span className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#dbdbdb] text-sm md:text-base tracking-[0.80px] transition-colors duration-150 group-hover:text-white dark:group-hover:text-[#393a3d]">
                      {t.socialButtons.linkedin}
                    </span>
                  </a>
                  <button
                    onClick={() => handleSocialClick("Mail")}
                    className="inline-flex items-center justify-center gap-2.5 px-3 py-2.5 bg-white dark:bg-[#2a2b2e] rounded-[25px] border border-solid border-[#dbdbdb] dark:border-[#4a4b4f] cursor-pointer transition-all duration-150 hover:bg-[#393a3d] dark:hover:bg-[#efefef] group"
                  >
                    <img
                      className="w-6 h-6 transition-all duration-150 [filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)] dark:[filter:brightness(0)_saturate(100%)_invert(90%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)] dark:group-hover:[filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)]"
                      alt="Email"
                      src="/icons/Property_1=Mail.svg"
                      loading="lazy"
                    />
                    <span className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#dbdbdb] text-sm md:text-base tracking-[0.80px] transition-colors duration-150 group-hover:text-white dark:group-hover:text-[#393a3d]">
                      {t.socialButtons.mail}
                    </span>
                  </button>
                  <button
                    onClick={() => handleSocialClick("Phone")}
                    className="inline-flex items-center justify-center gap-2.5 px-3 py-2.5 bg-white dark:bg-[#2a2b2e] rounded-[25px] border border-solid border-[#dbdbdb] dark:border-[#4a4b4f] cursor-pointer transition-all duration-150 hover:bg-[#393a3d] dark:hover:bg-[#efefef] group"
                  >
                    <img
                      className="w-6 h-6 transition-all duration-150 [filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)] dark:[filter:brightness(0)_saturate(100%)_invert(90%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)] dark:group-hover:[filter:brightness(0)_saturate(100%)_invert(22%)_sepia(5%)_saturate(500%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)]"
                      alt="Phone"
                      src="/icons/Property_1=Phone.svg"
                      loading="lazy"
                    />
                    <span className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#dbdbdb] text-sm md:text-base tracking-[0.80px] transition-colors duration-150 group-hover:text-white dark:group-hover:text-[#393a3d]">
                      {t.socialButtons.phone}
                    </span>
                  </button>
                </nav>

                <p className="font-['Avenir-Regular'] font-bold text-base md:text-lg lg:text-xl leading-relaxed text-[#393a3d] dark:text-[#dbdbdb] mb-10 max-w-2xl text-center lg:text-left">
                  <span>{t.hero.part1}</span>
                  <span className="text-[#393a3d] dark:text-[#efefef] font-['Avenir-Black']">
                    {t.hero.part2}
                  </span>
                  <span>{t.hero.part3}</span>
                  <span className="text-[#393a3d] dark:text-[#efefef] font-['Avenir-Black']">
                    {t.hero.part4}
                  </span>
                  <span>{t.hero.part5}</span>
                  <span className="text-[#393a3d] dark:text-[#efefef] font-['Avenir-Black']">
                    {t.hero.part6}
                  </span>
                </p>

                <button
                  onClick={() => window.open("/cv.pdf", "_blank")}
                  className="inline-flex items-center justify-center gap-2 mb-12 px-8 py-3.5 rounded-full bg-[#393a3d] dark:bg-[#efefef] text-white dark:text-[#393a3d] font-['Avenir-Heavy'] text-lg md:text-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#393a3d]/20 dark:hover:shadow-[#efefef]/20 active:scale-95 group"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>{t.viewCV}</span>
                </button>
              </div>

              <div className="hidden lg:flex lg:w-[50%] justify-end self-end pr-8 xl:pr-16">
                <img
                  className="w-full max-w-lg h-auto object-contain object-bottom rounded-2xl"
                  alt="Profile"
                  src="/images/profil_picture_square.png"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="w-full px-4 md:px-8 lg:px-20 xl:px-32">
          <section className="mt-8 md:mt-16">
            <h2 className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#efefef] text-2xl md:text-3xl lg:text-[32px] mb-2 text-center lg:text-left">
              {t.projects.title}
            </h2>
            <p className="font-['Avenir-Heavy'] text-[#393a3d]/60 dark:text-[#dbdbdb]/70 text-lg md:text-xl mb-8 text-center lg:text-left">
              {t.projects.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectCards.map((card, idx) => (
                <ProjectCard
                  key={idx}
                  card={card}
                  t={t}
                  language={language}
                  onSeeMore={
                    card.liveUrl
                      ? () => window.open(card.liveUrl, "_blank")
                      : card.isCurrentSite
                        ? () =>
                            showToast(
                              language === "en"
                                ? "You are on this portfolio!"
                                : "Vous êtes sur ce portfolio !",
                            )
                        : undefined
                  }
                />
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-[#dbdbdb] dark:bg-[#393a3d] my-16 md:my-20" />

          <section className="mt-16 md:mt-20">
            <h2 className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#efefef] text-2xl md:text-3xl lg:text-[32px] mb-2 text-center lg:text-left">
              {t.lookingFor.title}
            </h2>
            <p className="font-['Avenir-Heavy'] text-[#393a3d]/60 dark:text-[#dbdbdb]/70 text-lg md:text-xl mb-8 text-center lg:text-left">
              {t.lookingFor.subtitle}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start">
              <div className="space-y-4 lg:w-full">
                {[
                  {
                    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                    text: t.lookingFor.school,
                  },
                  {
                    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                    text: t.lookingFor.degree,
                  },
                  {
                    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                    text: t.lookingFor.contractType,
                  },
                  {
                    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                    text: t.lookingFor.duration,
                  },
                  {
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    text: t.lookingFor.rhythm,
                  },
                  {
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    text: t.lookingFor.ready,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/60 dark:bg-[#2a2b2e]/60 backdrop-blur-sm rounded-lg p-5 border-l-4 border-[#393a3d] dark:border-[#dbdbdb] transition-all duration-300 hover:bg-white/90 dark:hover:bg-[#2a2b2e]/90"
                  >
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#393a3d] dark:text-[#dbdbdb]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={item.icon}
                        />
                      </svg>
                      <p className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#efefef] text-sm md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center items-center lg:items-start space-y-6 lg:w-full">
                <div className="w-full max-w-md">
                  <div className="bg-[#393a3d] dark:bg-[#2a2b2e] rounded-xl p-8 shadow-xl border border-[#4a4b4f]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-[#efefef]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <h3 className="font-['Avenir-Heavy'] text-[#efefef] text-xl">
                          Bachelor Data & IA
                        </h3>
                      </div>

                      <p className="font-['Avenir-Heavy'] text-[#dbdbdb]/90 text-sm leading-relaxed">
                        {language === "en"
                          ? "Discover the complete program of the Bachelor in Data & AI at EPSI Lyon."
                          : "Découvrez le programme complet du Bachelor Data & IA à l'EPSI Lyon."}
                      </p>

                      <button
                        onClick={() =>
                          window.open(
                            "https://www.epsi.fr/programmes/bachelor-developpeur-ia",
                            "_blank",
                          )
                        }
                        className="w-full mt-4 group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#efefef] hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                      >
                        <span className="font-['Avenir-Heavy'] text-[#393a3d] text-sm md:text-base">
                          {t.lookingFor.viewProgram}
                        </span>
                        <svg
                          className="w-5 h-5 text-[#393a3d] transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col gap-3 text-center lg:text-left">
                  {[
                    language === "en"
                      ? "School recognized by the State"
                      : "École reconnue par l'État",
                    language === "en"
                      ? "Diploma recognized at Bac+3 level"
                      : "Diplôme reconnu niveau Bac+3",
                    language === "en"
                      ? "Option to pursue a master's degree"
                      : "Poursuite en Master possible",
                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[#393a3d] dark:text-[#dbdbdb]"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-['Avenir-Heavy'] text-sm">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-[#dbdbdb] dark:bg-[#393a3d] my-16 md:my-20" />

          <section className="mt-16 md:mt-20">
            <div className="mb-8 md:mb-12">
              <h2 className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#efefef] text-2xl md:text-3xl lg:text-[32px] mb-2 text-center lg:text-left">
                {t.iAmHave.title}
              </h2>
              <p className="font-['Avenir-Heavy'] text-[#393a3d]/60 dark:text-[#dbdbdb]/70 text-lg md:text-xl text-center lg:text-left">
                {t.iAmHave.subtitle}
              </p>
            </div>

            <div className="flex flex-col md:flex-row bg-[#393a3d] dark:bg-[#2a2b2e] rounded-[10px] shadow-xl overflow-hidden">
              {stats.map((item, idx) => (
                <StatCard
                  key={idx}
                  icon={item.icon}
                  title={item.data.title}
                  stat={item.data.stat}
                  unit={item.data.unit}
                  description={item.data.description}
                  isLast={idx === stats.length - 1}
                />
              ))}
            </div>
          </section>

          <section className="mt-16 md:mt-20 text-center pb-20">
            <h2 className="font-['Avenir-Heavy'] text-[#393a3d] dark:text-[#efefef] text-2xl md:text-3xl lg:text-[32px] mb-8">
              {t.question}
            </h2>
            <button
              onClick={() => window.open("/cv.pdf", "_blank")}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#393a3d] dark:bg-[#efefef] text-white dark:text-[#393a3d] font-['Avenir-Heavy'] text-lg md:text-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#393a3d]/20 dark:hover:shadow-[#efefef]/20 active:scale-95 group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{t.viewCV}</span>
            </button>
          </section>
        </main>
      </div>

      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#393a3d] dark:bg-[#efefef] text-white dark:text-[#393a3d] px-6 py-3 rounded-lg shadow-lg z-50">
          <p className="font-['Avenir-Heavy'] text-sm">{toastMessage}</p>
        </div>
      )}
    </div>
  );
};

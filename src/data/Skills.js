/**
 * Umiejętności techniczne — format badge'ów (bez samooceny numerycznej).
 *
 * Każdy skill posiada:
 *  - name: wyświetlana nazwa
 *  - icon: klucz do iconMap w Skills.jsx
 *  - tag (opcjonalny): "daily" | "familiar" — do wizualnego wyróżnienia
 */
export const skills = [
  {
    category: "Języki programowania",
    items: [
      { name: "C#", icon: "FaMicrosoft", tag: "daily" },
      { name: "Java", icon: "FaJava", tag: "daily" },
      { name: "JavaScript", icon: "FaJsSquare", tag: "daily" },
      { name: "PHP", icon: "FaPhp", tag: "familiar" },
      { name: "C++", icon: "FaCode", tag: "familiar" },
      { name: "C", icon: "FaCode", tag: "familiar" },
    ],
  },
  {
    category: "Technologie webowe",
    items: [
      { name: "React", icon: "FaReact", tag: "daily" },
      { name: "HTML5", icon: "FaHtml5", tag: "daily" },
      { name: "CSS3", icon: "FaCss3", tag: "daily" },
      { name: "Bootstrap", icon: "FaBootstrap", tag: "daily" },
    ],
  },
  {
    category: "Narzędzia developerskie",
    items: [
      { name: "Git / GitHub", icon: "FaGithub", tag: "daily" },
      { name: "Visual Studio", icon: "DiVisualstudio", tag: "daily" },
      { name: "Android Studio", icon: "SiAndroidstudio", tag: "daily" },
      { name: "PHPStorm", icon: "DiPhp", tag: "familiar" },
      { name: "SQL", icon: "FaDatabase", tag: "familiar" },
      { name: "Docker", icon: "FaDocker", tag: "familiar" },
    ],
  },
];

export const softSkills = [
  {
    category: "Kompetencje miękkie",
    items: [
      {
        title: "Efektywna współpraca w zespole",
        description:
          "Doświadczenie w pracy projektowej, aktywna komunikacja, dzielenie się wiedzą oraz wspólne rozwiązywanie problemów technicznych.",
        icon: "FaUsers",
      },
      {
        title: "Szybkie przyswajanie wiedzy",
        description:
          "Zdolność do samodzielnego opanowania nowych technologii i narzędzi — potwierdzona wdrożeniem się w stack PHP podczas praktyk w Furgonetce.",
        icon: "FaLightbulb",
      },
      {
        title: "Samodzielność i zarządzanie czasem",
        description:
          "Łączenie pracy zarobkowej z nauką na studiach i rozwojem własnych projektów programistycznych.",
        icon: "FaClock",
      },
      {
        title: "Dokumentacja i metodyczność",
        description:
          "Tworzenie dokumentacji technicznej, pisanie testów jednostkowych i praca z procedurami jakościowymi (standardy korporacyjne).",
        icon: "FaFileAlt",
      },
    ],
  },
];
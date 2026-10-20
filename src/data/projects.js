export const projects = [
  {
    id: 1,
    title: "Asystent Kinowy (KinoBot Mobile)",
    description:
      "Aplikacja Android (Java/MVVM) z bazą Room, testowana wewnętrznie przez pracowników kina. Oferuje wielowątkowy import grafików z Excela (Apache POI) oraz obrazu (OCR), moduł rozliczeń Finanse Pro, Strażnika BHP oraz zestaw 50+ testów jednostkowych.",
    tech: ["Java", "Android SDK", "Room DB", "MVVM", "Apache POI", "OCR", "JUnit"],
    link: "https://github.com/karpi17/kinobotmobile",
    live: null,
  },
  {
    id: 2,
    title: "F1 UDP Telemetry Engine",
    description:
      "Aplikacja w Pythonie do nasłuchiwania i analizy strumienia telemetrii UDP w czasie rzeczywistym (do 60 Hz). Przetwarza pakiety binarne, liczy zużycie opon, bilans energii ERS, deltę czasową w sektorach oraz kalkuluje okna zjazdów do alei serwisowej.",
    tech: ["Python", "Sockets UDP", "Real-Time Data", "Multithreading"],
    link: "https://github.com/karpi17",
    live: null,
  },
  {
    id: 3,
    title: "Interaktywne E-CV & Portfolio",
    description:
      "Responsywna strona-portfolio zbudowana w React 18 z trybem ciemnym, semantycznym kodem HTML5, animacjami i automatycznym deploymentem Netlify CI/CD.",
    tech: ["React 18", "Bootstrap 5", "CSS3", "Netlify"],
    link: "https://github.com/karpi17/cv",
    live: "https://snazzy-chaja-20f64f.netlify.app/",
  },
];

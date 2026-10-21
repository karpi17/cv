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
    title: "F1 Real-Time Telemetry & AI Race Engineer",
    description:
      "Asynchroniczny system telemetryczny w Pythonie nasłuchujący strumienia UDP (port 20777, do 60 Hz). Deserializuje pakiety binarne, monitoruje zużycie opon (koło po kole), bilans energii ERS, deltę mikro-sektorów, stan uszkodzeń 22 bolidów oraz symuluje strategię pit-stopów.",
    tech: ["Python 3.12", "UDP Sockets", "Event-Driven", "Real-Time Data", "Multithreading"],
    link: "https://github.com/karpi17/f1-telemetry-engineer",
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

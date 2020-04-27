module.exports = {
  language: "en",
  url: "https://franciscalizo.com",
  siteTitle: "Francis Calizo",
  siteTitleShort: "Francis Calizo",
  author: "Francis Calizo",
  email: "FrancisACalizo@gmail.com",
  repo: "https://github.com/franciscalizo/portfolio-v2",
  description:
    "I'm a web | software developer proficient at creating modern and captivating web applications.",
  bio:
    "You can find me primarily using the latest JavaScript technologies to build front-end web projects, but I also aspire to develop myself into a full-stack engineer (as well as learn new languages and tools). I welcome challenging opportunities for growth and development ",
  skills: {
    header: "Specialized in writing modern, performant, and maintainable code.",
    description:
      "Equipped with the skills to create intuitive, dynamic user experiences. I have a serious passion for frontend architecture. My skill set includes, but is not limited to:",
  },
  featured: {
    header: "In IBM Power Systems Magazine.",
    description:
      "I've had the honor of being interviewed and featured in multiple issues of IBM Power Systems Magazine as a software developer.",
    articles: [
      {
        title: "05/2019 Issue - Spotlight",
        description:
          'Interview article in the "Snapshot" section of the IBM Power Systems Magazine May 2019 issue, recognizing diligent and accomplished users of the IBM Power System server.',
        url:
          "http://www.ibmsystemsmagpowersystemsdigital.com/nxtbooks/ibmsystemsmag/ibmsystems_power_201905/index.php?startid=48#/p/48",
      },
      {
        title: "11/2018 Issue - Fresh Faces",
        description:
          'Featured in the "Fresh Faces" section of the IBM Power Systems Magazine issue November 2018 , which showcases "innovators who help their organizations succeed"',
        url:
          "http://www.ibmsystemsmagpowersystemsdigital.com/nxtbooks/ibmsystemsmag/ibmsystems_fresh_faces/index.php#/p/42",
      },
    ],
  },
  portfolio: {
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, iusto, quo id mollitia, explicabo modi error aspernatur at nobis eius sequi officia maiores fugit dolorem quam beatae ut maxime illum?",
    projects: [
      {
        title: "Did FSU Win?",
        description:
          "A web app visualizing data and statistics regarding the FSU Football Team. Has the ability to view a countdown to the Noles' next football game, recent game updates, as well as schedule and roster information by year. View box scores, game stats, and play-by-play information for each game played.",
        img: "fsu.png",
        url: "https://www.didfsu.win/",
        github: "https://github.com/FrancisCalizo/did-florida-state-win",
        tech: ["React.js", "Tailwind CSS", "College Football API"],
      },
      {
        title: "The Covid-19 Report",
        description:
          "A graphical report on coronavirus (COVID-19) cases, with ability to filter by country or by US state. Uses graphs and charts to display confirmed cases, deaths, and recoveries based on chosen country/state.",
        img: "covid.png",
        url: "https://thecovidreport.netlify.app/",
        github: "https://github.com/FrancisCalizo/covid-19",
        tech: ["Gatsby.js", "Chart.js", "Tailwind CSS", "COVID-19 API"],
      },
    ],
  },
  colors: {
    salmon: "#e37263",
    textDark: "#343434",
  },
}

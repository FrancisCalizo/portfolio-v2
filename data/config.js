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
    "You can find me primarily using the latest JavaScript technologies to build front-end web projects, but I also have considerable experience in full-stack development. I am always eager to learn new languages and tools while welcoming challenging opportunities for growth and development ",
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
    header: "Selected Projects",
    description:
      "A select group of projects I've created, from personal websites to data visualizations and single page web applications. ",
    projects: [
      {
        title: "The Covid-19 Report",
        description:
          "A graphical report on coronavirus (COVID-19) cases, with ability to filter by country or by US state. Graphs and charts are used to visualize confirmed cases, deaths, and recoveries based on the chosen country/state.",
        img: "covid.png",
        url: "https://thecovidreport.netlify.app/",
        github: "https://github.com/FrancisCalizo/covid-19",
        tech: ["Gatsby.js", "Chart.js", "Tailwind CSS", "COVID-19 API"],
      },
      {
        title: "Save The Date!",
        description:
          "Official wedding website created for my future wife-to-be and myself. A single page application designed to my own creative taste, using Gatsby.js and styled components.",
        img: "wedding.png",
        url: "https://francisandcherrie.netlify.app/",
        github: "https://github.com/FrancisCalizo/cherrie-tickles-her-francy",
        tech: ["Gatsby.js", "Styled Components", "GraphQL"],
      },
      {
        title: "Portfolio-v2",
        description:
          "The very site you are currently looking at. A component-based SPA showcasing my projects, qualifications, and expertise as a software developer.",
        img: "portfolio.png",
        url: "https://franciscalizo.com/",
        github: "https://github.com/FrancisCalizo/portfolio-v2",
        tech: ["Gatsby.js", "Styled Components", "GraphQL"],
      },
      {
        title: "Ohyoufrancyblog",
        description:
          "My personal blog. A simplistic look at what goes on in my mind; my personal slice of the internet. Made with a basic Gatsbyjs starter theme and tweaked to my liking.",
        img: "blog.png",
        url: "https://ohyoufrancyblog.com/",
        github: "https://github.com/FrancisCalizo/ohyoufrancybruh",
        tech: ["Gatsby.js", "GraphQL"],
      },
      {
        title: "Did FSU Win?",
        description:
          "A web app visualizing stats and data of the FSU football team. View a countdown to the Noles' next game, recent game updates, as well as schedule and roster information by year. Observe box scores, game stats, and play-by-play information for each game.",
        img: "fsu.png",
        url: "https://didfloridastatewin.netlify.app/about",
        github: "https://github.com/FrancisCalizo/did-florida-state-win",
        tech: ["React.js", "Tailwind CSS", "College Football API"],
      },
      // {
      //   title: "Weathercast",
      //   description:
      //     "A mobile-first weather forecast application built with TypeScript, React.js, & Weatherbit API. Has the ability to view current weather, hourly and weekly forecast, & retrieve users current location.",
      //   img: "weather.png",
      //   url: "http://weathercasts.netlify.com",
      //   github: "https://github.com/FrancisCalizo/weathercast",
      //   tech: ["React.js", "Tailwind CSS", "Weatherbit API"],
      // },
      {
        title: "NPM Clone",
        description:
          "Back to the basics. An exact clone of the NPM.js landing page made purely in HTML/CSS. A comprehensive understanding of the fundamentals has always been pertinent to my success as a developer.",
        img: "npm.png",
        url: "http://npm-clone.netlify.com",
        github: "https://github.com/FrancisCalizo/npm-clone",
        tech: ["HTML", "CSS"],
      },
    ],
  },
  colorsLight: {
    bg: "#d3d3d3",
    bgAlt: "#fff",
    bright: "#e37263",
    textLight: "#696969",
    textDark: "#343434",
    primary: "#FFF",
    secondary: "#000",
    hoverTextDark: "#4e4e4e",
    hoverBright: "#fd8c7d",
    hoverTextDarkX4: "fd8c7d",
  },
  colorsDark: {
    bg: "#0a192f",
    bgAlt: "#172A45",
    bright: "#64ffda",
    textLight: "#8892b0",
    textDark: "#ccd6f6",
    primary: "#000",
    secondary: "#fff",
    hoverTextDark: "#a2acca",
    hoverBright: "#7efff4",
    hoverTextDarkX4: "eef8ff",
  },
  fonts: {
    body: "'Rubik', sans-serif;",
    headers: "'Playfair Display', serif;",
  },
}

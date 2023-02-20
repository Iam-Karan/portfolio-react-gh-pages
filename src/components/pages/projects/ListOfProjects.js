import BuzzPlay from "../../../images/buzzplaymockup.png";
import Flora from "../../../images/floramockup.png";
import ShopCo from "../../../images/shopcomockup.png";
import SnowRemover from "../../../images/snowRemover.png";

const androidIcon = <i class="fa-brands fa-android"></i>;
const iOSIcon = <i class="fa-brands fa-apple"></i>;
const flutterIcon = <i class="fa-regular fa-f"></i>;
const websiteIcon = <i class="fa-brands fa-react"></i>;

const listOfProjects = [
  {
    id: 1,
    name: "SnowRemover",
    type: "Mobile App",
    class: "fa-light fa-mobile-notch",
    description:
      '"The Snow Remover” app is a utility, infrastructure and service oriented app based on operations in cities in Canada that have a sub-zero temperature for various consecutive months at a time and accumulation of continuous snowfall hinders the flow of daily life and may certainly reduce productivity of the general population living in such harsh conditions. Even though metropolitan cities have infrastructure to deal with these problems, municipal corporations can only do so much when it comes to removing snow. To solve this problem which can prove to be a menace if not dealt with in a periodic manner, “The Snow Remover” app will provide all the infrastructure, personnel and services to remove accumulated snow from the driveway, porches and areas the users of the app require to be “snow free”. This idea originates from the realisation that an average Canadian or any individual who lives in conditions similar to Canada in the winters, spends anywhere between 20 to 45 minutes to clear the snow off their front door, making their way to their car and trying to wedge their car out of accumulated snow around the driveway. These conditions combined with a hurry to reach work might even lead to accidents, damage to vehicles or self. Some individuals hire expensive services costing anywhere between 75$ to 150$ per visit. The aim of this app is to provide a standardised and reliable service to best assist the clients of the app to keep a safe and cleaner front of the house which may save them time and effort they spend everyday. Some individuals take pride in doing the work themselves and even have enough time on their hands to solve this problem themselves but do not have the necessary equipment for doing so. Equipment that is powerful enough to handle snowy winters might be expensive, so for those individuals this app provides a leasing service for quality equipment on a seasonal basis. For individuals who would require a professional, this app acts as a portal for hiring personnel who will regularly and depending on the weather provide snow removal services. This app also acts as a portal for individuals in the snow removal business to sign up once vetted to enlist their services and find employment as an independent contractor.',
    image: SnowRemover,
    technicalStack: {
      technology: "Android, flutter, IOS",
      language: "Java, Dart, Swfit",
      database: "Firebase",
    },
    githubLink: [
      {
        tech: androidIcon,
        link: "https://github.com/Iam-Karan/SnowRemoverAndroid",
      },
      {
        tech: iOSIcon,
        link: "https://github.com/Iam-Karan/SnowRemover",
      },
      {
        tech: flutterIcon,
        link: "https://github.com/Iam-Karan/SnowRemoverflutter",
      },
    ],
  },
  {
    id: 2,
    name: "Flora",
    type: "Mobile App",
    class: "fa-light fa-mobile-notch",
    description:
      "Flower and gift delivery application is a platform where user can buy flowers and gift according to their taste. They can also make gift hamper and buy online from our application. User can make own user account on our application.Here, users will find so many functions like Flip-kart. User can add remove update the product in cart and favourite list.User can also track their order.",
    image: Flora,
    technicalStack: {
      technology: "Android, flutter, IOS",
      language: "Java, Dart, Swfit",
      database: "Firebase",
    },
    githubLink: [
      {
        tech: androidIcon,
        link: "https://github.com/Iam-Karan/Flora---Android-app",
      },
      {
        tech: iOSIcon,
        link: "https://github.com/Iam-Karan/Flora---IOS-app",
      },
      {
        tech: flutterIcon,
        link: "https://github.com/Iam-Karan/Flora---flutter-app",
      },
    ],
  },
  {
    id: 1,
    name: "ShopCo",
    type: "Web App",
    class: "fa-light fa-globe",
    description:
      "Shopco is basically e-commerce version of a retail store to setup their business online. It is present in each of the four key market segments listed below: It's all about business. Consumer to business. From consumer to the next. It also has privacy features. Its totally safe for users.",
    image: ShopCo,
    technicalStack: {
      technology: "HTML, CSS, JS",
      language: "React, Node.js, Express",
      database: "MongoDB",
    },
    githubLink: [
      {
        tech: websiteIcon,
        link: "https://github.com/Iam-Karan/ShopCo-React",
      },
    ],
  },
  {
    id: 1,
    name: "BuzzPlay",
    type: "Mobile App",
    class: "fa-light fa-mobile-notch",
    description:
      'For all the sport enthusiasts out there, "BuzzPlay" is the new age interactive App. that provides an environment to find and connect with other players. It gives you the info about every local outdoor sports events as well as online gaming events. The players individually register themselves and the captain creates the rest of the team. Once a team is formed, they can challenge other teams in their respective regions & all players of both the teams shall be notified of the same. This app also generates the statistical data about the players as per their previous achievements.',
    technicalStack: {
      technology: "Android",
      language: "Java, PHP",
      database: "MySQL",
    },
    image: BuzzPlay,
    githubLink: [],
  },
];

export default listOfProjects;
